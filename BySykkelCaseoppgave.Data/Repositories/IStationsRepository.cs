using System.Collections.Generic;
using System.Threading.Tasks;

public interface IStationsRepository
{
    Task<List<StationInfo>> GetStationInfos();
    Task<List<StationStatus>> GetStationStatuses();
}