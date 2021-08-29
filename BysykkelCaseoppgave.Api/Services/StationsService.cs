using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BysykkelCaseoppgave.Api;
using Microsoft.AspNetCore.Mvc;

public class StationsService : IStationsService
{
    private readonly IStationsRepository repository;

    public StationsService(IStationsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<IActionResult> Get(StationsFilterRequest filter)
    {
        var stationInfos = await repository.GetStationInfos();
        var stationStatuses = await repository.GetStationStatuses();
        var stations = new List<StationDto>();

        foreach (var stationInfo in stationInfos)
        {
            var stationStatus = stationStatuses.Find((x) => x.StationId == stationInfo.StationId);
            stations.Add(new StationDto(stationInfo, stationStatus));
        }

        if (filter.IsSortable()) {
            stations.Sort((a, b) => {
                // Multiply by 1000 to increase accuracy
                return (int)(1000*(Distance(a.Latitude, a.Longitude, filter.Latitude, filter.Longitude) - Distance(b.Latitude, b.Longitude, filter.Latitude, filter.Longitude)));
            });
        }

        return new OkObjectResult(stations.Where(filter.Keep).ToList());
    }

    private double Distance(double xLat, double xLon, double? yLat, double? yLon)
    {
        var lat = (double)yLat - xLat;
        var lon = (double)yLon - xLon;

        return Math.Sqrt(lat*lat + lon*lon);
    }
}
