using CubeSummation.Contracts.Logger;
using CubeSummation.Contracts.Repositories;
using CubeSummation.Contracts.Services;
using CubeSummation.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CubeSummation.Services
{
    public class CubeService: BaseService, ICubeService
    {
        public CubeService(IWrapperRepository wrapperRepository, ILoggerManager logger)
            :base(wrapperRepository, logger)
        {
        }

        public IList<Cube> GetAll()
        {
            try
            {
                return _wrapperRepository.Cube.GetAll().ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError("CubeService::GetAll::" + ex.Message);
                throw;
            }
        }

        public Cube GetById(Guid cubeId)
        {
            try
            {
                return _wrapperRepository.Cube.GetById(cubeId);

            }
            catch (Exception ex)
            {
                _logger.LogError("CubeService::GetById::" + ex.Message);
                throw;
            }
        }
        
        public void Create(Cube cube)
        {
            try
            {
                _wrapperRepository.Cube.Create(cube);
                _wrapperRepository.Cube.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError("CubeService::Create::" + ex.Message);
                throw;
            }
        }

        public void Update(Cube cube)
        {
            try
            {
                _wrapperRepository.Cube.Update(cube);
                _wrapperRepository.Cube.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError("CubeService::Update::" + ex.Message);
                throw;
            }
        }

        public void Delete(Cube cube)
        {
            try
            {
                _wrapperRepository.Cube.Delete(cube);
                _wrapperRepository.Cube.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError("CubeService::Delete::" + ex.Message);
                throw;
            }
        }
    }
}

