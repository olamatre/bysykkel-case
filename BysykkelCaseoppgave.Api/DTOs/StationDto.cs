using System;

namespace BysykkelCaseoppgave.Api
{
    public class StationDto
    {
        public uint StationId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public uint NumBikesAvailable { get; set; }
        public uint NumDocksAvailable { get; set; }
        public uint Capacity { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public StationDto()
        {
            
        }
        public StationDto(StationInfo stationInfo, StationStatus stationStatus)
        {
            StationId = stationInfo.StationId;
            Name = stationInfo.Name;
            Address = stationInfo.Address;
            NumBikesAvailable = stationStatus.NumBikesAvailable;
            NumDocksAvailable = stationStatus.NumDocksAvailable;
            Capacity = stationInfo.Capacity;
            Latitude = stationInfo.Latitude;
            Longitude = stationInfo.Longitude;
        }
    }
}
