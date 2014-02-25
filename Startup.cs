using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(BigAngleR.Startup))] 
namespace BigAngleR
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    };
}
