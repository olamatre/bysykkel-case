using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BysykkelCaseoppgave.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StationsController : ControllerBase
    {
        private readonly IStationsService service;

        public StationsController(IStationsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetStations([FromQuery] StationsFilterRequest filter)
        {
            return await service.Get(filter);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStationDetails(uint id)
        {
            return await service.GetDetails(id);
        }
    }
}
