
using System.Collections.Generic;
using Microsoft.AspNet.SignalR;

namespace BigAngleR
{
    public class HomeHub : Hub
    {
        private static readonly List<dynamic> Items = new List<dynamic>();

        public dynamic Load()
        {
            return new
                   {
                       Title = "from server",
                       Items = Items,
                   };
        }

        public void Add(string item)
        {
            Items.Add(item);
            Clients.All.updateItems(Items);
        }
    };
}
