using System.Collections.Generic;
using System.Text.Json.Serialization;

public class StationStatusResponse {
    [JsonPropertyName("last_updated")]
    public uint LastUpdated { get; set; }
    [JsonPropertyName("data")]
    public StationStatusData Data { get; set; }
}

public class StationStatusData
{
    [JsonPropertyName("stations")]
    public List<StationStatusObject> Stations { get; set; }
}

public class StationStatusObject
{
    [JsonPropertyName("is_installed")]
    public int IsInstalled { get; set; }
    [JsonPropertyName("is_renting")]
    public int IsRenting { get; set; }
    [JsonPropertyName("num_bikes_available")]
    public uint NumBikesAvailable { get; set; }
    [JsonPropertyName("num_docks_available")]
    public uint NumDocksAvailable { get; set; }
    [JsonPropertyName("last_reported")]
    public uint LastReported { get; set; }
    [JsonPropertyName("is_returning")]
    public int IsReturning { get; set; }
    [JsonPropertyName("station_id")]
    public string StationId { get; set; }
    
}