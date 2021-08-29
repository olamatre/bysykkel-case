using System.Collections.Generic;
using System.Threading.Tasks;

public class StationsRepository : IStationsRepository
{
    private readonly IBikeApiClient client;

    public StationsRepository(IBikeApiClient client)
    {
        this.client = client;
    }
    public async Task<List<StationInfo>> GetStationInfos()
    {
        var stationInfos = await client.GetStationInfos();
        var stations = new List<StationInfo>();

        foreach (var station in stationInfos.StationsData.Stations)
        {
            stations.Add(new StationInfo {
                StationId = uint.Parse(station.StationId),
                Name = station.Name,
                Address = station.Address,
                Latitude = station.Latitude,
                Longitude = station.Longitude,
                Capacity = station.Capacity
            });
        }

        return stations;
    }

    public async Task<List<StationStatus>> GetStationStatuses()
    {
        var stationStatuses = await client.GetStationStatuses();
        var stations = new List<StationStatus>();

        foreach (var station in stationStatuses.Data.Stations)
        {
            stations.Add(new StationStatus {
                IsInstalled = station.IsInstalled == 1 ? true : false,
                IsRenting = station.IsRenting == 1 ? true : false,
                NumBikesAvailable = station.NumBikesAvailable,
                NumDocksAvailable = station.NumDocksAvailable,
                LastReported = station.LastReported,
                IsReturning = station.IsReturning == 1 ? true : false,
                StationId = uint.Parse(station.StationId)
            });
        }

        return stations;
    }
}