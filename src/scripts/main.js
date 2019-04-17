// custom select
function customSelect() {

    var _dropdown,
        settings = {autoReinitialise: true};

    $('select').styler({
        selectSearch: false,
        onFormStyled: function(){
            _dropdown = $('.jq-selectbox__dropdown');
            _dropdown.find('ul').wrap('<div class="scroll-pane" ></div>');
        },
        onSelectOpened: function(){
            var _ul = $(this).find('.jq-selectbox__dropdown ul'),
                height = _ul.height(),
                _srollPane = _dropdown.find('.scroll-pane');

            _srollPane.height(height);
            _ul.css('max-height', 'none');
            _srollPane.jScrollPane();
        }
    });

}
customSelect();