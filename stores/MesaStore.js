import Reflux from 'reflux';
import $ from 'jquery';
import MesaActions from '../actions/MesaActions';

var MesaStore = Reflux.createStore({
    listenables: [MesaActions],
    Mesalist: [],
    
    init: function() {
    	 this.fetchList();        
    },

    fetchList: function() {
      $.ajax({
		  crossDomain: true,
		  cache: false,
      context: this,
		  url: 'https://restaurant-node.herokuapp.com/api/tables/available/4',
		  method: "GET",
      success: function(data) {
          console.log('fetch complete');
          this.Mesalist = data.slice();
          this.trigger(this.Mesalist);     
        }
      });
    }
});

export default MesaStore;
