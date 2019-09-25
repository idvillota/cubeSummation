using CubeSummation.Contracts.Repositories;
using CubeSummation.Entities;

namespace CubeSummation.Repository
{
    public class WrapperRepository : IWrapperRepository
    {
        private RepositoryContext _repoContext;
        public ICubeRepository _cube; 

        public ICubeRepository Cube
        {
            get
            {
                _cube = _cube == null ? new CubeRepository(_repoContext) : _cube;
                return _cube;
            }
        }

        public WrapperRepository(RepositoryContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        public void Save()
        {
            _repoContext.SaveChanges();
        }
    }
}
