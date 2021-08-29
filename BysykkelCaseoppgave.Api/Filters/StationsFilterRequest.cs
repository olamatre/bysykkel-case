using BysykkelCaseoppgave.Api;

public class StationsFilterRequest
{
    public bool? FilterAvailableBikes { get; set; }
    public bool? FilterAvailableDocks { get; set; }
    public bool? SortByClosest { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }

    public bool Keep(StationDto station)
    {
        if (FilterAvailableBikes == true && station.NumBikesAvailable == 0) {
            return false;
        }

        if (FilterAvailableDocks == true && station.NumDocksAvailable == 0) {
            return false;
        }

        return true;
    }

    public bool IsSortable() {
        if (SortByClosest == false) {
            return false;
        }

        if (Latitude == null) {
            return false;
        }

        if (Longitude == null) {
            return false;
        }

        return true;
    }
}