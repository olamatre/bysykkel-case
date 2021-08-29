using System.Collections.Generic;
using System.Threading.Tasks;

public interface IBikeApiClient
{
    Task<StationInformationResponse> GetStationInfos();
    Task<StationStatusResponse> GetStationStatuses();
}