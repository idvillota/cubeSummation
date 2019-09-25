using CubeSummation.Contracts.Logger;
using CubeSummation.Contracts.Repositories;

namespace CubeSummation.Services
{
    public class BaseService
    {
        internal ILoggerManager _logger;
        internal IWrapperRepository _wrapperRepository;

        public BaseService(IWrapperRepository wrapperRepository, ILoggerManager logger)
        {
            _wrapperRepository = wrapperRepository;
            _logger = logger;
        }
    }
}
