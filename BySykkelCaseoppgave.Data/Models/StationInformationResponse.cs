using System.Collections.Generic;
using System.Text.Json.Serialization;

public class StationInformationResponse
{
    [JsonPropertyName("last_updated")]
    public uint LastUpdated { get; set; }
    [JsonPropertyName("data")]
    public StationInfoData StationsData { get; set; }
}

public class StationInfoData
{
    [JsonPropertyName("stations")]
    public List<StationInfoObject> Stations { get; set; }
}

public class StationInfoObject
{
    [JsonPropertyName("station_id")]
    public string StationId { get; set; }
    [JsonPropertyName("name")]
    public string Name { get; set; }
    [JsonPropertyName("address")]
    public string Address { get; set; }
    [JsonPropertyName("lat")]
    public double Latitude { get; set; }
    [JsonPropertyName("lon")]
    public double Longitude { get; set; }
    [JsonPropertyName("capacity")]
    public uint Capacity { get; set; }
}