Template.home.helpers({
    totalVoters: function(pro, con) {
        return pro + con;
    },
    getStatusClass: function(status) {
        return status === -1 ? 'royal' : 'balanced';
    },
    getVoteClass: function(vote) {
        switch (vote) {
            case 1:
                return 'balanced';
            case -1:
                return 'royal';
            case 0:
                return 'dark';
        }
    },
    getNumbersClass: function(pro, con) {
        return pro > con ? 'balanced' : 'royal';
    },
    getOpposition: function(status, vote) {
        return status * vote < 0;
    },
    getStatusText: function(status) {
        switch (status) {
            case 1:
                return 'ratifié';
            case -1:
                return 'rejeté';
        }
    },
    getVoteText: function(vote) {
        switch (vote) {
            case 1:
                return 'pour';
            case -1:
                return 'contre';
            case 0:
                return 'n\'a pas voté';
        }
    },
    items: function() {
        return [{
            body: 'l\'article unique du projet de loi autorisant la ratification de l\'accord d\'association entre l\'Union européenne et la Communauté européenne de l\'énergie atomique et leurs Etats membres, d\'une part, et l\'Ukraine, d\'autre part. ',
            refScrutin: 'http://www.assemblee-nationale.fr/14/dossiers/accord_association_UE_Euratom_Georgie.asp',
            title: 'law',
            subTitle: 'lol',
            vote: 1,
            status: 1,
            con: 54,
            pro: 85
        }, {
            body: 'la proposition de résolution visant au maintien des classes bilangues pour l\'apprentissage de l\'allemand. ',
            title: 'law',
            subtitle: 'lol',
            vote: -1,
            refResource: 'http://www.assemblee-nationale.fr/14/dossiers/accord_USA_indemnisation_victimes_Shoah.asp',
            refScrutin: 'http://www2.assemblee-nationale.fr/scrutins/detail/(legislature)/14/(num)/1137',
            status: -1,
            con: 55,
            pro: 25
        }, {
            body: 'la proposition de résolution visant au maintien des classes bilangues pour l\'apprentissage de l\'allemand. ',
            title: 'law',
            subtitle: 'lol',
            vote: 0,
            status: 1,
            con: 55,
            pro: 250
        }];
    },
    watchee: {
        name: 'Dominique Nachury'
    }
});

Template.home.events({
    'click button': function(event, template) {
        Session.set('myAppVariable', Math.floor(Math.random() * 11));
    }
});
