using CubeSummation.Contracts.Logger;
using CubeSummation.Contracts.Services;
using CubeSummation.Entities.Models;
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
        public IActionResult Get(Guid id)
        {
            try
            {
                var cube = _cubeService.GetById(id);
                _logger.LogInfo($"Returned cube with id:{id}");
                return Ok(cube);
            }
            catch (Exception ex)
            {
                _logger.LogError($"CubeController::GetById::{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }

        }

        // POST: api/Cube
        [HttpPost]
        public IActionResult Post(Cube cube)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    _logger.LogError($"CubeController::Post::ModelStateInvalid");
                    return BadRequest(ModelState);
                }
                _cubeService.Create(cube);
                return Ok(cube);
            }
            catch (Exception ex)
            {
                _logger.LogError($"CubeController::Post::{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        // PUT: api/Cube/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, Cube cube)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    _logger.LogError($"CubeController::Put::ModelStateInvalid");
                    return BadRequest(ModelState);
                }
                _cubeService.Update(cube);
                return Ok(cube);
            }
            catch (Exception ex)
            {
                _logger.LogError($"CubeController::Put::{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                var cube = _cubeService.GetById(id);
                if (cube.Id == Guid.Empty)
                {
                    _logger.LogError($"CubeController::Delete::Cube with id {id} not found");
                    return NotFound();
                }
                _cubeService.Delete(cube);
                return Ok(cube);
            }
            catch (Exception ex)
            {
                _logger.LogError($"CubeController::Delete::{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
