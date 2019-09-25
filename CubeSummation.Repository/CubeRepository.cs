using CubeSummation.Contracts.Repositories;
using CubeSummation.Entities;
using CubeSummation.Entities.Models;

namespace CubeSummation.Repository
{
    public class CubeRepository: RepositoryBase<Cube>, ICubeRepository
    {
        public CubeRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {

        }
    }
}
