public class StationStatus
{
     public bool IsInstalled { get; set; }
     public bool IsRenting { get; set; }
     public uint NumBikesAvailable { get; set; }
     public uint NumDocksAvailable { get; set; }
     public uint LastReported { get; set; }
     public bool IsReturning { get; set; }
     public uint StationId { get; set; }
}
