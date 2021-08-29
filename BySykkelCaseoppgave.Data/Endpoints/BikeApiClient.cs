using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

public class BikeApiClient : IBikeApiClient
{
    private const string clientIdentifier = "olamatre-bysykkelcase";
    private HttpClient client;

    public BikeApiClient(HttpClient client)
    {
        this.client = client;
    }

    public async Task<StationInformationResponse> GetStationInfos()
    {
        try
        {
            client.DefaultRequestHeaders.Add("Client-Identifier", clientIdentifier);
            using var responseStream = await client.GetStreamAsync("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json");
            var stationInformation = await JsonSerializer.DeserializeAsync<StationInformationResponse>(responseStream);
            
            return stationInformation;
        }
        catch (Exception e)
        {
            return null;
        }
    }

    public async Task<StationStatusResponse> GetStationStatuses()
    {
        try
        {
            client.DefaultRequestHeaders.Add("Client-Identifier", clientIdentifier);
            using var responseStream = await client.GetStreamAsync("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json");
            var staionStatus = await JsonSerializer.DeserializeAsync<StationStatusResponse>(responseStream);
            
            return staionStatus;
        }
        catch (Exception e)
        {
            return null;
        }
    }
}