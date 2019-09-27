using CubeSummation.Contracts.Logger;
using CubeSummation.Contracts.Repositories;
using CubeSummation.Contracts.Services;
using CubeSummation.Entities;
using CubeSummation.Repository;
using CubeSummation.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CubeSummation.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options => { });
        }

        public static void ConfigureLoggerService(this IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerService>();
        }

        public static void ConfigureSQLContext(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config["ConnectionStrings:ConnectionString"];
            services.AddDbContext<RepositoryContext>(o => o.UseSqlServer(connectionString));
        }

        public static void ConfigureRepositoryWrapper(this IServiceCollection services)
        {
            services.AddScoped<IWrapperRepository, WrapperRepository>();
        }

        public static void ConfigureDependencies(this IServiceCollection services)
        {
            services.AddTransient<ICubeService, CubeService>();
            services.AddTransient<IWrapperRepository, WrapperRepository>();
        }
    }
}
