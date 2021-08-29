using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

public interface IStationsService
{
    Task<IActionResult> Get(StationsFilterRequest filter);
}