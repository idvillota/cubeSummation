using CubeSummation.Contracts.Logger;
using CubeSummation.Contracts.Services;
using Microsoft.AspNetCore.Mvc;
using System;

namespace CubeSummation.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CubeController : ControllerBase
    {
        private ILoggerManager _logger;
        private ICubeService _cubeService;

        public CubeController(ILoggerManager logger, ICubeService cubeService)
        {
            _logger = logger;
            _cubeService = cubeService;
        }

        // GET: api/Cube
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var cubes = _cubeService.GetAll();
                _logger.LogInfo("Returned all cubes from database");
                return Ok(cubes);
            }
            catch (Exception ex)
            {
                _logger.LogError($"CubeController::Get::{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        // GET: api/Cube/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cube
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Cube/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
