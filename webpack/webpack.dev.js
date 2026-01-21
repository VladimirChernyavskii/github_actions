const path = require('path'); //РґР»СЏ С‚РѕРіРѕ С‡С‚РѕР±С‹ РїСЂРµРІСЂР°С‚РёС‚СЊ РѕС‚РЅСЃРёС‚РµР»СЊРЅС‹Р№ РїСѓС‚СЊ РІ Р°Р±СЃРѕР»СЋС‚РЅС‹Р№ РјС‹ Р±СѓРґРµРј РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїР°РєРµС‚ path
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './dist'), // РїСѓС‚СЊ, РєСѓРґР° "СЃРјРѕС‚СЂРёС‚" СЂРµР¶РёРј СЂР°Р·СЂР°Р±РѕС‚С‡РёРєР°
		// compress: true, // СЌС‚Рѕ СѓСЃРєРѕСЂРёС‚ Р·Р°РіСЂСѓР·РєСѓ РІ СЂРµР¶РёРјРµ СЂР°Р·СЂР°Р±РѕС‚РєРё
		port: 8080, // РїРѕСЂС‚, С‡С‚РѕР±С‹ РѕС‚РєСЂС‹РІР°С‚СЊ СЃР°Р№С‚ РїРѕ Р°РґСЂРµСЃСѓ localhost:8080, РЅРѕ РјРѕР¶РЅРѕ РїРѕРјРµРЅСЏС‚СЊ РїРѕСЂС‚
		open: true, // СЃР°Р№С‚ Р±СѓРґРµС‚ РѕС‚РєСЂС‹РІР°С‚СЊСЃСЏ СЃР°Рј РїСЂРё Р·Р°РїСѓСЃРєРµ npm run dev
		hot: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
};
