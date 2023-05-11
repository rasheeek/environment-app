import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }



  cities = [
    {
      "coord": {
        "lon": 48.570728,
        "lat": 34.790878
      },
      "name": "Azadshahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 34.058331,
        "lat": 35.012501
      },
      "name": "Protaras",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 47.055302,
        "lat": 34.383801
      },
      "name": "Kahriz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.9725,
        "lat": 34.073399
      },
      "name": "Nurabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.309422,
        "lat": 35.23455
      },
      "name": "Istgah-e Garmsar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.56889,
        "lat": 35.439442
      },
      "name": "Qarchak",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.195999,
        "lat": 36.213001
      },
      "name": "Khorram Darreh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 44.893799,
        "lat": 2.6185
      },
      "name": "Wanlaweyn",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 44.529991,
        "lat": 1.78784
      },
      "name": "Qoryooley",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 49.872822,
        "lat": 11.47197
      },
      "name": "Qandala",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.34375,
        "lat": 2.03711
      },
      "name": "Mogadishu",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 42.544498,
        "lat": 3.79376
      },
      "name": "Luuq",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 42.545361,
        "lat": -0.35817
      },
      "name": "Kismaayo",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 42.785351,
        "lat": 0.48829
      },
      "name": "Jilib",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.500481,
        "lat": 2.78087
      },
      "name": "Jawhar",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 42.744968,
        "lat": 0.06968
      },
      "name": "Jamaame",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 44.064999,
        "lat": 9.56
      },
      "name": "Hargeysa",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 47.430828,
        "lat": 6.76972
      },
      "name": "Gaalkacyo",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 49.816399,
        "lat": 7.9803
      },
      "name": "Eyl",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 47.36795,
        "lat": 10.61616
      },
      "name": "Ceerigaabo",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 47.180641,
        "lat": 3.84878
      },
      "name": "Ceeldheer",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 44.07806,
        "lat": 2.80257
      },
      "name": "Buurhakaba",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.56744,
        "lat": 3.85375
      },
      "name": "Buulobarde",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.53363,
        "lat": 9.52212
      },
      "name": "Burco",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 49.18158,
        "lat": 11.28421
      },
      "name": "Boosaaso",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.01432,
        "lat": 10.43959
      },
      "name": "Berbera",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.203609,
        "lat": 4.73583
      },
      "name": "Beledweyne",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 43.649799,
        "lat": 3.11383
      },
      "name": "Baydhabo",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 42.27644,
        "lat": 2.34464
      },
      "name": "Baardheere",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 45.121201,
        "lat": 2.1381
      },
      "name": "Afgooye",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 43.315182,
        "lat": 14.1951
      },
      "name": "Zabid",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.377949,
        "lat": 14.29804
      },
      "name": "Yarim",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.020908,
        "lat": 13.57952
      },
      "name": "Taizz",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.324421,
        "lat": 15.17177
      },
      "name": "Sayyan",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.206669,
        "lat": 15.35472
      },
      "name": "Sanaa",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.308578,
        "lat": 15.31586
      },
      "name": "Sahar",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.881939,
        "lat": 13.05667
      },
      "name": "Lahij",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.183331,
        "lat": 13.96667
      },
      "name": "Ibb",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 43.60582,
        "lat": 15.69425
      },
      "name": "Hajjah",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 44.114689,
        "lat": 13.83446
      },
      "name": "Dhi as Sufal",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 43.324459,
        "lat": 14.51635
      },
      "name": "Bayt al Faqih",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 43.285061,
        "lat": 15.05835
      },
      "name": "Bajil",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 49.124241,
        "lat": 14.54248
      },
      "name": "Al Mukalla",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 42.954521,
        "lat": 14.79781
      },
      "name": "Al Hudaydah",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 45.57272,
        "lat": 13.98523
      },
      "name": "Al Bayda",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 23.976391,
        "lat": 32.083611
      },
      "name": "Tobruk",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.25205,
        "lat": 31.66818
      },
      "name": "Suluq",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 22.63669,
        "lat": 32.76704
      },
      "name": "Darnah",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.066669,
        "lat": 32.116669
      },
      "name": "Benghazi",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.12022,
        "lat": 30.9522
      },
      "name": "Az Zuwaytinah",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 23.2857,
        "lat": 24.20487
      },
      "name": "At Taj",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.579109,
        "lat": 32.534142
      },
      "name": "Al Aquriyah",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 22.242371,
        "lat": 32.76162
      },
      "name": "Al Qubbah",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.831739,
        "lat": 32.48798
      },
      "name": "Al Marj",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 21.75506,
        "lat": 32.762718
      },
      "name": "Al Bayda",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.596531,
        "lat": 32.189999
      },
      "name": "Al Abyar",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 20.226259,
        "lat": 30.755449
      },
      "name": "Ajdabiya",
      "country": "LY"
    },
    {
      "coord": {
        "lon": 42.700081,
        "lat": 37.14817
      },
      "name": "Zakhu",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 47.916771,
        "lat": 30.040541
      },
      "name": "Umm Qasr",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.62994,
        "lat": 34.890461
      },
      "name": "Tozkhurmato",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.678219,
        "lat": 34.607121
      },
      "name": "Tikrit",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.119171,
        "lat": 36.489441
      },
      "name": "Qada Talkif",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.03886,
        "lat": 36.809021
      },
      "name": "Sinah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.875622,
        "lat": 34.200958
      },
      "name": "Samarra",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.280281,
        "lat": 32.714722
      },
      "name": "Nahiyat Saddat al Hindiyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.531109,
        "lat": 36.61631
      },
      "name": "Rawanduz",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 41.909302,
        "lat": 34.48164
      },
      "name": "Rawah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.37373,
        "lat": 36.271461
      },
      "name": "Qada al Hamdaniyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.5541,
        "lat": 33.749859
      },
      "name": "Mandali",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.627781,
        "lat": 36.082142
      },
      "name": "Koysinceq",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.966099,
        "lat": 34.695869
      },
      "name": "Kifri",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.39222,
        "lat": 35.46806
      },
      "name": "Kirkuk",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.024879,
        "lat": 32.616032
      },
      "name": "Karbala",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.01062,
        "lat": 36.19257
      },
      "name": "Erbil",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 42.825089,
        "lat": 33.64159
      },
      "name": "Hit",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.986111,
        "lat": 35.17778
      },
      "name": "Halabjah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 42.378059,
        "lat": 34.139721
      },
      "name": "Hadithah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.831669,
        "lat": 35.53653
      },
      "name": "Chamchamal",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.487,
        "lat": 34.931141
      },
      "name": "Bayji",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.655449,
        "lat": 33.748459
      },
      "name": "Baqubah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.954102,
        "lat": 35.618301
      },
      "name": "Paynjuwayn",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.145309,
        "lat": 34.01638
      },
      "name": "Balad",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.400879,
        "lat": 33.34058
      },
      "name": "Baghdad",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 47.701141,
        "lat": 30.39447
      },
      "name": "Az Zubayr",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.775829,
        "lat": 32.92556
      },
      "name": "As Suwayrah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.437489,
        "lat": 35.561131
      },
      "name": "As Sulaymaniyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.294399,
        "lat": 31.33198
      },
      "name": "As Samawah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.66016,
        "lat": 31.58737
      },
      "name": "Nahiyat ash Shinafiyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 46.174179,
        "lat": 31.411711
      },
      "name": "Ash Shatrah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.599041,
        "lat": 31.963619
      },
      "name": "Ash Shamiyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 40.284821,
        "lat": 33.038071
      },
      "name": "Ar Rutbah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.202461,
        "lat": 31.526291
      },
      "name": "Ar Rumaythah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.30584,
        "lat": 33.422569
      },
      "name": "Ar Ramadi",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 46.261021,
        "lat": 31.05205
      },
      "name": "An Nasiriyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.33976,
        "lat": 31.998541
      },
      "name": "An Najaf al Ashraf",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 41.933102,
        "lat": 34.465889
      },
      "name": "Anat al Qadimah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.682812,
        "lat": 32.297989
      },
      "name": "Imam Qasim",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.282509,
        "lat": 32.783321
      },
      "name": "Al Musayyib",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.49107,
        "lat": 31.804159
      },
      "name": "Al Mishkhab",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.936939,
        "lat": 33.978611
      },
      "name": "Al Miqdadiyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.097771,
        "lat": 36.334641
      },
      "name": "Al Mawsil al Jadidah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.118889,
        "lat": 36.334999
      },
      "name": "Mosul",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 47.175289,
        "lat": 31.572321
      },
      "name": "Al Majar al Kabir",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.819019,
        "lat": 32.514702
      },
      "name": "Al Kut",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.526371,
        "lat": 33.819962
      },
      "name": "Khalis",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 46.686371,
        "lat": 32.463261
      },
      "name": "Ali al Gharbi",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.2225,
        "lat": 32.543331
      },
      "name": "Al Hindiyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.435261,
        "lat": 32.480141
      },
      "name": "Al Hillah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 46.043301,
        "lat": 32.173489
      },
      "name": "Al Hayy",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 47.720829,
        "lat": 30.718611
      },
      "name": "Al Harithah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.619598,
        "lat": 31.743111
      },
      "name": "Nahiyat Ghammas",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 46.722778,
        "lat": 30.969721
      },
      "name": "Nahiyat al Fuhud",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 48.474121,
        "lat": 29.977631
      },
      "name": "Al Faw",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 43.77951,
        "lat": 33.353802
      },
      "name": "Al Fallujah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 47.788849,
        "lat": 30.53488
      },
      "name": "Al Basrah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.06163,
        "lat": 32.90583
      },
      "name": "Al Aziziyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 47.139599,
        "lat": 31.840639
      },
      "name": "Al Amarah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 45.250549,
        "lat": 32.068981
      },
      "name": "Afak",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.23444,
        "lat": 33.846668
      },
      "name": "Ad Dujayl",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.93063,
        "lat": 31.990511
      },
      "name": "Ad Diwaniyah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 44.185001,
        "lat": 33.308331
      },
      "name": "Abu Ghurayb",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 38.06374,
        "lat": 24.089121
      },
      "name": "Yanbu al Bahr",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 37.268501,
        "lat": 25.021259
      },
      "name": "Umm Lajj",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 38.663738,
        "lat": 31.67252
      },
      "name": "Turayf",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 41.633099,
        "lat": 21.21406
      },
      "name": "Turabah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.036942,
        "lat": 26.57332
      },
      "name": "Tarut",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 36.583328,
        "lat": 28.383329
      },
      "name": "Tabuk",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 38.21603,
        "lat": 30.49987
      },
      "name": "Tubarjal",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 39.58572,
        "lat": 24.49258
      },
      "name": "Sultanah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.040459,
        "lat": 26.48522
      },
      "name": "Sayhat",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.944351,
        "lat": 16.59601
      },
      "name": "Samitah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 40.206409,
        "lat": 29.96974
      },
      "name": "Sakaka",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.952229,
        "lat": 26.64986
      },
      "name": "Safwa",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.62537,
        "lat": 17.1495
      },
      "name": "Sabya",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.061939,
        "lat": 26.707911
      },
      "name": "Rahimah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 39.034931,
        "lat": 22.798559
      },
      "name": "Rabigh",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.605202,
        "lat": 20.00054
      },
      "name": "Qalat Bishah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 44.127659,
        "lat": 17.492399
      },
      "name": "Najran",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 39.826111,
        "lat": 21.42667
      },
      "name": "Mecca",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.729172,
        "lat": 18.306391
      },
      "name": "Khamis Mushayt",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.551109,
        "lat": 16.88917
      },
      "name": "Jizan",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 39.21917,
        "lat": 21.516939
      },
      "name": "Jeddah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 41.690731,
        "lat": 27.521879
      },
      "name": "Hayil",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 35.69014,
        "lat": 27.351339
      },
      "name": "Zbe",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 43.974972,
        "lat": 26.325991
      },
      "name": "Buraydah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.677608,
        "lat": 25.937099
      },
      "name": "Abqaiq",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 38.79047,
        "lat": 23.782921
      },
      "name": "Badr Hunayn",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 44.815418,
        "lat": 26.29945
      },
      "name": "Az Zulfi",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.135281,
        "lat": 26.30324
      },
      "name": "Dhahran",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.72504,
        "lat": 25.362761
      },
      "name": "At Taraf",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 40.415829,
        "lat": 21.270281
      },
      "name": "Taif",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 45.577919,
        "lat": 20.46067
      },
      "name": "As Sulayyil",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 46.721851,
        "lat": 24.687731
      },
      "name": "Riyadh",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 43.497299,
        "lat": 25.86944
      },
      "name": "Ar Rass",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 41.038078,
        "lat": 30.975309
      },
      "name": "Arar",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.120098,
        "lat": 19.14547
      },
      "name": "An Nimas",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 37.342819,
        "lat": 31.33176
      },
      "name": "Al Qurayyat",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 36.45248,
        "lat": 26.24551
      },
      "name": "Al Wajh",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 46.127289,
        "lat": 28.311171
      },
      "name": "Al Qaysumah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.024521,
        "lat": 26.5208
      },
      "name": "Al Qatif",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.666672,
        "lat": 25.383329
      },
      "name": "Al Munayzilah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.58083,
        "lat": 25.41
      },
      "name": "Al Mubarraz",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 39.61417,
        "lat": 24.468611
      },
      "name": "Medina",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.208328,
        "lat": 26.27944
      },
      "name": "Al Khubar",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 48.491322,
        "lat": 28.439051
      },
      "name": "Al Khafji",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 39.698059,
        "lat": 21.61694
      },
      "name": "Al Jumum",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.65826,
        "lat": 27.011221
      },
      "name": "Al Jubayl",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.565319,
        "lat": 25.364571
      },
      "name": "Al Hufuf",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 43.659328,
        "lat": 26.14422
      },
      "name": "Al Bukayriyah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 49.633331,
        "lat": 25.433331
      },
      "name": "Al Battaliyah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 41.46767,
        "lat": 20.01288
      },
      "name": "Al Bahah",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.91724,
        "lat": 23.9065
      },
      "name": "Afif",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 47.162659,
        "lat": 23.991461
      },
      "name": "Ad Dilam",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 44.392368,
        "lat": 24.507721
      },
      "name": "Ad Dawadimi",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 50.10326,
        "lat": 26.43442
      },
      "name": "Ad Dammam",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.832512,
        "lat": 16.96887
      },
      "name": "Abu Arish",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 42.50528,
        "lat": 18.216391
      },
      "name": "Abha",
      "country": "SA"
    },
    {
      "coord": {
        "lon": 55.173969,
        "lat": 37.087009
      },
      "name": "Shah Pasand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 56.563992,
        "lat": 30.81271
      },
      "name": "Zarand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.478699,
        "lat": 36.673599
      },
      "name": "Zanjan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.3675,
        "lat": 31.897221
      },
      "name": "Yazd",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.645699,
        "lat": 35.3242
      },
      "name": "Varamin",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 59.21949,
        "lat": 35.27401
      },
      "name": "Torbat-e Heydariyeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.87376,
        "lat": 36.816261
      },
      "name": "Tonekabon",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.421509,
        "lat": 35.694389
      },
      "name": "Tehran",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.903702,
        "lat": 37.8008
      },
      "name": "Hashtpar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.6959,
        "lat": 36.069599
      },
      "name": "Takestan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.1133,
        "lat": 36.400902
      },
      "name": "Takab",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.20882,
        "lat": 31.747101
      },
      "name": "Taft",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.291901,
        "lat": 38.080002
      },
      "name": "Tabriz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 56.92437,
        "lat": 33.59586
      },
      "name": "Tabas",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.600399,
        "lat": 34.783699
      },
      "name": "Sonqor",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 55.6814,
        "lat": 29.452
      },
      "name": "Sirjan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.856701,
        "lat": 32.045502
      },
      "name": "Shushtar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.243599,
        "lat": 32.194199
      },
      "name": "Shush",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.538799,
        "lat": 29.6036
      },
      "name": "Shiraz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.864441,
        "lat": 32.325562
      },
      "name": "Shahr-e Kord",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 55.118599,
        "lat": 30.116501
      },
      "name": "Shahr-e Babak",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.664719,
        "lat": 30.649719
      },
      "name": "Shadegan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 53.397141,
        "lat": 35.57291
      },
      "name": "Semnan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.566669,
        "lat": 31.41667
      },
      "name": "Semirom",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.356602,
        "lat": 35.021301
      },
      "name": "Saveh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 53.060089,
        "lat": 36.56332
      },
      "name": "Shari-i-Tajan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.273499,
        "lat": 36.24992
      },
      "name": "Saqqez",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.992298,
        "lat": 35.3144
      },
      "name": "Sanandaj",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 44.765301,
        "lat": 38.1973
      },
      "name": "Salmas",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.566898,
        "lat": 36.679298
      },
      "name": "Shahin Dezh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 57.681911,
        "lat": 36.212601
      },
      "name": "Sabzevar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.287998,
        "lat": 37.137611
      },
      "name": "Rudsar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.082901,
        "lat": 35.4846
      },
      "name": "Robat Karim",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 56.80545,
        "lat": 31.265619
      },
      "name": "Ravar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.583191,
        "lat": 37.280769
      },
      "name": "Rasht",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.409199,
        "lat": 30.8946
      },
      "name": "Ramshir",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.603512,
        "lat": 31.27997
      },
      "name": "Ramhormoz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 55.9939,
        "lat": 30.4067
      },
      "name": "Rafsanjan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 58.509548,
        "lat": 37.105999
      },
      "name": "Quchan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.804501,
        "lat": 35.166401
      },
      "name": "Qorveh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.8764,
        "lat": 34.640099
      },
      "name": "Qom",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 56.2719,
        "lat": 26.958099
      },
      "name": "Qeshm",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.004902,
        "lat": 36.279701
      },
      "name": "Qazvin",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.025501,
        "lat": 38.891499
      },
      "name": "Qarah Zia od Din",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.98008,
        "lat": 32.27174
      },
      "name": "Farrokh Shahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 59.184391,
        "lat": 33.72654
      },
      "name": "Qayen",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.86264,
        "lat": 34.46109
      },
      "name": "Sarpol-e Zahab",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.7267,
        "lat": 35.307999
      },
      "name": "Pishva",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.1413,
        "lat": 36.701
      },
      "name": "Piranshahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.356499,
        "lat": 35.0434
      },
      "name": "Paveh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.9174,
        "lat": 39.648201
      },
      "name": "Parsabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.098301,
        "lat": 37.0397
      },
      "name": "Oshnaviyeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.07605,
        "lat": 37.552738
      },
      "name": "Orumiyeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.705002,
        "lat": 30.75972
      },
      "name": "Omidiyeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.52174,
        "lat": 30.11405
      },
      "name": "Nurabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.495998,
        "lat": 36.648998
      },
      "name": "Now Shahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 58.795761,
        "lat": 36.213291
      },
      "name": "Neyshabur",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.327801,
        "lat": 29.198799
      },
      "name": "Neyriz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 53.299049,
        "lat": 36.650791
      },
      "name": "Neka",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.607498,
        "lat": 35.952099
      },
      "name": "Nazarabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.388,
        "lat": 36.955299
      },
      "name": "Naqadeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.376999,
        "lat": 34.188499
      },
      "name": "Nahavand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 57.080101,
        "lat": 27.1467
      },
      "name": "Minab",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.102699,
        "lat": 36.969398
      },
      "name": "Miandowab",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.016579,
        "lat": 32.250141
      },
      "name": "Meybod",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.431782,
        "lat": 31.591681
      },
      "name": "Mehriz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.303902,
        "lat": 31.936399
      },
      "name": "Masjed Soleyman",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 56.574341,
        "lat": 29.922661
      },
      "name": "Bardsir",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 59.606201,
        "lat": 36.297001
      },
      "name": "Mashhad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.774899,
        "lat": 38.432899
      },
      "name": "Marand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.823502,
        "lat": 34.296902
      },
      "name": "Malayer",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.9767,
        "lat": 35.665901
      },
      "name": "Malard",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.722198,
        "lat": 36.7631
      },
      "name": "Mahabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.153511,
        "lat": 37.19701
      },
      "name": "Langerud",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.606098,
        "lat": 33.535
      },
      "name": "Kuhdasht",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.01944,
        "lat": 26.557779
      },
      "name": "Kish",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 44.952099,
        "lat": 38.550301
      },
      "name": "Khvoy",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.314968,
        "lat": 33.22052
      },
      "name": "Khvansar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.166401,
        "lat": 30.439699
      },
      "name": "Khorramshahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.355831,
        "lat": 33.487782
      },
      "name": "Khorramabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.078899,
        "lat": 33.642262
      },
      "name": "Khomeyn",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.525799,
        "lat": 37.6189
      },
      "name": "Herowabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.064999,
        "lat": 34.314171
      },
      "name": "Kermanshah",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 57.078789,
        "lat": 30.283211
      },
      "name": "Kerman",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.654148,
        "lat": 29.61949
      },
      "name": "Kazerun",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 58.46558,
        "lat": 35.238312
      },
      "name": "Kashmar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.43644,
        "lat": 33.983082
      },
      "name": "Kashan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.0103,
        "lat": 35.835499
      },
      "name": "Karaj",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.965302,
        "lat": 34.504299
      },
      "name": "Kangavar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.935501,
        "lat": 34.795601
      },
      "name": "Kamyaran",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 55.491638,
        "lat": 37.380711
      },
      "name": "Kalaleh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.912441,
        "lat": 36.641151
      },
      "name": "Juybar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.51722,
        "lat": 34.796108
      },
      "name": "Javanrud",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.422699,
        "lat": 33.637402
      },
      "name": "Ilam",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.586102,
        "lat": 34.272099
      },
      "name": "Harsin",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.514561,
        "lat": 34.799221
      },
      "name": "Hamadan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.43475,
        "lat": 36.838661
      },
      "name": "Gorgan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 55.16721,
        "lat": 37.250038
      },
      "name": "Gonbad-e Qabus",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 58.683651,
        "lat": 34.352859
      },
      "name": "Gonabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.288361,
        "lat": 33.453701
      },
      "name": "Golpayegan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.1371,
        "lat": 27.665199
      },
      "name": "Gerash",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.516998,
        "lat": 29.5791
      },
      "name": "Bandar-e Ganaveh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.570702,
        "lat": 28.8438
      },
      "name": "Firuzabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.522549,
        "lat": 36.68642
      },
      "name": "Fereydun Kenar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 53.648201,
        "lat": 28.938299
      },
      "name": "Fasa",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.560959,
        "lat": 32.256939
      },
      "name": "Farsan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 57.51009,
        "lat": 37.07645
      },
      "name": "Esfarayen",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.97628,
        "lat": 36.41819
      },
      "name": "Shahrud",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.7981,
        "lat": 30.358601
      },
      "name": "Do Gonbadan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.6838,
        "lat": 33.990501
      },
      "name": "Delijan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.267899,
        "lat": 32.694099
      },
      "name": "Dehloran",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.564579,
        "lat": 30.794901
      },
      "name": "Dehdasht",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.183102,
        "lat": 31.560801
      },
      "name": "Susangerd",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.544441,
        "lat": 28.75194
      },
      "name": "Darab",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.348,
        "lat": 36.168301
      },
      "name": "Damghan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.064999,
        "lat": 35.717781
      },
      "name": "Damavand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 59.121231,
        "lat": 36.645458
      },
      "name": "Chenaran",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.420399,
        "lat": 36.654999
      },
      "name": "Chalus",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.838501,
        "lat": 28.968399
      },
      "name": "Bandar Bushehr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.2089,
        "lat": 36.521
      },
      "name": "Bukan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.751598,
        "lat": 33.897301
      },
      "name": "Borujerd",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.2873,
        "lat": 31.965231
      },
      "name": "Borujen",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.2159,
        "lat": 29.2666
      },
      "name": "Borazjan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 57.329029,
        "lat": 37.474731
      },
      "name": "Bojnurd",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 59.221142,
        "lat": 32.86628
      },
      "name": "Birjand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.605061,
        "lat": 35.866798
      },
      "name": "Bijar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 46.056099,
        "lat": 37.340401
      },
      "name": "Bonab",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 53.55262,
        "lat": 36.692348
      },
      "name": "Behshahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.241699,
        "lat": 30.5959
      },
      "name": "Behbahan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.8853,
        "lat": 35.997501
      },
      "name": "Baneh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.880669,
        "lat": 26.55792
      },
      "name": "Bandar-e Lengeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.076279,
        "lat": 30.429831
      },
      "name": "Bandar Emām Khomeynī",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.4622,
        "lat": 37.472698
      },
      "name": "Bandar-e Anzali",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 56.2808,
        "lat": 27.186501
      },
      "name": "Bandar Abbas",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 58.356998,
        "lat": 29.106001
      },
      "name": "Bam",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.441399,
        "lat": 34.9072
      },
      "name": "Bahar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 55.410671,
        "lat": 31.612829
      },
      "name": "Bafq",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.6576,
        "lat": 36.702511
      },
      "name": "Babolsar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.678951,
        "lat": 36.551319
      },
      "name": "Babol",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.930698,
        "lat": 33.609501
      },
      "name": "Azna",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.0508,
        "lat": 37.477901
      },
      "name": "Hashtrud",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.872002,
        "lat": 38.4291
      },
      "name": "Astara",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.944439,
        "lat": 37.259621
      },
      "name": "Astaneh-ye Ashrafiyeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.11853,
        "lat": 34.78241
      },
      "name": "Asadabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.3694,
        "lat": 33.376099
      },
      "name": "Ardestan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 54.017471,
        "lat": 32.310009
      },
      "name": "Ardakan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.293301,
        "lat": 38.249802
      },
      "name": "Ardabil",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.689159,
        "lat": 34.09174
      },
      "name": "Arak",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.350719,
        "lat": 36.469608
      },
      "name": "Amol",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.167801,
        "lat": 36.318699
      },
      "name": "Alvand",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.059299,
        "lat": 35.659599
      },
      "name": "Shahriar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.694901,
        "lat": 33.400631
      },
      "name": "Aligudarz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.261902,
        "lat": 33.8633
      },
      "name": "Aleshtar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.779301,
        "lat": 29.246401
      },
      "name": "Akbarabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 45.894299,
        "lat": 37.4776
      },
      "name": "Ajab Shir",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.6693,
        "lat": 31.320299
      },
      "name": "Ahvaz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.069901,
        "lat": 38.477402
      },
      "name": "Ahar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.831501,
        "lat": 30.7006
      },
      "name": "Aghajari",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 50.549999,
        "lat": 36.066669
      },
      "name": "Abyek",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 49.217999,
        "lat": 36.146801
      },
      "name": "Abhar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 47.4198,
        "lat": 32.992599
      },
      "name": "Abdanan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 52.6506,
        "lat": 31.160801
      },
      "name": "Abadeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 48.304298,
        "lat": 30.339199
      },
      "name": "Abadan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 20.39155,
        "lat": -9.66078
      },
      "name": "Saurimo",
      "country": "AO"
    },
    {
      "coord": {
        "lon": 20.744659,
        "lat": -8.41915
      },
      "name": "Lucapa",
      "country": "AO"
    },
    {
      "coord": {
        "lon": 32.416672,
        "lat": 34.76667
      },
      "name": "Paphos",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 33.366669,
        "lat": 35.166672
      },
      "name": "Nicosia",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 33.033329,
        "lat": 34.674999
      },
      "name": "Limassol",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 33.629169,
        "lat": 34.916672
      },
      "name": "Larnaca",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 33.316669,
        "lat": 35.341671
      },
      "name": "Kyrenia",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 33.950001,
        "lat": 35.125
      },
      "name": "Famagusta",
      "country": "CY"
    },
    {
      "coord": {
        "lon": 46.7528,
        "lat": 39.817699
      },
      "name": "",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.399021,
        "lat": 39.87867
      },
      "name": "Telmankend",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 46.749191,
        "lat": 39.75893
      },
      "name": "Shushi",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.980549,
        "lat": 39.59362
      },
      "name": "Salyan",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.247219,
        "lat": 39.374168
      },
      "name": "Neftcala",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 45.41222,
        "lat": 39.208889
      },
      "name": "Nakhchivan",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.85062,
        "lat": 38.75428
      },
      "name": "",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.059952,
        "lat": 39.870949
      },
      "name": "Imishli",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.491859,
        "lat": 39.209629
      },
      "name": "Dzhalilabad",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.544998,
        "lat": 39.458328
      },
      "name": "Pushkino",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.874981,
        "lat": 38.455978
      },
      "name": "Astara",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.928551,
        "lat": 39.937881
      },
      "name": "Sirvan",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 46.927361,
        "lat": 39.990959
      },
      "name": "Agdam",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 39.197929,
        "lat": -6.16394
      },
      "name": "Zanzibar",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.729382,
        "lat": -5.05589
      },
      "name": "Wete",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.933331,
        "lat": -9.11667
      },
      "name": "Vwawa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.298489,
        "lat": -7.00667
      },
      "name": "Vikindu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.525829,
        "lat": -3.28333
      },
      "name": "Uyovu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.391109,
        "lat": -5.10361
      },
      "name": "Uvinza",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.96389,
        "lat": -3.49194
      },
      "name": "Ushirombo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.23333,
        "lat": -7.1
      },
      "name": "Usevia",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.0,
        "lat": -2.68333
      },
      "name": "Usagara",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.849998,
        "lat": -3.36667
      },
      "name": "Usa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.049999,
        "lat": -5.06667
      },
      "name": "Urambo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.76667,
        "lat": -9.3
      },
      "name": "Tunduma",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.73333,
        "lat": -5.06667
      },
      "name": "Tumbi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.650002,
        "lat": -9.25
      },
      "name": "Tukuyu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.200001,
        "lat": -3.88333
      },
      "name": "Tinde",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.366669,
        "lat": -1.35
      },
      "name": "Tarime",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.099998,
        "lat": -5.06667
      },
      "name": "Tanga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.799999,
        "lat": -5.01667
      },
      "name": "Tabora",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.616671,
        "lat": -7.96667
      },
      "name": "Sumbawanga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.51667,
        "lat": -3.51667
      },
      "name": "Songwa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.950001,
        "lat": -3.36667
      },
      "name": "Somanda",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.549999,
        "lat": -6.43333
      },
      "name": "Sokoni",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.433331,
        "lat": -1.23333
      },
      "name": "Sirari",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.75,
        "lat": -4.81667
      },
      "name": "Singida",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.76667,
        "lat": -5.63333
      },
      "name": "Sikonge",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.433331,
        "lat": -3.66667
      },
      "name": "Shinyanga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.200001,
        "lat": -4.36667
      },
      "name": "Shelui",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.533329,
        "lat": -4.75
      },
      "name": "Sepuka",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.73333,
        "lat": -4.06667
      },
      "name": "Same",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.6325,
        "lat": -2.7175
      },
      "name": "Rulenge",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.383331,
        "lat": -8.7
      },
      "name": "Rujewa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.73333,
        "lat": -5.0
      },
      "name": "Puma",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.400002,
        "lat": -3.55
      },
      "name": "Old Shinyanga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.183331,
        "lat": -4.21667
      },
      "name": "Nzega",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.01667,
        "lat": -1.9
      },
      "name": "Nyamuswa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.783329,
        "lat": -3.18333
      },
      "name": "Nyalikungu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.98333,
        "lat": -2.63333
      },
      "name": "Nyakabindi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.39472,
        "lat": -1.14389
      },
      "name": "Nsunga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.551109,
        "lat": -1.79833
      },
      "name": "Nshamba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.76667,
        "lat": -9.33333
      },
      "name": "Njombe",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.041941,
        "lat": -5.10917
      },
      "name": "Nguruka",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.333328,
        "lat": -2.96667
      },
      "name": "Ngudu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.116669,
        "lat": -6.75
      },
      "name": "Ngerengere",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.65583,
        "lat": -2.51222
      },
      "name": "Ngara",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.450001,
        "lat": -4.46667
      },
      "name": "Nangwa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.049999,
        "lat": -7.51667
      },
      "name": "Namanyere",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.900002,
        "lat": -2.51667
      },
      "name": "Mwanza",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.599998,
        "lat": -3.55
      },
      "name": "Mwadui",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.666672,
        "lat": -6.25
      },
      "name": "Mvomero",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.799999,
        "lat": -1.5
      },
      "name": "Musoma",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.916672,
        "lat": -1.98333
      },
      "name": "Muriti",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.883331,
        "lat": -4.96667
      },
      "name": "Mungaa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.783329,
        "lat": -5.16667
      },
      "name": "Muheza",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.700001,
        "lat": -1.85
      },
      "name": "Mugumu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.799999,
        "lat": -9.01667
      },
      "name": "Mtwango",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.849998,
        "lat": -3.35
      },
      "name": "Mto wa Mbu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.849998,
        "lat": -4.55
      },
      "name": "Mtinko",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.200001,
        "lat": -6.53333
      },
      "name": "Msowero",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.48333,
        "lat": -6.35
      },
      "name": "Mpwapwa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.040911,
        "lat": -6.36546
      },
      "name": "Mpanda",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.333328,
        "lat": -3.35
      },
      "name": "Moshi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.666672,
        "lat": -6.81667
      },
      "name": "Morogoro",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.98333,
        "lat": -9.0
      },
      "name": "Mlowo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.816669,
        "lat": -8.8
      },
      "name": "Mlimba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.51667,
        "lat": -9.78333
      },
      "name": "Mlangali",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.73333,
        "lat": -6.7
      },
      "name": "Mlandizi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.933331,
        "lat": -4.93333
      },
      "name": "Mlalo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.207821,
        "lat": -7.11799
      },
      "name": "Mkuranga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 29.65806,
        "lat": -4.83
      },
      "name": "Mwandiga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.083328,
        "lat": -2.85
      },
      "name": "Missungwi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.983089,
        "lat": -7.40409
      },
      "name": "Mikumi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.849998,
        "lat": -3.28333
      },
      "name": "Mhango",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.133331,
        "lat": -5.95
      },
      "name": "Mgandu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.950001,
        "lat": -3.56667
      },
      "name": "Mbuguni",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.450001,
        "lat": -8.9
      },
      "name": "Mbeya",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.216671,
        "lat": -4.8
      },
      "name": "Mazinde",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.25,
        "lat": -4.8
      },
      "name": "Matui",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.51667,
        "lat": -8.3
      },
      "name": "Matai",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.98333,
        "lat": -2.68333
      },
      "name": "Maswa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.183331,
        "lat": -3.63333
      },
      "name": "Masumbwe",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.616669,
        "lat": -5.05
      },
      "name": "Maramba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.133331,
        "lat": -8.93333
      },
      "name": "Malinyi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.533329,
        "lat": -3.13333
      },
      "name": "Malampaka",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.099998,
        "lat": -4.73333
      },
      "name": "Makuyuni",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.833328,
        "lat": -8.85
      },
      "name": "Makumbako",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.333328,
        "lat": -9.93333
      },
      "name": "Mahanje",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.349998,
        "lat": -2.58333
      },
      "name": "Magu Kahangara",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.76667,
        "lat": -4.01667
      },
      "name": "Magugu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.25,
        "lat": -6.8
      },
      "name": "Magomeni",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.366669,
        "lat": -6.36667
      },
      "name": "Magole",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.066669,
        "lat": -7.25
      },
      "name": "Mafinga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.533329,
        "lat": -5.13333
      },
      "name": "Mabama",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.283329,
        "lat": -4.78333
      },
      "name": "Lushoto",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.333328,
        "lat": -6.45
      },
      "name": "Lugoba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.933331,
        "lat": -9.76667
      },
      "name": "Liwale",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.616669,
        "lat": -3.78333
      },
      "name": "Lembeni",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.950001,
        "lat": -3.45
      },
      "name": "Lalago",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.049999,
        "lat": -8.56667
      },
      "name": "Laela",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.849998,
        "lat": -9.58333
      },
      "name": "Kyela",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.783329,
        "lat": -4.9
      },
      "name": "Kondoa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.533329,
        "lat": -9.16667
      },
      "name": "Kiwira",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.866669,
        "lat": -3.61667
      },
      "name": "Kishapu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.150002,
        "lat": -3.08333
      },
      "name": "Kisesa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.6,
        "lat": -7.41667
      },
      "name": "Kirando",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.366669,
        "lat": -4.26667
      },
      "name": "Kiomboi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.98333,
        "lat": -3.28333
      },
      "name": "Kingori",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.98333,
        "lat": -6.83333
      },
      "name": "Kilosa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 29.626671,
        "lat": -4.87694
      },
      "name": "Kigoma",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.004379,
        "lat": -7.60361
      },
      "name": "Kidodi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.957218,
        "lat": -7.69916
      },
      "name": "Kidatu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.72028,
        "lat": -3.58639
      },
      "name": "Kibondo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.937489,
        "lat": -7.72178
      },
      "name": "Kibiti",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.450001,
        "lat": -2.15
      },
      "name": "Kibara",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.366669,
        "lat": -6.71667
      },
      "name": "Kibakwe",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.916672,
        "lat": -6.76667
      },
      "name": "Kibaha",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.616669,
        "lat": -9.23333
      },
      "name": "Katumba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.89583,
        "lat": -3.02028
      },
      "name": "Katoro",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.73333,
        "lat": -1.4
      },
      "name": "Katerero",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.102501,
        "lat": -4.57667
      },
      "name": "Kasulu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.433331,
        "lat": -2.85
      },
      "name": "Kasamwa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.666672,
        "lat": -3.33333
      },
      "name": "Karatu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.620001,
        "lat": -1.61861
      },
      "name": "Kamachumu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.96417,
        "lat": -3.28278
      },
      "name": "Kakonko",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.599998,
        "lat": -3.83333
      },
      "name": "Kahama",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.467779,
        "lat": -2.63861
      },
      "name": "Kabanga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.73333,
        "lat": -7.2
      },
      "name": "Izazi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.48333,
        "lat": -5.7
      },
      "name": "Itigi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 32.933331,
        "lat": -3.9
      },
      "name": "Isaka",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.700001,
        "lat": -7.76667
      },
      "name": "Iringa",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.900002,
        "lat": -9.48333
      },
      "name": "Ipinda",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.036579,
        "lat": -7.6766
      },
      "name": "Ilula",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.866669,
        "lat": -4.66667
      },
      "name": "Ilongero",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.583328,
        "lat": -8.9
      },
      "name": "Ilembula",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.76667,
        "lat": -5.13333
      },
      "name": "Ikungi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.849998,
        "lat": -8.85
      },
      "name": "Igurusi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.883331,
        "lat": -4.28333
      },
      "name": "Igunga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.633331,
        "lat": -4.56667
      },
      "name": "Igugunu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.683331,
        "lat": -8.13333
      },
      "name": "Ifakara",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 37.900002,
        "lat": -4.5
      },
      "name": "Hedaru",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.866669,
        "lat": -6.15
      },
      "name": "Geiro",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.849998,
        "lat": -4.26667
      },
      "name": "Galappo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.383331,
        "lat": -4.06667
      },
      "name": "Dongobesh",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.739471,
        "lat": -6.17221
      },
      "name": "Dodoma",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.269508,
        "lat": -6.82349
      },
      "name": "Dar es Salaam",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.549999,
        "lat": -4.21667
      },
      "name": "Dareda",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.01667,
        "lat": -8.85
      },
      "name": "Chimala",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.766939,
        "lat": -2.63778
      },
      "name": "Chato",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.01667,
        "lat": -5.41667
      },
      "name": "Chanika",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.353958,
        "lat": -6.63784
      },
      "name": "Chalinze",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.26667,
        "lat": -7.58333
      },
      "name": "Chala",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.76659,
        "lat": -5.24586
      },
      "name": "Chake Chake",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.966671,
        "lat": -1.76667
      },
      "name": "Butiama",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.87472,
        "lat": -3.02361
      },
      "name": "Buseresere",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.058182,
        "lat": -7.63369
      },
      "name": "Bungu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.866669,
        "lat": -2.05
      },
      "name": "Bunda",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.81222,
        "lat": -1.33167
      },
      "name": "Bukoba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.528061,
        "lat": -2.87056
      },
      "name": "Bugarama",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 31.308889,
        "lat": -2.63194
      },
      "name": "Biharamulo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.083328,
        "lat": -4.36667
      },
      "name": "Basotu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.416672,
        "lat": -4.23333
      },
      "name": "Bashanet",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 33.98333,
        "lat": -2.8
      },
      "name": "Bariadi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.900002,
        "lat": -6.43333
      },
      "name": "Bagamoyo",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.75,
        "lat": -4.21667
      },
      "name": "Babati",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 36.683331,
        "lat": -3.36667
      },
      "name": "Arusha",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 54.36713,
        "lat": 39.51075
      },
      "name": "Balkanabat",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 59.614311,
        "lat": 37.348209
      },
      "name": "Kaka",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 54.590561,
        "lat": 39.206108
      },
      "name": "Gumdag",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 55.515362,
        "lat": 39.244629
      },
      "name": "Gazanjyk",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 58.205589,
        "lat": 38.050671
      },
      "name": "Buzmeyin",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 57.43158,
        "lat": 38.436241
      },
      "name": "Baherden",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 58.383331,
        "lat": 37.950001
      },
      "name": "Ashgabat",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 58.515999,
        "lat": 37.887569
      },
      "name": "Annau",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 36.65741,
        "lat": 33.967361
      },
      "name": "Yabrud",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.710621,
        "lat": 35.26548
      },
      "name": "Tayyibat al Imam",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 35.886589,
        "lat": 34.889019
      },
      "name": "Tartouss",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.096722,
        "lat": 36.473621
      },
      "name": "Tall Rifat",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.259949,
        "lat": 34.668419
      },
      "name": "Tall Kalakh",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.73093,
        "lat": 34.84063
      },
      "name": "Tallbisah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.06694,
        "lat": 32.735641
      },
      "name": "Tafas",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 38.280548,
        "lat": 34.560768
      },
      "name": "Tadmur",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.530899,
        "lat": 36.348141
      },
      "name": "Tadif",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.74876,
        "lat": 35.291592
      },
      "name": "Souran",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.60833,
        "lat": 34.854439
      },
      "name": "Subaykhan",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.159328,
        "lat": 32.829441
      },
      "name": "Shaykh Miskin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.805908,
        "lat": 35.864471
      },
      "name": "Saraqib",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.45322,
        "lat": 36.138088
      },
      "name": "Salqin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.053242,
        "lat": 35.011269
      },
      "name": "Salamiyah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.113762,
        "lat": 34.818359
      },
      "name": "Satita",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.081478,
        "lat": 33.43544
      },
      "name": "Qatana",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.060181,
        "lat": 32.992329
      },
      "name": "Jasim",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.74152,
        "lat": 34.152699
      },
      "name": "Qarah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.992378,
        "lat": 36.377102
      },
      "name": "Nubl",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.340599,
        "lat": 35.0653
      },
      "name": "Masyaf",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.954948,
        "lat": 36.528149
      },
      "name": "Manbij",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.672539,
        "lat": 36.013371
      },
      "name": "Maarrat Misrin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.649948,
        "lat": 35.440632
      },
      "name": "Khan Shaykhun",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.602982,
        "lat": 35.374489
      },
      "name": "Kafr Zaytah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.515282,
        "lat": 36.11684
      },
      "name": "Kafr Takharim",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.564491,
        "lat": 35.613762
      },
      "name": "Kafr Nabl",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.495819,
        "lat": 34.894691
      },
      "name": "Kafr Laha",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.320621,
        "lat": 35.814259
      },
      "name": "Jisr ash Shughur",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.74036,
        "lat": 33.8074
      },
      "name": "Jayrud",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 38.011108,
        "lat": 36.817501
      },
      "name": "Jarabulus",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 35.925621,
        "lat": 35.36137
      },
      "name": "Jablah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.367161,
        "lat": 33.53994
      },
      "name": "Irbin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.128059,
        "lat": 33.017971
      },
      "name": "Inkhil",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.63393,
        "lat": 35.930618
      },
      "name": "Idlib",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.723389,
        "lat": 34.726822
      },
      "name": "Homs",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.364319,
        "lat": 33.55899
      },
      "name": "Hirista",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.757832,
        "lat": 35.13179
      },
      "name": "Hamah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.605721,
        "lat": 35.259949
      },
      "name": "Halfaya",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.161171,
        "lat": 36.201241
      },
      "name": "Aleppo",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.402699,
        "lat": 33.571751
      },
      "name": "Douma",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.291279,
        "lat": 33.510201
      },
      "name": "Damascus",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.707779,
        "lat": 36.15694
      },
      "name": "Dayr Hafir",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.140839,
        "lat": 35.33588
      },
      "name": "Dayr az Zawr",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.651989,
        "lat": 37.072788
      },
      "name": "Ad Darbasiyah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.237419,
        "lat": 33.458969
      },
      "name": "Darayya",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.713928,
        "lat": 35.95554
      },
      "name": "Binnish",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 35.948711,
        "lat": 35.181881
      },
      "name": "Baniyas",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.100498,
        "lat": 33.72488
      },
      "name": "Az Zabadani",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.04628,
        "lat": 36.58662
      },
      "name": "Izaz",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.310699,
        "lat": 33.610329
      },
      "name": "At Tall",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 38.54427,
        "lat": 35.846882
      },
      "name": "Thawrah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.569511,
        "lat": 32.708961
      },
      "name": "As Suwayda",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.183819,
        "lat": 33.072269
      },
      "name": "Sanamayn",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.372509,
        "lat": 36.076962
      },
      "name": "Safirah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.73238,
        "lat": 34.926529
      },
      "name": "Ar Rastan",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 39.01667,
        "lat": 35.950001
      },
      "name": "Ar Raqqah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.728371,
        "lat": 34.025471
      },
      "name": "An Nabk",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.600712,
        "lat": 33.73848
      },
      "name": "Al Qutayfah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.57975,
        "lat": 34.50914
      },
      "name": "Al Qusayr",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 35.824612,
        "lat": 33.125938
      },
      "name": "Al Qunaytirah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.240662,
        "lat": 34.229561
      },
      "name": "Al Qaryatayn",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.453461,
        "lat": 35.020889
      },
      "name": "Mayadin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 35.77684,
        "lat": 35.514839
      },
      "name": "Latakia",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.242779,
        "lat": 33.357201
      },
      "name": "Al Kiswah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.747719,
        "lat": 36.502369
      },
      "name": "Al Hasakah",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.30994,
        "lat": 32.749321
      },
      "name": "Al Harak",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 37.517879,
        "lat": 36.369942
      },
      "name": "Al Bab",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.863049,
        "lat": 36.51598
      },
      "name": "Afrin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 36.769779,
        "lat": 36.212521
      },
      "name": "Ad Dana",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.91861,
        "lat": 34.450001
      },
      "name": "Albu Kamal",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 40.827,
        "lat": 34.692699
      },
      "name": "Hajin",
      "country": "SY"
    },
    {
      "coord": {
        "lon": 46.405762,
        "lat": 39.207539
      },
      "name": "Kapan",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 46.338161,
        "lat": 39.512878
      },
      "name": "Goris",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 45.97047,
        "lat": 39.46405
      },
      "name": "Hatsavan",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.544472,
        "lat": 39.961441
      },
      "name": "Artashat",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.704891,
        "lat": 39.831661
      },
      "name": "Ararat",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 28.733959,
        "lat": -9.34506
      },
      "name": "Nchelenge",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 31.36587,
        "lat": -8.84024
      },
      "name": "Mbala",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 29.07913,
        "lat": -9.7915
      },
      "name": "Kawambwa",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 34.769661,
        "lat": 0.60751
      },
      "name": "Webuye",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 40.05732,
        "lat": 1.7471
      },
      "name": "Wajir",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 38.563042,
        "lat": -3.39452
      },
      "name": "Voi",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.069328,
        "lat": -1.03326
      },
      "name": "Thika",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.863819,
        "lat": -0.17333
      },
      "name": "Rongai",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.94759,
        "lat": -0.42013
      },
      "name": "Nyeri",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.36734,
        "lat": 0.0421
      },
      "name": "Nyahururu",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.860119,
        "lat": -1.07829
      },
      "name": "Narok",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.07283,
        "lat": 0.01667
      },
      "name": "Nanyuki",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.066669,
        "lat": -0.28333
      },
      "name": "Nakuru",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.435909,
        "lat": -0.71667
      },
      "name": "Naivasha",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.816669,
        "lat": -1.28333
      },
      "name": "Nairobi",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.486401,
        "lat": 0.33511
      },
      "name": "Mumias",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.19878,
        "lat": -0.15406
      },
      "name": "Muhoroni",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 39.058418,
        "lat": 3.5167
      },
      "name": "Moyale",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 39.663589,
        "lat": -4.05466
      },
      "name": "Mombasa",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.737431,
        "lat": -0.2479
      },
      "name": "Molo",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.473129,
        "lat": -1.06344
      },
      "name": "Migori",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.655869,
        "lat": 0.04626
      },
      "name": "Meru",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.989861,
        "lat": 2.32839
      },
      "name": "Marsabit",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.69799,
        "lat": 1.09679
      },
      "name": "Maralal",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 41.867008,
        "lat": 3.93663
      },
      "name": "Mandera",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 40.119099,
        "lat": -3.21748
      },
      "name": "Malindi",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.620338,
        "lat": -1.80409
      },
      "name": "Makueni",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.26667,
        "lat": -1.51667
      },
      "name": "Machakos",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.305279,
        "lat": 0.39361
      },
      "name": "Lugulu",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.597271,
        "lat": 3.11911
      },
      "name": "Lodwar",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 40.902012,
        "lat": -2.27169
      },
      "name": "Lamu",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 38.010559,
        "lat": -1.36696
      },
      "name": "Kitui",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.006222,
        "lat": 1.01572
      },
      "name": "Kitale",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.761711,
        "lat": -0.10221
      },
      "name": "Kisumu",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.766659,
        "lat": -0.68174
      },
      "name": "Kisii",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 39.849918,
        "lat": -3.63045
      },
      "name": "Kilifi",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.833328,
        "lat": -1.16667
      },
      "name": "Kiambu",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.280312,
        "lat": -0.49886
      },
      "name": "Keruguya",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.283138,
        "lat": -0.36774
      },
      "name": "Kericho",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.183331,
        "lat": -0.7
      },
      "name": "Karuri",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.752281,
        "lat": 0.28422
      },
      "name": "Kakamega",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.58218,
        "lat": 0.35462
      },
      "name": "Isiolo",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.457142,
        "lat": -0.52731
      },
      "name": "Homa Bay",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 39.64011,
        "lat": -0.45355
      },
      "name": "Garissa",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 37.4506,
        "lat": -0.53112
      },
      "name": "Embu",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 35.26992,
        "lat": 0.52036
      },
      "name": "Eldoret",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 34.560551,
        "lat": 0.5635
      },
      "name": "Bungoma",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 36.982449,
        "lat": -1.45071
      },
      "name": "Athi River",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 30.4347,
        "lat": -1.9487
      },
      "name": "Rwamagana",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 29.63497,
        "lat": -1.49984
      },
      "name": "Musanze",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 29.5564,
        "lat": -2.479
      },
      "name": "Nzega",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 30.058849,
        "lat": -1.94995
      },
      "name": "Kigali",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 29.3482,
        "lat": -2.0597
      },
      "name": "Kibuye",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 30.5427,
        "lat": -2.1597
      },
      "name": "Kibungo",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 29.75667,
        "lat": -2.07444
      },
      "name": "Gitarama",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 28.907499,
        "lat": -2.4846
      },
      "name": "Cyangugu",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 29.25639,
        "lat": -1.70278
      },
      "name": "Gisenyi",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 30.067499,
        "lat": -1.5763
      },
      "name": "Byumba",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 29.739441,
        "lat": -2.59667
      },
      "name": "Butare",
      "country": "RW"
    },
    {
      "coord": {
        "lon": 24.43359,
        "lat": 0.81021
      },
      "name": "Yangambi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.535509,
        "lat": 3.03716
      },
      "name": "Watsa",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 27.994659,
        "lat": 2.14838
      },
      "name": "Wamba",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.14583,
        "lat": -3.40667
      },
      "name": "Uvira",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 20.799999,
        "lat": -6.41667
      },
      "name": "Tshikapa",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.045,
        "lat": -1.57361
      },
      "name": "Sake",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.450001,
        "lat": -7.0
      },
      "name": "Mwene-Ditu",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 21.566669,
        "lat": -4.85
      },
      "name": "Mweka",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.6,
        "lat": -6.15
      },
      "name": "Mbuji-Mayi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.450001,
        "lat": -4.96667
      },
      "name": "Lusambo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 21.41667,
        "lat": -5.35
      },
      "name": "Luebo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 25.75,
        "lat": -5.36667
      },
      "name": "Lubao",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.433331,
        "lat": -3.48333
      },
      "name": "Lodja",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 21.51667,
        "lat": 2.15
      },
      "name": "Lisala",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 27.0,
        "lat": -5.38333
      },
      "name": "Kongolo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 25.200001,
        "lat": 0.51667
      },
      "name": "Kisangani",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 25.950001,
        "lat": -2.95
      },
      "name": "Kindu",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 26.66667,
        "lat": -4.45
      },
      "name": "Kasongo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 24.183331,
        "lat": -7.56667
      },
      "name": "Kaniama",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 22.41778,
        "lat": -5.89583
      },
      "name": "Kananga",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 26.66667,
        "lat": -3.6
      },
      "name": "Kampene",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 24.990561,
        "lat": -8.73861
      },
      "name": "Kamina",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.19471,
        "lat": -5.94749
      },
      "name": "Kalemie",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 24.48333,
        "lat": -6.13333
      },
      "name": "Kabinda",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 28.824169,
        "lat": -2.46833
      },
      "name": "Kabare",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 26.91667,
        "lat": -6.05
      },
      "name": "Kabalo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 27.61603,
        "lat": 2.77391
      },
      "name": "Isiro",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 20.58333,
        "lat": -4.31667
      },
      "name": "Ilebo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.22278,
        "lat": -1.67917
      },
      "name": "Goma",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 21.01667,
        "lat": 4.28333
      },
      "name": "Gbadolite",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.950001,
        "lat": -6.75
      },
      "name": "Gandajika",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 22.26667,
        "lat": -5.51
      },
      "name": "Demba",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.283331,
        "lat": 0.15
      },
      "name": "Butembo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 24.72998,
        "lat": 2.78582
      },
      "name": "Buta",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 20.883329,
        "lat": 3.33333
      },
      "name": "Businga",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 30.25,
        "lat": 1.56667
      },
      "name": "Bunia",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 22.466669,
        "lat": 2.18333
      },
      "name": "Bumba",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 28.86083,
        "lat": -2.50833
      },
      "name": "Bukavu",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 25.85,
        "lat": -9.2
      },
      "name": "Bukama",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.686649,
        "lat": 3.81461
      },
      "name": "Bondo",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 20.866671,
        "lat": -0.21667
      },
      "name": "Boende",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 29.466669,
        "lat": 0.5
      },
      "name": "Beni",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.61598,
        "lat": 1.23909
      },
      "name": "Basoko",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 23.78326,
        "lat": 2.73877
      },
      "name": "Aketi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 42.884441,
        "lat": 11.78528
      },
      "name": "Tadjoura",
      "country": "DJ"
    },
    {
      "coord": {
        "lon": 43.290562,
        "lat": 11.96306
      },
      "name": "Obock",
      "country": "DJ"
    },
    {
      "coord": {
        "lon": 43.14468,
        "lat": 11.58767
      },
      "name": "Djibouti",
      "country": "DJ"
    },
    {
      "coord": {
        "lon": 42.712502,
        "lat": 11.15583
      },
      "name": "Ali Sabieh",
      "country": "DJ"
    },
    {
      "coord": {
        "lon": 31.246889,
        "lat": 3.46506
      },
      "name": "Yumbe",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.512218,
        "lat": 0.72833
      },
      "name": "Wobulenzi",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.459438,
        "lat": 0.40444
      },
      "name": "Wakiso",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 34.180851,
        "lat": 0.69299
      },
      "name": "Tororo",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.61113,
        "lat": 1.71464
      },
      "name": "Soroti",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.709438,
        "lat": 1.145
      },
      "name": "Pallisa",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.98551,
        "lat": 2.41669
      },
      "name": "Paidha",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 29.65,
        "lat": -0.88333
      },
      "name": "Ntungamo",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.26417,
        "lat": -0.87944
      },
      "name": "Ntungamo",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.173061,
        "lat": 0.41861
      },
      "name": "Njeru",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.08894,
        "lat": 2.47826
      },
      "name": "Nebbi",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.421391,
        "lat": 0.68944
      },
      "name": "Namasuba",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.75528,
        "lat": 0.35333
      },
      "name": "Mukono",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.389999,
        "lat": 0.56055
      },
      "name": "Mubende",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.724739,
        "lat": 3.66088
      },
      "name": "Moyo",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.022781,
        "lat": 0.4175
      },
      "name": "Mityana",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.65,
        "lat": -0.608
      },
      "name": "Mbarara",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 34.17503,
        "lat": 1.08209
      },
      "name": "Mbale",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.715,
        "lat": 1.67444
      },
      "name": "Masindi",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.734091,
        "lat": -0.33379
      },
      "name": "Masaka",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.473061,
        "lat": 0.84917
      },
      "name": "Luwero",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.91972,
        "lat": 0.37722
      },
      "name": "Lugazi",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.909721,
        "lat": 2.235
      },
      "name": "Lira",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.621389,
        "lat": 0.63278
      },
      "name": "Kyenjojo",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 34.13306,
        "lat": 2.98056
      },
      "name": "Kotido",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.886669,
        "lat": 3.27833
      },
      "name": "Kitgum",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.64917,
        "lat": 0.3475
      },
      "name": "Kireka",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.888611,
        "lat": 0.7025
      },
      "name": "Kayunga",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.08333,
        "lat": 0.18333
      },
      "name": "Kasese",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.45393,
        "lat": 0.1866
      },
      "name": "Kamwenge",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.582191,
        "lat": 0.31628
      },
      "name": "Kampala",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 29.989929,
        "lat": -1.24857
      },
      "name": "Kabale",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.203171,
        "lat": 0.43902
      },
      "name": "Jinja",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.468609,
        "lat": 0.60917
      },
      "name": "Iganga",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.343611,
        "lat": 1.43556
      },
      "name": "Hoima",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.298988,
        "lat": 2.77457
      },
      "name": "Gulu",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.274799,
        "lat": 0.66174
      },
      "name": "Fort Portal",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 32.446941,
        "lat": 0.06444
      },
      "name": "Entebbe",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.628611,
        "lat": -0.59167
      },
      "name": "Bwizibwera",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.174438,
        "lat": 0.64222
      },
      "name": "Buwenge",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 34.075829,
        "lat": 0.45444
      },
      "name": "Busia",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.61306,
        "lat": 0.76972
      },
      "name": "Busembatia",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.04167,
        "lat": 0.74139
      },
      "name": "Bundibugyo",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.741669,
        "lat": 0.57139
      },
      "name": "Bugiri",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 30.911051,
        "lat": 3.02013
      },
      "name": "Arua",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 31.790899,
        "lat": 3.37786
      },
      "name": "Adjumani",
      "country": "UG"
    },
    {
      "coord": {
        "lon": 33.933331,
        "lat": -9.93333
      },
      "name": "Karonga",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 21.17861,
        "lat": 4.31902
      },
      "name": "Mobaye",
      "country": "CF"
    },
    {
      "coord": {
        "lon": 21.22468,
        "lat": 6.26793
      },
      "name": "Ippy",
      "country": "CF"
    },
    {
      "coord": {
        "lon": 21.98633,
        "lat": 6.54233
      },
      "name": "Bria",
      "country": "CF"
    },
    {
      "coord": {
        "lon": 22.81838,
        "lat": 4.74132
      },
      "name": "Bangassou",
      "country": "CF"
    },
    {
      "coord": {
        "lon": 20.67565,
        "lat": 5.76795
      },
      "name": "Bambari",
      "country": "CF"
    },
    {
      "coord": {
        "lon": 55.450001,
        "lat": -4.61667
      },
      "name": "Victoria",
      "country": "SC"
    },
    {
      "coord": {
        "lon": 20.2827,
        "lat": 11.0297
      },
      "name": "Am Timan",
      "country": "TD"
    },
    {
      "coord": {
        "lon": 20.832399,
        "lat": 13.82916
      },
      "name": "Abeche",
      "country": "TD"
    },
    {
      "coord": {
        "lon": 35.81979,
        "lat": 31.95126
      },
      "name": "Wadi as Sir",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.854301,
        "lat": 31.88542
      },
      "name": "Umm as Summaq",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 36.005009,
        "lat": 31.87207
      },
      "name": "Sahab",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.799999,
        "lat": 31.716669
      },
      "name": "Madaba",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.59938,
        "lat": 32.27639
      },
      "name": "Kurayyimah",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.899288,
        "lat": 32.280819
      },
      "name": "Jarash",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.69278,
        "lat": 31.15889
      },
      "name": "Izra",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.849998,
        "lat": 32.555561
      },
      "name": "Irbid",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 36.087959,
        "lat": 32.07275
      },
      "name": "Az Zarqa",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.857498,
        "lat": 32.507221
      },
      "name": "Aydun",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.60442,
        "lat": 30.837521
      },
      "name": "At Tafilah",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.727219,
        "lat": 32.039169
      },
      "name": "As Salt",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 36.006939,
        "lat": 32.55917
      },
      "name": "Ar Ramtha",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.756531,
        "lat": 32.306301
      },
      "name": "Anjarah",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.94503,
        "lat": 31.955219
      },
      "name": "Amman",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.950001,
        "lat": 31.9167
      },
      "name": "Al Quwaysimah",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 36.208038,
        "lat": 32.342892
      },
      "name": "Al Mafraq",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.699989,
        "lat": 31.18248
      },
      "name": "Qir Moav",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.864578,
        "lat": 32.02581
      },
      "name": "Al Jubayhah",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.007778,
        "lat": 29.52667
      },
      "name": "Aqaba",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 35.75238,
        "lat": 32.333851
      },
      "name": "Ajlun",
      "country": "JO"
    },
    {
      "coord": {
        "lon": 23.77651,
        "lat": 37.842209
      },
      "name": "Voula",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.945829,
        "lat": 39.366669
      },
      "name": "Volos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.75,
        "lat": 37.966671
      },
      "name": "Vyronas",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.37944,
        "lat": 37.508888
      },
      "name": "Tripoli",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.7675,
        "lat": 39.555279
      },
      "name": "Trikala",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.31889,
        "lat": 38.325001
      },
      "name": "Thivai",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.42972,
        "lat": 37.07333
      },
      "name": "Sparti",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.49649,
        "lat": 37.964272
      },
      "name": "Salamis",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 24.47139,
        "lat": 35.364719
      },
      "name": "Rethymno",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 20.75,
        "lat": 38.950001
      },
      "name": "Preveza",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.441019,
        "lat": 37.675129
      },
      "name": "Pyrgos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.637079,
        "lat": 37.947449
      },
      "name": "Piraeus",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.68494,
        "lat": 38.04187
      },
      "name": "Petroupolis",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.700001,
        "lat": 38.01667
      },
      "name": "Peristeri",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.5721,
        "lat": 37.967751
      },
      "name": "Perama",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.73444,
        "lat": 38.244438
      },
      "name": "Patra",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.70916,
        "lat": 37.920658
      },
      "name": "Palaio Faliro",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.65,
        "lat": 37.966671
      },
      "name": "Nikaia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.716669,
        "lat": 37.950001
      },
      "name": "Nea Smyrni",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.700001,
        "lat": 38.033329
      },
      "name": "Ilion",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.75,
        "lat": 38.033329
      },
      "name": "Nea Ionia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.73333,
        "lat": 38.033329
      },
      "name": "Nea Filadelfeia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.816669,
        "lat": 38.099998
      },
      "name": "Nea Erythraia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.827499,
        "lat": 38.39167
      },
      "name": "Nafpaktos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.66667,
        "lat": 37.950001
      },
      "name": "Moskhaton",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 26.55472,
        "lat": 39.110001
      },
      "name": "Mytilini",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.83333,
        "lat": 38.049999
      },
      "name": "Melissia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.34556,
        "lat": 38.0
      },
      "name": "Megara",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.87389,
        "lat": 38.435001
      },
      "name": "Livadeia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.42028,
        "lat": 39.637218
      },
      "name": "Larisa",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.433331,
        "lat": 38.900002
      },
      "name": "Lamia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 27.288891,
        "lat": 36.89333
      },
      "name": "Kos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.871811,
        "lat": 37.898861
      },
      "name": "Koropi",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.95734,
        "lat": 37.940681
      },
      "name": "Korinthos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.81106,
        "lat": 38.074379
      },
      "name": "Kifisia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.799999,
        "lat": 38.0
      },
      "name": "Cholargos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 26.13583,
        "lat": 38.367779
      },
      "name": "Chios",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 24.01556,
        "lat": 35.512218
      },
      "name": "Chania",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.59944,
        "lat": 38.463612
      },
      "name": "Chalkida",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.79793,
        "lat": 38.030579
      },
      "name": "Khalandrion",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.61972,
        "lat": 37.962502
      },
      "name": "Keratsini",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.921671,
        "lat": 39.365559
      },
      "name": "Karditsa",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.700001,
        "lat": 37.950001
      },
      "name": "Kallithea",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.11417,
        "lat": 37.038891
      },
      "name": "Kalamata",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.72361,
        "lat": 37.910332
      },
      "name": "Alimos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.799999,
        "lat": 37.966671
      },
      "name": "Kaisariani",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.76667,
        "lat": 38.066669
      },
      "name": "Irakleio",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 25.14341,
        "lat": 35.327869
      },
      "name": "Irakleion",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 20.85083,
        "lat": 39.6675
      },
      "name": "Ioannina",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.75,
        "lat": 38.01667
      },
      "name": "Galatsi",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.73333,
        "lat": 37.883331
      },
      "name": "Elliniko",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.54295,
        "lat": 38.041351
      },
      "name": "Elefsina",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.83333,
        "lat": 38.01667
      },
      "name": "Agia Paraskevi",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.716221,
        "lat": 37.97945
      },
      "name": "Athens",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.58333,
        "lat": 38.066669
      },
      "name": "Aspropyrgos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 20.985279,
        "lat": 39.160561
      },
      "name": "Arta",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.73333,
        "lat": 37.633331
      },
      "name": "Argos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.700001,
        "lat": 38.083328
      },
      "name": "Ano Liosia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.799999,
        "lat": 38.049999
      },
      "name": "Marousi",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.35,
        "lat": 37.799999
      },
      "name": "Amaliada",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.73333,
        "lat": 38.083328
      },
      "name": "Acharnes",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.08194,
        "lat": 38.248611
      },
      "name": "Aigio",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.683331,
        "lat": 37.98333
      },
      "name": "Aigaleo",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.40778,
        "lat": 38.621391
      },
      "name": "Agrinio",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 35.904171,
        "lat": 33.84972
      },
      "name": "Zahle",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.84972,
        "lat": 34.436668
      },
      "name": "Tripoli",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.19389,
        "lat": 33.273331
      },
      "name": "Tyre",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.368889,
        "lat": 33.563061
      },
      "name": "Sidon",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.48333,
        "lat": 33.900002
      },
      "name": "Ras Bayrut",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.617779,
        "lat": 33.980831
      },
      "name": "Djounie",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.64806,
        "lat": 34.121109
      },
      "name": "Jbail",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.48278,
        "lat": 33.407501
      },
      "name": "Habbouch",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 36.010559,
        "lat": 34.250832
      },
      "name": "Bcharre",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.494419,
        "lat": 33.888939
      },
      "name": "Beirut",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 36.21806,
        "lat": 34.005829
      },
      "name": "Baalbek",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 35.483891,
        "lat": 33.378891
      },
      "name": "Nabatiye et Tahta",
      "country": "LB"
    },
    {
      "coord": {
        "lon": 34.259521,
        "lat": 31.287001
      },
      "name": "Rafah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.392502,
        "lat": 31.44861
      },
      "name": "An Nusayrat",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.306271,
        "lat": 31.340179
      },
      "name": "Khan Yunis",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.48634,
        "lat": 31.52722
      },
      "name": "Jabalya",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.466671,
        "lat": 31.5
      },
      "name": "Gaza",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.345249,
        "lat": 31.41655
      },
      "name": "Dayr al Balah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.49514,
        "lat": 31.5464
      },
      "name": "Bayt Lahya",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.535789,
        "lat": 31.535299
      },
      "name": "Bayt Hanun",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.323372,
        "lat": 31.34337
      },
      "name": "Bani Suhayla",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.403061,
        "lat": 31.43944
      },
      "name": "Al Burayj",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.34005,
        "lat": 31.31913
      },
      "name": "Abasan al Kabirah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.216331,
        "lat": 31.769039
      },
      "name": "Jerusalem",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.083328,
        "lat": 31.450001
      },
      "name": "Yuta",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.028629,
        "lat": 32.310371
      },
      "name": "Tulkarm",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.369888,
        "lat": 32.320911
      },
      "name": "Tubas",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.140171,
        "lat": 31.57855
      },
      "name": "Sair",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.184589,
        "lat": 31.89502
      },
      "name": "Ramallah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.970341,
        "lat": 32.18924
      },
      "name": "Qalqilyah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.288231,
        "lat": 32.412552
      },
      "name": "Qabatiyah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.25444,
        "lat": 32.221111
      },
      "name": "Nablus",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.295101,
        "lat": 32.458839
      },
      "name": "Janin",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.974361,
        "lat": 31.558741
      },
      "name": "Idhna",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.105438,
        "lat": 31.578581
      },
      "name": "Halhul",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.02652,
        "lat": 31.507
      },
      "name": "Dura",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.200321,
        "lat": 31.70619
      },
      "name": "Bethlehem",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.187881,
        "lat": 31.71545
      },
      "name": "Bayt Jala",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.164162,
        "lat": 31.515909
      },
      "name": "Bani Naim",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.28561,
        "lat": 32.21207
      },
      "name": "Balatah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 34.973289,
        "lat": 31.40967
      },
      "name": "Az Zahiriyah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.066109,
        "lat": 31.396709
      },
      "name": "As Samu",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.23402,
        "lat": 31.855391
      },
      "name": "Ar Ram wa Dahiyat al Barid",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.450001,
        "lat": 31.866671
      },
      "name": "Jericho",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.2267,
        "lat": 32.4846
      },
      "name": "Al Yamun",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.099998,
        "lat": 31.533331
      },
      "name": "Hebron",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.220612,
        "lat": 31.907209
      },
      "name": "Al Birah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 35.269161,
        "lat": 31.770781
      },
      "name": "Al Ayzariyah",
      "country": "PS"
    },
    {
      "coord": {
        "lon": 47.978062,
        "lat": 29.269171
      },
      "name": "Janub as Surrah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.048809,
        "lat": 29.3032
      },
      "name": "Bayan",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.076111,
        "lat": 29.333891
      },
      "name": "As Salimiyah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.094719,
        "lat": 29.14583
      },
      "name": "Ar Riqqah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.132778,
        "lat": 29.096109
      },
      "name": "Al Manqaf",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.13028,
        "lat": 29.145
      },
      "name": "Al Mahbulah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 47.978329,
        "lat": 29.36972
      },
      "name": "Kuwait City",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 47.658058,
        "lat": 29.3375
      },
      "name": "Al Jahra",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.13028,
        "lat": 29.0825
      },
      "name": "Al Fahahil",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.121109,
        "lat": 29.173889
      },
      "name": "Al Fintas",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 47.958611,
        "lat": 29.2775
      },
      "name": "Al Farwaniyah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 48.001389,
        "lat": 29.365
      },
      "name": "Ad Dasmah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 59.528889,
        "lat": 22.566669
      },
      "name": "Sur",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 56.746811,
        "lat": 24.3643
      },
      "name": "Al Sohar",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.01667,
        "lat": 23.316669
      },
      "name": "Sufalat Samail",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 56.465832,
        "lat": 24.74333
      },
      "name": "Shinas",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 54.092369,
        "lat": 17.015051
      },
      "name": "Salalah",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 56.888611,
        "lat": 24.17222
      },
      "name": "Saham",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.533329,
        "lat": 22.933331
      },
      "name": "Nizwa",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.592201,
        "lat": 23.613871
      },
      "name": "Muscat",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 56.247742,
        "lat": 26.17993
      },
      "name": "Khasab",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.76667,
        "lat": 22.933331
      },
      "name": "Izki",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 56.51572,
        "lat": 23.225731
      },
      "name": "Ibri",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.533371,
        "lat": 22.690571
      },
      "name": "Ibra",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.1283,
        "lat": 23.40786
      },
      "name": "Bidbid",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.398899,
        "lat": 23.55563
      },
      "name": "Bawshar",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.88908,
        "lat": 23.70739
      },
      "name": "Barka",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.29958,
        "lat": 22.973391
      },
      "name": "Bahla",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.799999,
        "lat": 22.450001
      },
      "name": "Badiyah",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.43861,
        "lat": 23.84944
      },
      "name": "As Suwayq",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 58.18911,
        "lat": 23.670271
      },
      "name": "As Sib al Jadidah",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.424438,
        "lat": 23.390829
      },
      "name": "Ar Rustaq",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 56.565559,
        "lat": 24.53611
      },
      "name": "Al Liwa",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.098381,
        "lat": 23.98864
      },
      "name": "Al Khaburah",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 55.793121,
        "lat": 24.250879
      },
      "name": "Al Buraymi",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 57.523338,
        "lat": 22.375601
      },
      "name": "Adam",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 51.403889,
        "lat": 25.416941
      },
      "name": "Umm Salal Muhammad",
      "country": "QA"
    },
    {
      "coord": {
        "lon": 51.424438,
        "lat": 25.291941
      },
      "name": "Ar Rayyan",
      "country": "QA"
    },
    {
      "coord": {
        "lon": 51.603371,
        "lat": 25.171511
      },
      "name": "Al Wakrah",
      "country": "QA"
    },
    {
      "coord": {
        "lon": 51.505829,
        "lat": 25.683889
      },
      "name": "Al Khawr",
      "country": "QA"
    },
    {
      "coord": {
        "lon": 51.533333,
        "lat": 25.286667
      },
      "name": "Doha",
      "country": "QA"
    },
    {
      "coord": {
        "lon": 50.62056,
        "lat": 26.15472
      },
      "name": "Sitrah",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 50.547779,
        "lat": 26.173611
      },
      "name": "Madinat Isa",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 50.547779,
        "lat": 26.218611
      },
      "name": "Jidd Hafs",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 50.506939,
        "lat": 26.11528
      },
      "name": "Madinat Hamad",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 50.503891,
        "lat": 26.068609
      },
      "name": "Dar Kulayb",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 50.611938,
        "lat": 26.257219
      },
      "name": "Al Muharraq",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 50.583199,
        "lat": 26.215361
      },
      "name": "Manama",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 55.555168,
        "lat": 25.56473
      },
      "name": "Umm al Qaywayn",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 55.943199,
        "lat": 25.78953
      },
      "name": "Ras al Khaymah",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 56.341991,
        "lat": 25.33132
      },
      "name": "Khawr Fakkan",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 55.304722,
        "lat": 25.258169
      },
      "name": "Dubai",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 56.272911,
        "lat": 25.619551
      },
      "name": "Diba",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 55.403301,
        "lat": 25.357309
      },
      "name": "Sharjah",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 52.73056,
        "lat": 24.110279
      },
      "name": "Ar Ruways",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 56.341412,
        "lat": 25.116409
      },
      "name": "Al Fujayrah",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 55.760559,
        "lat": 24.191669
      },
      "name": "Al Ayn",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 55.43504,
        "lat": 25.41111
      },
      "name": "Ajman",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 55.881569,
        "lat": 25.28812
      },
      "name": "Adh Dhayd",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 54.366669,
        "lat": 24.466669
      },
      "name": "Abu Dhabi",
      "country": "AE"
    },
    {
      "coord": {
        "lon": 35.500488,
        "lat": 32.965641
      },
      "name": "Zefat",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.740002,
        "lat": 31.87639
      },
      "name": "Yavne",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.752239,
        "lat": 32.05043
      },
      "name": "Yafo",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.153488,
        "lat": 32.51725
      },
      "name": "Umm el Fahm",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.971939,
        "lat": 32.761669
      },
      "name": "Tirat Karmel",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.531239,
        "lat": 32.792198
      },
      "name": "Tiberias",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.780571,
        "lat": 32.080879
      },
      "name": "Tel Aviv",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.26667,
        "lat": 33.01667
      },
      "name": "maalot Tarshiha",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.20472,
        "lat": 32.84861
      },
      "name": "Tamra",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.596931,
        "lat": 31.525
      },
      "name": "Sederot",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.293331,
        "lat": 32.862221
      },
      "name": "Sakhnin",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.945831,
        "lat": 32.09417
      },
      "name": "Rosh HaAyin",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.80444,
        "lat": 31.96417
      },
      "name": "Rishon LeZiyyon",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.86694,
        "lat": 31.92528
      },
      "name": "Ramla",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.841671,
        "lat": 32.147221
      },
      "name": "Ramat HaSharon",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.814171,
        "lat": 32.080559
      },
      "name": "Ramat Gan",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.070278,
        "lat": 32.85083
      },
      "name": "Qiryat Yam",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.572121,
        "lat": 33.207329
      },
      "name": "Qiryat Shemona",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.075279,
        "lat": 32.836391
      },
      "name": "Qiryat Motzkin",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.764221,
        "lat": 31.60998
      },
      "name": "Qiryat Gat",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.085831,
        "lat": 32.827499
      },
      "name": "Qiryat Bialik",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.106392,
        "lat": 32.80056
      },
      "name": "Qiryat Ata",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.98106,
        "lat": 32.284931
      },
      "name": "Qalansuwa",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.845829,
        "lat": 32.031109
      },
      "name": "Or Yehuda",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.620251,
        "lat": 31.3141
      },
      "name": "Ofaqim",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.588581,
        "lat": 31.42215
      },
      "name": "Netivot",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.859921,
        "lat": 32.33292
      },
      "name": "Netanya",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.798679,
        "lat": 31.929331
      },
      "name": "Ness Ziona",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.049999,
        "lat": 32.764999
      },
      "name": "Nesher",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.295559,
        "lat": 32.703609
      },
      "name": "Nazareth",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.09409,
        "lat": 33.005859
      },
      "name": "Nahariyya",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.240559,
        "lat": 32.671391
      },
      "name": "Migdal HaEmeq",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.106689,
        "lat": 31.721769
      },
      "name": "Mevo Betar",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.407028,
        "lat": 32.889839
      },
      "name": "Maghar",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.895279,
        "lat": 31.951389
      },
      "name": "Lod",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.90694,
        "lat": 32.174999
      },
      "name": "Kfar Saba",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.304169,
        "lat": 32.917221
      },
      "name": "Karmiel",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.973888,
        "lat": 32.11417
      },
      "name": "Kafr Qasim",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.260281,
        "lat": 32.80722
      },
      "name": "Kafr Manda",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.342419,
        "lat": 32.746601
      },
      "name": "Kafr Kanna",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.154999,
        "lat": 32.92556
      },
      "name": "Judieda Makr",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.772221,
        "lat": 32.011391
      },
      "name": "Holon",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.888329,
        "lat": 32.150829
      },
      "name": "Hod HaSharon",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.83667,
        "lat": 32.165829
      },
      "name": "Herzliyya",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.98917,
        "lat": 32.815559
      },
      "name": "Haifa",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.919559,
        "lat": 32.436451
      },
      "name": "Hadera",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.846668,
        "lat": 32.075279
      },
      "name": "Givat Shemuel",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.811668,
        "lat": 32.069721
      },
      "name": "Givatayim",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.95023,
        "lat": 32.2341
      },
      "name": "Tirah",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.00893,
        "lat": 32.266159
      },
      "name": "Et Taiyiba",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.3125,
        "lat": 32.72361
      },
      "name": "Er Reina",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.948212,
        "lat": 29.55805
      },
      "name": "Eilat",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.033329,
        "lat": 31.066669
      },
      "name": "Dimona",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.040829,
        "lat": 32.693611
      },
      "name": "Daliyat el Karmil",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.98877,
        "lat": 31.74959
      },
      "name": "Bet Shemesh",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.5,
        "lat": 32.5
      },
      "name": "Bet Shean",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.839722,
        "lat": 32.090279
      },
      "name": "Bene Beraq",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.791302,
        "lat": 31.25181
      },
      "name": "Beersheba",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.750278,
        "lat": 32.02306
      },
      "name": "Bat Yam",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.571491,
        "lat": 31.66926
      },
      "name": "Ashqelon",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 34.650002,
        "lat": 31.816669
      },
      "name": "Ashdod",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.072781,
        "lat": 32.923611
      },
      "name": "Akko",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 35.325218,
        "lat": 32.633228
      },
      "name": "Afula Illit",
      "country": "IL"
    },
    {
      "coord": {
        "lon": 44.287159,
        "lat": 37.57362
      },
      "name": "Yuksekova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.80444,
        "lat": 39.82
      },
      "name": "Yozgat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.825581,
        "lat": 37.3405
      },
      "name": "Yesilli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.200001,
        "lat": 36.955891
      },
      "name": "Erzin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.46722,
        "lat": 39.638062
      },
      "name": "Yerkoy",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.26778,
        "lat": 37.375561
      },
      "name": "Didim",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.14279,
        "lat": 37.34026
      },
      "name": "Yatagan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.17778,
        "lat": 38.295559
      },
      "name": "Yalvac",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.35704,
        "lat": 38.10228
      },
      "name": "Yahyali",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.763062,
        "lat": 37.235279
      },
      "name": "Viransehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.455929,
        "lat": 39.17321
      },
      "name": "Varto",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.38311,
        "lat": 38.49239
      },
      "name": "Van",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.702129,
        "lat": 39.71011
      },
      "name": "Cimin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.4058,
        "lat": 38.673512
      },
      "name": "Usak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.76403,
        "lat": 38.322922
      },
      "name": "Urla",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.91198,
        "lat": 38.629601
      },
      "name": "Urgub",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.793919,
        "lat": 37.16708
      },
      "name": "Sanliurfa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.699699,
        "lat": 38.495331
      },
      "name": "Turgutlu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.547112,
        "lat": 39.108292
      },
      "name": "Tunceli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.36223,
        "lat": 38.151901
      },
      "name": "Torbali",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.735081,
        "lat": 38.088772
      },
      "name": "Tire",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.527229,
        "lat": 36.501701
      },
      "name": "Tekirova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.498659,
        "lat": 39.54237
      },
      "name": "Tavsanli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.28167,
        "lat": 38.506672
      },
      "name": "Tatvan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.878399,
        "lat": 36.918758
      },
      "name": "Tarsus",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.553799,
        "lat": 38.6908
      },
      "name": "Talas",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.15778,
        "lat": 39.913609
      },
      "name": "Susurluk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.42495,
        "lat": 36.976139
      },
      "name": "Suruc",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.185959,
        "lat": 39.81012
      },
      "name": "Sorgun",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.609449,
        "lat": 39.185539
      },
      "name": "Soma",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.029308,
        "lat": 38.963379
      },
      "name": "Solhan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.406139,
        "lat": 37.748199
      },
      "name": "Soeke",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.316669,
        "lat": 37.75502
      },
      "name": "Siverek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.016109,
        "lat": 39.748329
      },
      "name": "Sivas",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.459438,
        "lat": 37.522781
      },
      "name": "Sirnak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.977671,
        "lat": 39.0882
      },
      "name": "Simav",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.00806,
        "lat": 38.141941
      },
      "name": "Silvan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.46944,
        "lat": 37.249722
      },
      "name": "Silopi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.934441,
        "lat": 36.377781
      },
      "name": "Silifke",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.94025,
        "lat": 37.932621
      },
      "name": "Siirt",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.84527,
        "lat": 37.419258
      },
      "name": "Seydisehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.09889,
        "lat": 36.916939
      },
      "name": "Serik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.538601,
        "lat": 38.939251
      },
      "name": "Sereflikochisar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.548611,
        "lat": 38.104439
      },
      "name": "Senirkent",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 44.5742,
        "lat": 37.305141
      },
      "name": "Semdinli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.36849,
        "lat": 37.95137
      },
      "name": "Selcuk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.83902,
        "lat": 38.196861
      },
      "name": "Seferihisar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.40976,
        "lat": 39.35186
      },
      "name": "Sarkisla",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.36639,
        "lat": 38.079441
      },
      "name": "Sarkikaraagac",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.925159,
        "lat": 37.92448
      },
      "name": "Saraykoy",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.269461,
        "lat": 38.464722
      },
      "name": "Sandikli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.147739,
        "lat": 38.482578
      },
      "name": "Salihli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.567219,
        "lat": 36.269169
      },
      "name": "Reyhanli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.141319,
        "lat": 39.57716
      },
      "name": "Polatli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.29961,
        "lat": 37.486851
      },
      "name": "Pazarcik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.863441,
        "lat": 39.233608
      },
      "name": "Patnos",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.67635,
        "lat": 39.980309
      },
      "name": "Pasinler",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.24778,
        "lat": 37.074169
      },
      "name": "Osmaniye",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.038658,
        "lat": 38.737282
      },
      "name": "Ortakoy",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.77083,
        "lat": 36.829441
      },
      "name": "Ortaca",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.969549,
        "lat": 38.227798
      },
      "name": "Hypaepa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.2178,
        "lat": 37.077801
      },
      "name": "Nusaybin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.79417,
        "lat": 37.00972
      },
      "name": "Nizip",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.679352,
        "lat": 37.965832
      },
      "name": "Nigde",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.712219,
        "lat": 38.625
      },
      "name": "Nevsehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.32225,
        "lat": 37.916309
      },
      "name": "Nazilli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.43885,
        "lat": 36.64389
      },
      "name": "Mut",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.506931,
        "lat": 38.745251
      },
      "name": "Mus",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.366501,
        "lat": 37.218071
      },
      "name": "Mugla",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.382858,
        "lat": 39.06147
      },
      "name": "Mucur",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.78389,
        "lat": 37.316391
      },
      "name": "Milas",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.33934,
        "lat": 37.424702
      },
      "name": "Midyat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.61792,
        "lat": 36.795261
      },
      "name": "Mercin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.06938,
        "lat": 38.60754
      },
      "name": "Menemen",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.27417,
        "lat": 36.855
      },
      "name": "Marmaris",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.743568,
        "lat": 37.313091
      },
      "name": "Mardin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.42646,
        "lat": 38.612019
      },
      "name": "Manisa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.44306,
        "lat": 36.786671
      },
      "name": "Manavgat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.540081,
        "lat": 39.142651
      },
      "name": "Malazgirt",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.316669,
        "lat": 38.350182
      },
      "name": "Malatya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.647499,
        "lat": 38.459171
      },
      "name": "Lice",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.98333,
        "lat": 39.424171
      },
      "name": "Kutahya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.256599,
        "lat": 37.855621
      },
      "name": "Kusadasi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.70282,
        "lat": 37.92717
      },
      "name": "Kurtalan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.30302,
        "lat": 36.325729
      },
      "name": "Beykonak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.079891,
        "lat": 39.095139
      },
      "name": "Kulu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.012218,
        "lat": 38.497219
      },
      "name": "Kulp",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.649759,
        "lat": 38.54726
      },
      "name": "Kula",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.488529,
        "lat": 38.193829
      },
      "name": "Kozluk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.815731,
        "lat": 37.45517
      },
      "name": "Kozan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.868061,
        "lat": 38.72139
      },
      "name": "Kovancilar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.19565,
        "lat": 37.06498
      },
      "name": "Korkuteli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.484638,
        "lat": 37.871349
      },
      "name": "Konya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.584999,
        "lat": 37.193329
      },
      "name": "Kiziltepe",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.26639,
        "lat": 37.581039
      },
      "name": "Serinhisar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.163891,
        "lat": 39.145828
      },
      "name": "Kirsehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.66925,
        "lat": 39.10638
      },
      "name": "Kirkagac",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.50639,
        "lat": 39.84528
      },
      "name": "Kirikkale",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.357552,
        "lat": 36.49939
      },
      "name": "Kirikhan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.115002,
        "lat": 36.71611
      },
      "name": "Kilis",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.613609,
        "lat": 39.673061
      },
      "name": "Keskin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.56056,
        "lat": 36.597778
      },
      "name": "Kemer",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.417311,
        "lat": 38.426208
      },
      "name": "Kemalpasa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.485279,
        "lat": 38.73222
      },
      "name": "Kayseri",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.55064,
        "lat": 37.715961
      },
      "name": "Karapinar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.215,
        "lat": 37.18111
      },
      "name": "Karaman",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.051392,
        "lat": 39.71944
      },
      "name": "Agri",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.038609,
        "lat": 38.95583
      },
      "name": "Karakocan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.112389,
        "lat": 39.34919
      },
      "name": "Karacoban",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.723888,
        "lat": 39.357498
      },
      "name": "Kaman",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.623699,
        "lat": 37.785519
      },
      "name": "Kahta",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.926399,
        "lat": 37.584702
      },
      "name": "Kahramanmaras",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.096111,
        "lat": 37.37389
      },
      "name": "Kadirli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.211391,
        "lat": 38.239719
      },
      "name": "Kadinhani",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.13838,
        "lat": 38.412731
      },
      "name": "Izmir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.552219,
        "lat": 37.764439
      },
      "name": "Isparta",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.17347,
        "lat": 36.587181
      },
      "name": "Iskenderun",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.72361,
        "lat": 37.852219
      },
      "name": "Incirliova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.657169,
        "lat": 37.26506
      },
      "name": "Imamoglu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.913891,
        "lat": 38.279171
      },
      "name": "Ilgin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 44.044998,
        "lat": 39.92371
      },
      "name": "Igdir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.8895,
        "lat": 37.341141
      },
      "name": "Idil",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.427761,
        "lat": 38.225719
      },
      "name": "Hizan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.702221,
        "lat": 39.3606
      },
      "name": "Hinis",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.955051,
        "lat": 37.586861
      },
      "name": "Hilvan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.456741,
        "lat": 36.987759
      },
      "name": "Hadim",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.449371,
        "lat": 38.646309
      },
      "name": "Hacilar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.028111,
        "lat": 38.577389
      },
      "name": "Guroymak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.636669,
        "lat": 37.783611
      },
      "name": "Golbasi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.497299,
        "lat": 38.020962
      },
      "name": "Goksun",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.560349,
        "lat": 38.75071
      },
      "name": "Genc",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.071892,
        "lat": 39.183418
      },
      "name": "Gemerek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.41,
        "lat": 39.041672
      },
      "name": "Gediz",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.317921,
        "lat": 36.269421
      },
      "name": "Gazipasa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.3825,
        "lat": 37.059441
      },
      "name": "Gaziantep",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.756559,
        "lat": 38.6703
      },
      "name": "Foca",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.11639,
        "lat": 36.62167
      },
      "name": "Fethiye",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.34083,
        "lat": 39.78561
      },
      "name": "Ezine",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.520559,
        "lat": 39.776669
      },
      "name": "Eskisehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.276939,
        "lat": 39.908611
      },
      "name": "Erzurum",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.492779,
        "lat": 39.75222
      },
      "name": "Erzincan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.891788,
        "lat": 36.64043
      },
      "name": "Ermenek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.762119,
        "lat": 38.265331
      },
      "name": "Ergani",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.046719,
        "lat": 37.513329
      },
      "name": "Eregli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.308361,
        "lat": 36.60498
      },
      "name": "Erdemli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.358639,
        "lat": 39.02869
      },
      "name": "Ercis",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.15,
        "lat": 39.019718
      },
      "name": "Emirdag",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.258471,
        "lat": 39.342999
      },
      "name": "Emet",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.917749,
        "lat": 36.735828
      },
      "name": "Elmali",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.230831,
        "lat": 39.92083
      },
      "name": "Elmadag",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.673611,
        "lat": 39.803329
      },
      "name": "Eleskirt",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.198299,
        "lat": 38.20591
      },
      "name": "Elbistan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.223209,
        "lat": 38.674309
      },
      "name": "Elazig",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.85042,
        "lat": 37.874619
      },
      "name": "Egirdir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.024441,
        "lat": 39.596111
      },
      "name": "Edremit",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.625681,
        "lat": 39.58596
      },
      "name": "Dursunbey",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.228851,
        "lat": 36.86158
      },
      "name": "Dortyol",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 44.084171,
        "lat": 39.54694
      },
      "name": "Dogubayazit",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.218891,
        "lat": 37.915829
      },
      "name": "Diyarbakir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.671349,
        "lat": 39.540562
      },
      "name": "Diyadin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.165569,
        "lat": 38.064999
      },
      "name": "Dinar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.492222,
        "lat": 38.39056
      },
      "name": "Develi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.0875,
        "lat": 37.77417
      },
      "name": "Denizli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.65889,
        "lat": 39.04607
      },
      "name": "Demirci",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.719662,
        "lat": 37.545448
      },
      "name": "Dargecit",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.505829,
        "lat": 38.54583
      },
      "name": "Darende",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.77446,
        "lat": 37.5732
      },
      "name": "Cumra",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.134291,
        "lat": 38.24963
      },
      "name": "Cumaovasi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.740829,
        "lat": 37.57444
      },
      "name": "Hakkari",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.190281,
        "lat": 37.327221
      },
      "name": "Cizre",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.06139,
        "lat": 37.611671
      },
      "name": "Cine",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.049999,
        "lat": 36.847221
      },
      "name": "Ceylanpinar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.817501,
        "lat": 37.024719
      },
      "name": "Ceyhan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.306391,
        "lat": 38.322781
      },
      "name": "Cesme",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.449291,
        "lat": 38.136131
      },
      "name": "Cermik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.02861,
        "lat": 38.591671
      },
      "name": "Cay",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.296219,
        "lat": 37.749592
      },
      "name": "Caglayancerit",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.972691,
        "lat": 39.500408
      },
      "name": "Burhaniye",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.290831,
        "lat": 37.72028
      },
      "name": "Burdur",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.270309,
        "lat": 39.092918
      },
      "name": "Bulanik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.594999,
        "lat": 37.459171
      },
      "name": "Bucak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.961128,
        "lat": 36.1082
      },
      "name": "Bozyazi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.036671,
        "lat": 39.90778
      },
      "name": "Bozuyuk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.526669,
        "lat": 37.362499
      },
      "name": "Bozova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.558891,
        "lat": 37.89056
      },
      "name": "Bor",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.048611,
        "lat": 38.711109
      },
      "name": "Bolvadin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.429171,
        "lat": 37.03833
      },
      "name": "Bodrum",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.665829,
        "lat": 37.84861
      },
      "name": "Bismil",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.99028,
        "lat": 37.029442
      },
      "name": "Birecik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.493889,
        "lat": 38.88472
      },
      "name": "Bingol",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.131109,
        "lat": 39.392502
      },
      "name": "Bigadic",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.724581,
        "lat": 37.677349
      },
      "name": "Beysehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.861111,
        "lat": 37.69278
      },
      "name": "Besni",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.180519,
        "lat": 39.120739
      },
      "name": "Bergama",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.223309,
        "lat": 36.489109
      },
      "name": "Belen",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.055559,
        "lat": 36.862782
      },
      "name": "Belek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.64744,
        "lat": 38.217411
      },
      "name": "Bayindir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.13221,
        "lat": 37.887379
      },
      "name": "Batman",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.823818,
        "lat": 38.567909
      },
      "name": "Baskil",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.75194,
        "lat": 38.737068
      },
      "name": "Banaz",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.88611,
        "lat": 39.64917
      },
      "name": "Balikesir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.57658,
        "lat": 37.197239
      },
      "name": "Bahce",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.6954,
        "lat": 39.31905
      },
      "name": "Ayvalik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.83963,
        "lat": 37.845009
      },
      "name": "Aydin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.695,
        "lat": 39.92083
      },
      "name": "Askale",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.69556,
        "lat": 36.908119
      },
      "name": "Antalya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.157219,
        "lat": 36.206551
      },
      "name": "Antioch",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.854271,
        "lat": 39.919868
      },
      "name": "Ankara",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.83691,
        "lat": 36.075081
      },
      "name": "Anamur",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.972031,
        "lat": 38.799751
      },
      "name": "Aliaga",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.517179,
        "lat": 38.35083
      },
      "name": "Alasehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.999821,
        "lat": 36.543751
      },
      "name": "Alanya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.416389,
        "lat": 38.357498
      },
      "name": "Aksehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.025372,
        "lat": 38.372551
      },
      "name": "Aksaray",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.840059,
        "lat": 38.918522
      },
      "name": "Akhisar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.88361,
        "lat": 39.660278
      },
      "name": "Akdagmadeni",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.947498,
        "lat": 36.711109
      },
      "name": "Akcakale",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.48135,
        "lat": 38.751781
      },
      "name": "Ahlat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.543329,
        "lat": 38.756672
      },
      "name": "Afyonkarahisar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.91399,
        "lat": 38.247688
      },
      "name": "Afsin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.276291,
        "lat": 37.764408
      },
      "name": "Adiyaman",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.734219,
        "lat": 38.80389
      },
      "name": "Adilcevaz",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.328892,
        "lat": 37.001671
      },
      "name": "Adana",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.716671,
        "lat": 7.93333
      },
      "name": "Ziway",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.416672,
        "lat": 6.75
      },
      "name": "Yirga Alem",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.083328,
        "lat": 4.88333
      },
      "name": "Yabelo",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.700001,
        "lat": 11.91667
      },
      "name": "Werota",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.283329,
        "lat": 8.45
      },
      "name": "Wenji",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 35.450001,
        "lat": 7.2
      },
      "name": "Tippi",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.599998,
        "lat": 7.2
      },
      "name": "Shashemene",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.099998,
        "lat": 9.56667
      },
      "name": "Shambu",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.916672,
        "lat": 5.75
      },
      "name": "Shakiso",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.616669,
        "lat": 8.91667
      },
      "name": "Sebeta",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.633331,
        "lat": 12.01667
      },
      "name": "Robit",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 35.5,
        "lat": 9.5
      },
      "name": "Nejo",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.26667,
        "lat": 8.55
      },
      "name": "Nazret",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.116669,
        "lat": 8.6
      },
      "name": "Mojo",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.450001,
        "lat": 15.60972
      },
      "name": "Massawa",
      "country": "ER"
    },
    {
      "coord": {
        "lon": 35.583328,
        "lat": 8.3
      },
      "name": "Metu",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.916672,
        "lat": 8.9
      },
      "name": "Metahara",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 35.099998,
        "lat": 9.8
      },
      "name": "Mendi",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.475281,
        "lat": 13.49667
      },
      "name": "Mekele",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.542221,
        "lat": 12.7875
      },
      "name": "Maychew",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.522781,
        "lat": 12.50583
      },
      "name": "Korem",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.083328,
        "lat": 7.31667
      },
      "name": "Kolito",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.98333,
        "lat": 5.88333
      },
      "name": "Kibre Mengist",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.458061,
        "lat": 15.77778
      },
      "name": "Keren",
      "country": "ER"
    },
    {
      "coord": {
        "lon": 39.866669,
        "lat": 10.71667
      },
      "name": "Kemise",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.743389,
        "lat": 11.08155
      },
      "name": "Kombolcha",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 36.650002,
        "lat": 5.65
      },
      "name": "Jinka",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 36.833328,
        "lat": 7.66667
      },
      "name": "Jima",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 42.799999,
        "lat": 9.35
      },
      "name": "Jijiga",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.28289,
        "lat": 14.10307
      },
      "name": "Inda Silase",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 42.125832,
        "lat": 9.30944
      },
      "name": "Harer",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.849998,
        "lat": 8.98333
      },
      "name": "Hagere Hiywet",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.466671,
        "lat": 12.6
      },
      "name": "Gonder",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.98333,
        "lat": 7.01667
      },
      "name": "Goba",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.98333,
        "lat": 8.53333
      },
      "name": "Giyon",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 40.700001,
        "lat": 7.13333
      },
      "name": "Ginir",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 35.833328,
        "lat": 9.16667
      },
      "name": "Gimbi",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.5,
        "lat": 9.06667
      },
      "name": "Genet",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 40.51667,
        "lat": 8.81667
      },
      "name": "Gelemso",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.400002,
        "lat": 9.8
      },
      "name": "Gebre Guracha",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 34.583328,
        "lat": 8.25
      },
      "name": "Gambela",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.26667,
        "lat": 10.7
      },
      "name": "Finote Selam",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.73333,
        "lat": 9.8
      },
      "name": "Fiche",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 36.883331,
        "lat": 6.3
      },
      "name": "Felege Neway",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 41.085281,
        "lat": 11.73611
      },
      "name": "Dubti",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.183331,
        "lat": 6.98333
      },
      "name": "Dodola",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 41.866112,
        "lat": 9.59306
      },
      "name": "Dire Dawa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.316669,
        "lat": 6.41667
      },
      "name": "Dila",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.633331,
        "lat": 11.13333
      },
      "name": "Dese",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 34.799999,
        "lat": 8.53333
      },
      "name": "Dembi Dolo",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.98333,
        "lat": 8.75
      },
      "name": "Debre Zeyit",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.01667,
        "lat": 11.85
      },
      "name": "Debre Tabor",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.73333,
        "lat": 10.35
      },
      "name": "Debre Markos",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.533329,
        "lat": 9.68333
      },
      "name": "Debre Birhan",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.89806,
        "lat": 13.15611
      },
      "name": "Debark",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.366669,
        "lat": 8.11667
      },
      "name": "Butajira",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.066669,
        "lat": 10.7
      },
      "name": "Bure",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 36.23333,
        "lat": 7.28333
      },
      "name": "Bonga",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.866669,
        "lat": 6.96667
      },
      "name": "Boditi",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.200001,
        "lat": 10.45
      },
      "name": "Bichena",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 40.783329,
        "lat": 8.9
      },
      "name": "Bedesa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 36.35302,
        "lat": 8.456
      },
      "name": "Bedele",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 40.01667,
        "lat": 11.18333
      },
      "name": "Bati",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.592781,
        "lat": 15.11389
      },
      "name": "Barentu",
      "country": "ER"
    },
    {
      "coord": {
        "lon": 36.566669,
        "lat": 5.78333
      },
      "name": "Bako",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.39077,
        "lat": 11.59364
      },
      "name": "Bahir Dar",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.466671,
        "lat": 7.05
      },
      "name": "Hawassa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 34.533329,
        "lat": 10.06667
      },
      "name": "Asosa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.933331,
        "lat": 15.33333
      },
      "name": "Asmera",
      "country": "ER"
    },
    {
      "coord": {
        "lon": 42.739441,
        "lat": 13.00917
      },
      "name": "Assab",
      "country": "ER"
    },
    {
      "coord": {
        "lon": 40.866669,
        "lat": 9.08333
      },
      "name": "Asbe Teferi",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 41.439442,
        "lat": 11.56361
      },
      "name": "Asaita",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.200001,
        "lat": 7.1
      },
      "name": "Asasa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.700001,
        "lat": 7.06667
      },
      "name": "Areka",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.549999,
        "lat": 6.03333
      },
      "name": "Arba Minch",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.724442,
        "lat": 14.12448
      },
      "name": "Aksum",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.23333,
        "lat": 5.63333
      },
      "name": "Hagere Maryam",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 36.650002,
        "lat": 7.85
      },
      "name": "Agaro",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.815281,
        "lat": 14.88722
      },
      "name": "Mendefera",
      "country": "ER"
    },
    {
      "coord": {
        "lon": 37.783329,
        "lat": 12.11667
      },
      "name": "Adis Zemen",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 38.746891,
        "lat": 9.02497
      },
      "name": "Addis Ababa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.462002,
        "lat": 14.277
      },
      "name": "Adigrat",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 37.48333,
        "lat": 11.26667
      },
      "name": "Addiet Canna",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 39.98333,
        "lat": 9.98333
      },
      "name": "Abomsa",
      "country": "ET"
    },
    {
      "coord": {
        "lon": 31.244249,
        "lat": 30.714199
      },
      "name": "Zifta",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.20071,
        "lat": 30.353939
      },
      "name": "Toukh",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.001921,
        "lat": 30.788469
      },
      "name": "Tanda",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.961189,
        "lat": 29.476391
      },
      "name": "Tamiyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.377871,
        "lat": 31.0539
      },
      "name": "Talkha",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.942921,
        "lat": 30.68025
      },
      "name": "Tala",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.50214,
        "lat": 26.7693
      },
      "name": "Tahta",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.85,
        "lat": 28.91667
      },
      "name": "Sumusta as Sultani",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.69478,
        "lat": 26.55695
      },
      "name": "Suhaj",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.78665,
        "lat": 31.271049
      },
      "name": "Sidi Salim",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.521271,
        "lat": 31.19544
      },
      "name": "Shirbin",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.320181,
        "lat": 30.312691
      },
      "name": "Shibin al Qanatir",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.24332,
        "lat": 30.960329
      },
      "name": "Samannud",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.71007,
        "lat": 28.31214
      },
      "name": "Samalut",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.416389,
        "lat": 31.40444
      },
      "name": "Rosetta",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.15777,
        "lat": 30.564819
      },
      "name": "Quwaysina",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.956141,
        "lat": 30.97225
      },
      "name": "Qutur",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.763618,
        "lat": 25.91407
      },
      "name": "Kousa",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.726711,
        "lat": 26.164181
      },
      "name": "Qina",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.205601,
        "lat": 30.17922
      },
      "name": "Qalyub",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.241421,
        "lat": 26.04949
      },
      "name": "Naj Hammadi",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.6399,
        "lat": 31.12294
      },
      "name": "Minyat an Nasr",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.931641,
        "lat": 30.46579
      },
      "name": "Minuf",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.77924,
        "lat": 28.418989
      },
      "name": "Matay",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.3776,
        "lat": 30.360559
      },
      "name": "Mashtul as Suq",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 27.245279,
        "lat": 31.352539
      },
      "name": "Marsa Matruh",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.970039,
        "lat": 27.3104
      },
      "name": "Manfalut",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.84165,
        "lat": 27.7314
      },
      "name": "Mallawi",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.049999,
        "lat": 29.816669
      },
      "name": "Madinat Sittah Uktubar",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.946259,
        "lat": 24.47669
      },
      "name": "Kawm Umbu",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.69733,
        "lat": 30.76096
      },
      "name": "Kawm Hamadah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.62575,
        "lat": 30.79336
      },
      "name": "Kafr Saqr",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.81805,
        "lat": 30.8248
      },
      "name": "Kafr az Zayyat",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.940121,
        "lat": 31.1143
      },
      "name": "Kafr ash Shaykh",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.128429,
        "lat": 31.13385
      },
      "name": "Kafr ad Dawwar",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.497601,
        "lat": 26.673189
      },
      "name": "Juhaynah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.891609,
        "lat": 26.338261
      },
      "name": "Jirja",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.841061,
        "lat": 31.5084
      },
      "name": "Izbat al Burj",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.78944,
        "lat": 29.2376
      },
      "name": "Itsa",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.55402,
        "lat": 25.29336
      },
      "name": "Isna",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.299009,
        "lat": 31.307819
      },
      "name": "Idku",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.681419,
        "lat": 29.35804
      },
      "name": "Ibshaway",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.30084,
        "lat": 29.84144
      },
      "name": "Halwan",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.588011,
        "lat": 30.671301
      },
      "name": "Hihya",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.29018,
        "lat": 30.9128
      },
      "name": "Hawsh Isa",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.55018,
        "lat": 31.202909
      },
      "name": "Fuwah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.163288,
        "lat": 26.054939
      },
      "name": "Farshut",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.715071,
        "lat": 31.329769
      },
      "name": "Faraskur",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.801821,
        "lat": 30.730061
      },
      "name": "Faqus",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.81332,
        "lat": 31.416479
      },
      "name": "Damietta",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.439251,
        "lat": 30.754219
      },
      "name": "Diyarb Najm",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.64649,
        "lat": 31.133051
      },
      "name": "Disuq",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.475979,
        "lat": 26.12467
      },
      "name": "Dishna",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.594271,
        "lat": 31.088711
      },
      "name": "Dikirnis",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.80764,
        "lat": 27.556021
      },
      "name": "Dayrut",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.846621,
        "lat": 27.64176
      },
      "name": "Dayr Mawas",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.469139,
        "lat": 31.039169
      },
      "name": "Damanhur",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.127331,
        "lat": 29.148161
      },
      "name": "Bush",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.284119,
        "lat": 31.25654
      },
      "name": "Port Said",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 33.936508,
        "lat": 26.729179
      },
      "name": "Bur Safajah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.357981,
        "lat": 31.21452
      },
      "name": "Bilqas Qism Awwal",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.562229,
        "lat": 30.420389
      },
      "name": "Bilbays",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.813379,
        "lat": 30.93976
      },
      "name": "Basyun",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.097851,
        "lat": 29.074409
      },
      "name": "Bani Suwayf",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.8004,
        "lat": 28.503599
      },
      "name": "Bani Mazar",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.178579,
        "lat": 30.459061
      },
      "name": "Banha",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.502001,
        "lat": 30.587681
      },
      "name": "Az Zaqaziq",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.13571,
        "lat": 30.12303
      },
      "name": "Awsim",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.78525,
        "lat": 30.544479
      },
      "name": "At Tall al Kabir",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.18368,
        "lat": 27.18096
      },
      "name": "Asyut",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.90704,
        "lat": 24.09343
      },
      "name": "Aswan",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.526272,
        "lat": 29.973709
      },
      "name": "Suez",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.281111,
        "lat": 29.56472
      },
      "name": "As Saff",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.89875,
        "lat": 30.59618
      },
      "name": "Ash Shuhada",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.976351,
        "lat": 30.298571
      },
      "name": "Ashmun",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.205561,
        "lat": 29.33778
      },
      "name": "Al Wasitah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.642101,
        "lat": 25.698931
      },
      "name": "Luxor",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.818411,
        "lat": 27.440201
      },
      "name": "Al Qusiyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 34.277931,
        "lat": 26.104259
      },
      "name": "Al Qusayr",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.73514,
        "lat": 30.61618
      },
      "name": "Al Qurayn",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.460991,
        "lat": 30.618799
      },
      "name": "Al Qanayat",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.13703,
        "lat": 30.19327
      },
      "name": "Al Qanatir al Khayriyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.24967,
        "lat": 30.06263
      },
      "name": "Cairo",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.750299,
        "lat": 28.10988
      },
      "name": "Al Minya",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.031078,
        "lat": 31.182871
      },
      "name": "Al Matariyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.937,
        "lat": 31.15815
      },
      "name": "Al Manzilah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.38069,
        "lat": 31.036369
      },
      "name": "Al Mansurah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.803499,
        "lat": 26.47686
      },
      "name": "Al Manshah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.164989,
        "lat": 30.974501
      },
      "name": "Al Mahallah al Kubra",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.36812,
        "lat": 30.21035
      },
      "name": "Al Khankah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.21093,
        "lat": 30.00808
      },
      "name": "Al Jizah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.865179,
        "lat": 31.180861
      },
      "name": "Al Jamaliyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.272251,
        "lat": 30.604271
      },
      "name": "Ismailia",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 29.955271,
        "lat": 31.215639
      },
      "name": "Alexandria",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.56299,
        "lat": 30.718769
      },
      "name": "Al Ibrahimiyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.25,
        "lat": 29.9
      },
      "name": "Al Hawamidiyah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.147659,
        "lat": 31.31146
      },
      "name": "Al Hamul",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 33.812908,
        "lat": 27.25738
      },
      "name": "Al Ghardaqah",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.841801,
        "lat": 29.30995
      },
      "name": "Al Fayyum",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.899481,
        "lat": 28.82431
      },
      "name": "Al Fashn",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 28.86591,
        "lat": 28.34919
      },
      "name": "Al Bawiti",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 32.003471,
        "lat": 26.23568
      },
      "name": "Al Balyana",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.03681,
        "lat": 30.43026
      },
      "name": "Al Bajur",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.415541,
        "lat": 26.992571
      },
      "name": "Al Badari",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.2575,
        "lat": 29.61972
      },
      "name": "Al Ayyat",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 33.798439,
        "lat": 31.13159
      },
      "name": "Al Arish",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.745029,
        "lat": 26.56217
      },
      "name": "Akhmim",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.29151,
        "lat": 30.94154
      },
      "name": "Aja",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.536329,
        "lat": 30.827909
      },
      "name": "Ad Dilinjat",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.31897,
        "lat": 27.044109
      },
      "name": "Abu Tij",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.838409,
        "lat": 27.9312
      },
      "name": "Abu Qurqas",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.67148,
        "lat": 30.72508
      },
      "name": "Abu Kabir",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 30.174379,
        "lat": 30.910179
      },
      "name": "Abu al Matamir",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 31.151051,
        "lat": 27.2696
      },
      "name": "Abnub",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 20.00528,
        "lat": 39.875561
      },
      "name": "Sarande",
      "country": "AL"
    },
    {
      "coord": {
        "lon": 23.47406,
        "lat": 12.9096
      },
      "name": "Zalingei",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 30.677919,
        "lat": 4.09504
      },
      "name": "Yei",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 28.395491,
        "lat": 4.57213
      },
      "name": "Yambio",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 27.9953,
        "lat": 7.70286
      },
      "name": "Wau",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 33.51989,
        "lat": 14.40118
      },
      "name": "Wad Medani",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 27.40019,
        "lat": 8.76816
      },
      "name": "Aweil",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 31.215799,
        "lat": 12.9061
      },
      "name": "Umm Ruwaba",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.47773,
        "lat": 15.64453
      },
      "name": "Omdurman",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.56778,
        "lat": 4.41333
      },
      "name": "Torit",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 28.68223,
        "lat": 7.27369
      },
      "name": "Tonj",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 37.729,
        "lat": 18.4254
      },
      "name": "Tokar",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 31.866671,
        "lat": 13.01667
      },
      "name": "Tandalti",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.933331,
        "lat": 13.15
      },
      "name": "Sinja",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.434101,
        "lat": 16.6915
      },
      "name": "Shendi",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 37.3321,
        "lat": 19.1059
      },
      "name": "Sawakin",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.567181,
        "lat": 13.56907
      },
      "name": "Sinnar",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 29.691231,
        "lat": 6.802
      },
      "name": "Rumbek",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 32.73999,
        "lat": 13.18087
      },
      "name": "Rabak",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 31.66048,
        "lat": 9.53342
      },
      "name": "Malakal",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 33.666672,
        "lat": 13.41667
      },
      "name": "Maiurno",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.663471,
        "lat": 13.1629
      },
      "name": "Kosti",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 31.85,
        "lat": 18.549999
      },
      "name": "Kuraymah",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.1712,
        "lat": 14.0361
      },
      "name": "Kinana",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 36.399979,
        "lat": 15.45099
      },
      "name": "Kassala",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 29.716669,
        "lat": 11.01667
      },
      "name": "Kadugli",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 31.58247,
        "lat": 4.85165
      },
      "name": "Juba",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 28.10037,
        "lat": 8.53324
      },
      "name": "Gogrial",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 32.482121,
        "lat": 3.86512
      },
      "name": "Pajok",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 35.76667,
        "lat": 13.51667
      },
      "name": "Doka",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 29.65,
        "lat": 12.05
      },
      "name": "Dilling",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 37.216438,
        "lat": 19.617451
      },
      "name": "Port Sudan",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 31.55633,
        "lat": 6.20593
      },
      "name": "Bor",
      "country": "SS"
    },
    {
      "coord": {
        "lon": 33.98299,
        "lat": 18.02158
      },
      "name": "Berber",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 30.366671,
        "lat": 13.7
      },
      "name": "Barah",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.986382,
        "lat": 17.702169
      },
      "name": "Atbara",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.883331,
        "lat": 13.31667
      },
      "name": "As Suki",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 34.386902,
        "lat": 11.8659
      },
      "name": "Ar Ruseris",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 30.65,
        "lat": 12.71667
      },
      "name": "Ar Rahad",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 28.433331,
        "lat": 12.7
      },
      "name": "An Nuhud",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 30.21669,
        "lat": 13.18421
      },
      "name": "El Obeid",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.366798,
        "lat": 14.8648
      },
      "name": "Al Qitena",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 27.73333,
        "lat": 11.03333
      },
      "name": "Al Mijlad",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.989101,
        "lat": 14.2459
      },
      "name": "Al Manaqil",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.53241,
        "lat": 15.55177
      },
      "name": "Khartoum",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 22.450001,
        "lat": 13.45
      },
      "name": "El Geneina",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.234001,
        "lat": 14.9398
      },
      "name": "Al Hilaliyya",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 34.633331,
        "lat": 13.41667
      },
      "name": "Al Hawatah",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.298359,
        "lat": 14.75264
      },
      "name": "Al Hasaheisa",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 25.34936,
        "lat": 13.62793
      },
      "name": "El Fasher",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.908119,
        "lat": 18.261959
      },
      "name": "El Bauga",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 32.3116,
        "lat": 14.0012
      },
      "name": "Ad Diwem",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 34.166672,
        "lat": 13.2
      },
      "name": "Ad Dindar",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 33.959171,
        "lat": 17.592779
      },
      "name": "Ed Damer",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 34.3592,
        "lat": 11.7891
      },
      "name": "Ad-Damazin",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 29.25,
        "lat": 12.35
      },
      "name": "Abu Zabad",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 31.2285,
        "lat": 11.4562
      },
      "name": "Abu Jibeha",
      "country": "SD"
    },
    {
      "coord": {
        "lon": 34.288231,
        "lat": 0.06116
      },
      "name": "Siaya",
      "country": "KE"
    },
    {
      "coord": {
        "lon": 50.555,
        "lat": 26.129999
      },
      "name": "Ar Rifa",
      "country": "BH"
    },
    {
      "coord": {
        "lon": 48.078609,
        "lat": 29.29583
      },
      "name": "Salwa",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 47.93306,
        "lat": 29.295
      },
      "name": "Ar Rabiyah",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 47.814911,
        "lat": 30.49721
      },
      "name": "Al Basrat al Qadimah",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 28.2225,
        "lat": 36.44083
      },
      "name": "Rodos",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 47.359711,
        "lat": 8.47738
      },
      "name": "Laascaanood",
      "country": "SO"
    },
    {
      "coord": {
        "lon": 51.535801,
        "lat": 35.3022
      },
      "name": "Eqbaliyeh",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 32.874722,
        "lat": 24.98028
      },
      "name": "Idfu",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 56.550079,
        "lat": 23.590509
      },
      "name": "Yanqul",
      "country": "OM"
    },
    {
      "coord": {
        "lon": 48.05722,
        "lat": 29.257219
      },
      "name": "Sabah as Salim",
      "country": "KW"
    },
    {
      "coord": {
        "lon": 45.036671,
        "lat": 12.77944
      },
      "name": "Aden",
      "country": "YE"
    },
    {
      "coord": {
        "lon": 51.87944,
        "lat": 32.03389
      },
      "name": "Shahreza",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.601292,
        "lat": 32.68462
      },
      "name": "Rehnan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.455002,
        "lat": 32.576698
      },
      "name": "Qahderijan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.366798,
        "lat": 32.634399
      },
      "name": "Najafabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.52113,
        "lat": 32.70018
      },
      "name": "Khomeyni Shahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.526299,
        "lat": 32.55603
      },
      "name": "Kelishad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.509739,
        "lat": 32.555302
      },
      "name": "Mollavarjan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.677608,
        "lat": 32.657219
      },
      "name": "Esfahan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.69553,
        "lat": 32.799782
      },
      "name": "Dowlatabad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 51.555561,
        "lat": 32.61528
      },
      "name": "Dorcheh Piaz",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 31.63554,
        "lat": 31.20829
      },
      "name": "Az Zarqa",
      "country": "EG"
    },
    {
      "coord": {
        "lon": 29.804001,
        "lat": -4.1348
      },
      "name": "Makamba",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.62438,
        "lat": -3.94877
      },
      "name": "Bururi",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.364401,
        "lat": -3.3822
      },
      "name": "Bujumbura",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.607901,
        "lat": -3.2682
      },
      "name": "Muramvya",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.930799,
        "lat": -3.4264
      },
      "name": "Gitega",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 30.24861,
        "lat": -3.47639
      },
      "name": "Ruyigi",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.830601,
        "lat": -2.9075
      },
      "name": "Ngozi",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.629299,
        "lat": -2.9221
      },
      "name": "Kayanza",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 30.3414,
        "lat": -2.8451
      },
      "name": "Muyinga",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 29.992001,
        "lat": -3.9279
      },
      "name": "Rutana",
      "country": "BI"
    },
    {
      "coord": {
        "lon": 36.229561,
        "lat": 36.649509
      },
      "name": "Denizciler",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.730831,
        "lat": 39.96833
      },
      "name": "Batikent",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.802799,
        "lat": 36.765911
      },
      "name": "Dalaman",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.87542,
        "lat": 36.320919
      },
      "name": "Sinjar",
      "country": "IQ"
    },
    {
      "coord": {
        "lon": 34.9925,
        "lat": 57.87944
      },
      "name": "Udomlya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 25.427509,
        "lat": 57.54108
      },
      "name": "Valmiera",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 21.56056,
        "lat": 57.389439
      },
      "name": "Ventspils",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 21.01667,
        "lat": 56.533329
      },
      "name": "Vec-Liepaja",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 23.155279,
        "lat": 56.966942
      },
      "name": "Tukums",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 24.36544,
        "lat": 56.860142
      },
      "name": "Salaspils",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 24.1,
        "lat": 56.950001
      },
      "name": "Riga",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 27.316669,
        "lat": 56.5
      },
      "name": "Rezekne",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 24.61401,
        "lat": 56.8162
      },
      "name": "Ogre",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 21.01667,
        "lat": 56.51667
      },
      "name": "Liepaja",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 23.77038,
        "lat": 56.967999
      },
      "name": "Jurmala",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 23.71278,
        "lat": 56.650002
      },
      "name": "Jelgava",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 25.857349,
        "lat": 56.499031
      },
      "name": "Jekabpils",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 26.533331,
        "lat": 55.883331
      },
      "name": "Daugavpils",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 25.274561,
        "lat": 57.311878
      },
      "name": "Cesis",
      "country": "LV"
    },
    {
      "coord": {
        "lon": 41.919861,
        "lat": 54.353691
      },
      "name": "Sasovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.122822,
        "lat": 48.02108
      },
      "name": "Zverevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.8475,
        "lat": 55.733334
      },
      "name": "Zvenigorod",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.650829,
        "lat": 55.171108
      },
      "name": "Zlatoust",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.463333,
        "lat": 47.148335
      },
      "name": "Zimovniki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.120277,
        "lat": 55.59528
      },
      "name": "Zhukovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.727982,
        "lat": 53.533951
      },
      "name": "Zhukovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.773472,
        "lat": 50.984482
      },
      "name": "Zhirnovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.495281,
        "lat": 53.399719
      },
      "name": "Zhigulevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.46056,
        "lat": 51.84861
      },
      "name": "Zherdevka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.019718,
        "lat": 44.139439
      },
      "name": "Zheleznovodsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.371101,
        "lat": 52.331001
      },
      "name": "Zheleznogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.004166,
        "lat": 55.750278
      },
      "name": "Zheleznodorozhnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.308338,
        "lat": 46.845181
      },
      "name": "Zernograd",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.880562,
        "lat": 44.40694
      },
      "name": "Zelenokumsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.181389,
        "lat": 55.982498
      },
      "name": "Zelenograd",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.517841,
        "lat": 55.843761
      },
      "name": "Zelenodolsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.589401,
        "lat": 43.85804
      },
      "name": "Zelenchukskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.393612,
        "lat": 56.642776
      },
      "name": "Zavolzhye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.192268,
        "lat": 53.20356
      },
      "name": "Zarechnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.88361,
        "lat": 54.765278
      },
      "name": "Zaraysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.813551,
        "lat": 69.415413
      },
      "name": "Zapolyarnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.06942,
        "lat": 55.3195
      },
      "name": "Zainsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.683334,
        "lat": 56.5
      },
      "name": "Yuryev-Polskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.890781,
        "lat": 56.638771
      },
      "name": "Yoshkar-Ola",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.279167,
        "lat": 46.698891
      },
      "name": "Yeysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.881302,
        "lat": 44.032799
      },
      "name": "Yessentukskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.860561,
        "lat": 44.044441
      },
      "name": "Yessentuki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.2766,
        "lat": 51.351299
      },
      "name": "Yershov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.85939,
        "lat": 62.589989
      },
      "name": "Yemva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.795799,
        "lat": 45.04446
      },
      "name": "Yelizavetinskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.50169,
        "lat": 52.623661
      },
      "name": "Yelets",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.737808,
        "lat": 50.949001
      },
      "name": "Yelan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.06493,
        "lat": 55.761269
      },
      "name": "Yelabuga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.041111,
        "lat": 55.378334
      },
      "name": "Yegoryevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.656212,
        "lat": 46.565639
      },
      "name": "Yegorlykskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.099239,
        "lat": 53.14806
      },
      "name": "Yefremov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.874199,
        "lat": 51.033298
      },
      "name": "Yasnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.697498,
        "lat": 54.480278
      },
      "name": "Yasnogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.696388,
        "lat": 55.066669
      },
      "name": "Yartsevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.873676,
        "lat": 57.629871
      },
      "name": "Yaroslavl",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.886108,
        "lat": 57.30331
      },
      "name": "Yaransk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.930859,
        "lat": 56.2719
      },
      "name": "Yanaul",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.943241,
        "lat": 44.98901
      },
      "name": "Yablonovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.564529,
        "lat": 57.591251
      },
      "name": "Vyshniy Volochek",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.659721,
        "lat": 45.579445
      },
      "name": "Vyselki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.174438,
        "lat": 55.317501
      },
      "name": "Vyksa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 28.752831,
        "lat": 60.70763
      },
      "name": "Vyborg",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.166672,
        "lat": 56.25
      },
      "name": "Vyazniki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.295078,
        "lat": 55.210388
      },
      "name": "Vyazma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 51.065571,
        "lat": 56.226021
      },
      "name": "Vyatskiye Polyany",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.637159,
        "lat": 60.020432
      },
      "name": "Vsevolozhsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.987171,
        "lat": 57.048649
      },
      "name": "Votkinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.811111,
        "lat": 55.400555
      },
      "name": "Vostryakovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.663612,
        "lat": 55.3125
      },
      "name": "Voskresensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.169998,
        "lat": 51.666389
      },
      "name": "Voronezh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.779732,
        "lat": 48.785831
      },
      "name": "Volzhskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.359402,
        "lat": 55.866379
      },
      "name": "Volzhsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.383331,
        "lat": 52.033329
      },
      "name": "Volsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.96944,
        "lat": 56.033611
      },
      "name": "Volokolamsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.888599,
        "lat": 59.2187
      },
      "name": "Vologda",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.338188,
        "lat": 59.9258
      },
      "name": "Volkhov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.155529,
        "lat": 57.439308
      },
      "name": "Volgorechensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.501839,
        "lat": 48.719391
      },
      "name": "Volgograd",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.15139,
        "lat": 47.513611
      },
      "name": "Volgodonsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.219166,
        "lat": 55.615002
      },
      "name": "Vnukovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.39658,
        "lat": 56.136551
      },
      "name": "Vladimir",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.667782,
        "lat": 43.036671
      },
      "name": "Vladikavkaz",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.70966,
        "lat": 55.552391
      },
      "name": "Vidnoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.930119,
        "lat": 57.212761
      },
      "name": "Vichuga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.655701,
        "lat": 58.078941
      },
      "name": "Vereshchagino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.268429,
        "lat": 54.355331
      },
      "name": "Venev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.098301,
        "lat": 61.070061
      },
      "name": "Velsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.310555,
        "lat": 60.764442
      },
      "name": "Velikiy Ustyug",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.54517,
        "lat": 56.34
      },
      "name": "Velikiye Luki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.106701,
        "lat": 50.203499
      },
      "name": "Valuyki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.252499,
        "lat": 57.974724
      },
      "name": "Valday",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.171181,
        "lat": 53.981789
      },
      "name": "Uzlovaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.261471,
        "lat": 51.984859
      },
      "name": "Uvarovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.185169,
        "lat": 56.99081
      },
      "name": "Uva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.68639,
        "lat": 45.212502
      },
      "name": "Ust-Labinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.165558,
        "lat": 54.936943
      },
      "name": "Ust-Katav",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.976299,
        "lat": 44.083401
      },
      "name": "Ust-Dzheguta",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.728802,
        "lat": 52.046619
      },
      "name": "Usman",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.013802,
        "lat": 50.804699
      },
      "name": "Uryupinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.54306,
        "lat": 43.128609
      },
      "name": "Urus-Martan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.673939,
        "lat": 52.845909
      },
      "name": "Unecha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.400002,
        "lat": 54.333332
      },
      "name": "Ulyanovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.683479,
        "lat": 63.567051
      },
      "name": "Ukhta",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.331669,
        "lat": 57.5275
      },
      "name": "Uglich",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.037498,
        "lat": 54.775002
      },
      "name": "Ufa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.511669,
        "lat": 43.937778
      },
      "name": "Uchkeken",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.452099,
        "lat": 54.299599
      },
      "name": "Uchaly",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.918331,
        "lat": 43.382778
      },
      "name": "Tyrnyauz",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.893059,
        "lat": 56.861938
      },
      "name": "Tver",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.709702,
        "lat": 54.606659
      },
      "name": "Tuymazy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.5406,
        "lat": 57.885288
      },
      "name": "Tutayev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.611111,
        "lat": 54.204441
      },
      "name": "Tula",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.468056,
        "lat": 55.601112
      },
      "name": "Tuchkovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.074165,
        "lat": 44.112499
      },
      "name": "Tuapse",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.10194,
        "lat": 47.646111
      },
      "name": "Tsimlyansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.7644,
        "lat": 52.5798
      },
      "name": "Trubchevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.978889,
        "lat": 43.305561
      },
      "name": "Troitskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.307362,
        "lat": 55.484982
      },
      "name": "Troitsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.877501,
        "lat": 59.540001
      },
      "name": "Tosno",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.962212,
        "lat": 57.043598
      },
      "name": "Torzhok",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.925278,
        "lat": 55.655277
      },
      "name": "Tomilino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.3461,
        "lat": 53.5303
      },
      "name": "Tolyatti",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.945278,
        "lat": 45.616943
      },
      "name": "Timashevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.529369,
        "lat": 59.645111
      },
      "name": "Tikhvin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.125278,
        "lat": 45.854721
      },
      "name": "Tikhoretsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.536919,
        "lat": 56.85796
      },
      "name": "Teykovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.136108,
        "lat": 43.48333
      },
      "name": "Terek",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.381111,
        "lat": 45.272221
      },
      "name": "Temryuk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.189999,
        "lat": 45.363331
      },
      "name": "Tbilisskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.433891,
        "lat": 52.73167
      },
      "name": "Tambov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.935501,
        "lat": 55.9077
      },
      "name": "Agidel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.896881,
        "lat": 47.236172
      },
      "name": "Taganrog",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.468102,
        "lat": 53.158501
      },
      "name": "Syzran",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.80994,
        "lat": 61.676418
      },
      "name": "Syktyvkar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.050282,
        "lat": 44.025558
      },
      "name": "Svobody",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 28.863211,
        "lat": 61.112129
      },
      "name": "Svetogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 20.134729,
        "lat": 54.675011
      },
      "name": "Svetlyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.854721,
        "lat": 45.335281
      },
      "name": "Svetlograd",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.653889,
        "lat": 44.194168
      },
      "name": "Suvorovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.496571,
        "lat": 54.122299
      },
      "name": "Suvorov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.84861,
        "lat": 48.607777
      },
      "name": "Surovikino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.901939,
        "lat": 43.1875
      },
      "name": "Surkhakhi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.342541,
        "lat": 54.099892
      },
      "name": "Sukhinichi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.070831,
        "lat": 54.900833
      },
      "name": "Stupino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.566666,
        "lat": 56.383331
      },
      "name": "Strunino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.483101,
        "lat": 50.785431
      },
      "name": "Stroitel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.95015,
        "lat": 53.624619
      },
      "name": "Sterlitamak",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.973331,
        "lat": 45.042778
      },
      "name": "Stavropol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.841667,
        "lat": 51.296665
      },
      "name": "Staryy Oskol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.674198,
        "lat": 46.6311
      },
      "name": "Staroshcherbinovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.049721,
        "lat": 46.529999
      },
      "name": "Starominskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.763329,
        "lat": 52.584438
      },
      "name": "Starodub",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 31.360809,
        "lat": 57.994389
      },
      "name": "Staraya Russa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.1805,
        "lat": 55.807991
      },
      "name": "Staraya Kupavna",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.958439,
        "lat": 57.584751
      },
      "name": "Sovetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 21.87851,
        "lat": 55.08392
      },
      "name": "Sovetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.116671,
        "lat": 59.900002
      },
      "name": "Sosnovyy Bor",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.881748,
        "lat": 63.602291
      },
      "name": "Sosnogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.69178,
        "lat": 61.705318
      },
      "name": "Sortavala",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.158298,
        "lat": 52.4338
      },
      "name": "Sorochinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.983334,
        "lat": 56.183334
      },
      "name": "Solnechnogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.99176,
        "lat": 51.163101
      },
      "name": "Sol-Iletsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.772888,
        "lat": 59.61956
      },
      "name": "Solikamsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.12056,
        "lat": 59.46167
      },
      "name": "Sokol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.966667,
        "lat": 56.150002
      },
      "name": "Sofrino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.730278,
        "lat": 43.599998
      },
      "name": "Sochi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.011108,
        "lat": 55.985531
      },
      "name": "Sobinka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.040001,
        "lat": 54.781666
      },
      "name": "Smolensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.177219,
        "lat": 58.73222
      },
      "name": "Slobodskoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.118057,
        "lat": 45.251945
      },
      "name": "Slavyansk-na-Kubani",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 28.09137,
        "lat": 59.118172
      },
      "name": "Slantsy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.550529,
        "lat": 53.82486
      },
      "name": "Skopin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.297222,
        "lat": 55.955833
      },
      "name": "Skhodnya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.6982,
        "lat": 54.993
      },
      "name": "Sim",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.665829,
        "lat": 52.71806
      },
      "name": "Sibay",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.388329,
        "lat": 56.848652
      },
      "name": "Shuya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.38167,
        "lat": 59.80917
      },
      "name": "Shushary",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.41288,
        "lat": 55.5005
      },
      "name": "Shumerlya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.025558,
        "lat": 45.12833
      },
      "name": "Mikhaylovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.874001,
        "lat": 54.3204
      },
      "name": "Shilovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.510658,
        "lat": 59.20998
      },
      "name": "Sheksna",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.913601,
        "lat": 50.409672
      },
      "name": "Shebekino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.90432,
        "lat": 51.875549
      },
      "name": "Shchigry",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.559719,
        "lat": 55.499722
      },
      "name": "Shcherbinka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.99139,
        "lat": 55.921665
      },
      "name": "Shchelkovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.51194,
        "lat": 54.009171
      },
      "name": "Shchekino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.536819,
        "lat": 55.572529
      },
      "name": "Shatura",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.514442,
        "lat": 58.36861
      },
      "name": "Sharya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.611359,
        "lat": 57.675789
      },
      "name": "Shakhunya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.214432,
        "lat": 47.70911
      },
      "name": "Shakhty",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.676861,
        "lat": 44.854069
      },
      "name": "Severskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.401718,
        "lat": 54.034809
      },
      "name": "Severo-Zadonsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.952049,
        "lat": 60.153278
      },
      "name": "Severouralsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.416222,
        "lat": 69.068893
      },
      "name": "Severomorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.8302,
        "lat": 64.563499
      },
      "name": "Severodvinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.963779,
        "lat": 60.098019
      },
      "name": "Sestroretsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.201651,
        "lat": 60.144402
      },
      "name": "Sertolovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.410831,
        "lat": 54.921391
      },
      "name": "Serpukhov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.133331,
        "lat": 56.299999
      },
      "name": "Sergiyev Posad",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.46611,
        "lat": 55.530788
      },
      "name": "Sergach",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.216888,
        "lat": 52.458611
      },
      "name": "Serdobsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.02787,
        "lat": 51.685261
      },
      "name": "Semiluki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.811199,
        "lat": 47.519428
      },
      "name": "Semikarakorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.49297,
        "lat": 56.787491
      },
      "name": "Semenov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.099998,
        "lat": 53.3675
      },
      "name": "Seltso",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.322182,
        "lat": 63.74147
      },
      "name": "Segezha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.040001,
        "lat": 55.0425
      },
      "name": "Satka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.323521,
        "lat": 54.935829
      },
      "name": "Sarov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.033333,
        "lat": 51.566666
      },
      "name": "Saratov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.797821,
        "lat": 56.47633
      },
      "name": "Sarapul",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.1749,
        "lat": 54.1838
      },
      "name": "Saransk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 51.786621,
        "lat": 51.786621
      },
      "name": "Saraktash",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.264168,
        "lat": 59.894444
      },
      "name": "Saint Petersburg",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.150002,
        "lat": 53.200001
      },
      "name": "Samara",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.542778,
        "lat": 46.4725
      },
      "name": "Salsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.90773,
        "lat": 53.383652
      },
      "name": "Salavat",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.216671,
        "lat": 55.150002
      },
      "name": "Safonovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.328171,
        "lat": 56.262409
      },
      "name": "Rzhev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.511944,
        "lat": 54.725555
      },
      "name": "Rybnoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.84259,
        "lat": 58.044601
      },
      "name": "Rybinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.110901,
        "lat": 53.7038
      },
      "name": "Ryazhsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.740002,
        "lat": 54.61972
      },
      "name": "Ryazan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.950901,
        "lat": 54.063869
      },
      "name": "Ruzayevka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.355831,
        "lat": 55.785557
      },
      "name": "Rublevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.787449,
        "lat": 52.26041
      },
      "name": "Rtishchevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.71389,
        "lat": 47.236389
      },
      "name": "Rostov-na-Donu",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.41394,
        "lat": 57.191399
      },
      "name": "Rostov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.5116,
        "lat": 51.120899
      },
      "name": "Rossosh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.567261,
        "lat": 50.19828
      },
      "name": "Rossosh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.863892,
        "lat": 53.952782
      },
      "name": "Roslavl",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.874882,
        "lat": 55.66853
      },
      "name": "Roshal",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.73048,
        "lat": 57.105129
      },
      "name": "Rodniki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.930279,
        "lat": 56.800968
      },
      "name": "Revda",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.861668,
        "lat": 55.759445
      },
      "name": "Reutov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.68462,
        "lat": 50.534389
      },
      "name": "Razumnoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.9468,
        "lat": 54.0658
      },
      "name": "Rayevskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.903332,
        "lat": 52.671391
      },
      "name": "Rasskazovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.059444,
        "lat": 44.048611
      },
      "name": "Pyatigorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.866669,
        "lat": 56.017223
      },
      "name": "Pushkino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.34046,
        "lat": 59.687328
      },
      "name": "Pushkin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.626389,
        "lat": 54.833889
      },
      "name": "Pushchino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 28.3496,
        "lat": 57.813599
      },
      "name": "Pskov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.217781,
        "lat": 54.86639
      },
      "name": "Protvino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.719166,
        "lat": 46.703056
      },
      "name": "Proletarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.029701,
        "lat": 43.757408
      },
      "name": "Prokhladnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.933331,
        "lat": 53.900002
      },
      "name": "Priyutovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.033333,
        "lat": 51.400002
      },
      "name": "Privolzhskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.288612,
        "lat": 57.380833
      },
      "name": "Privolzhsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.12907,
        "lat": 61.03928
      },
      "name": "Priozersk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.174702,
        "lat": 46.049702
      },
      "name": "Primorsko-Akhtarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.072701,
        "lat": 51.684059
      },
      "name": "Pridonskoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.245701,
        "lat": 51.1945
      },
      "name": "Povorino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.498058,
        "lat": 67.366112
      },
      "name": "Polyarnyye Zori",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.447781,
        "lat": 69.198891
      },
      "name": "Polyarnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.176945,
        "lat": 55.919998
      },
      "name": "Pokrov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.12738,
        "lat": 53.65237
      },
      "name": "Pokhvistnevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.170639,
        "lat": 60.91124
      },
      "name": "Podporozhye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.554722,
        "lat": 55.424179
      },
      "name": "Podolsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.4464,
        "lat": 52.933601
      },
      "name": "Pochep",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.291939,
        "lat": 53.709438
      },
      "name": "Plavsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.166389,
        "lat": 59.51833
      },
      "name": "Pikalevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.46104,
        "lat": 55.926392
      },
      "name": "Petushki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.346909,
        "lat": 61.784912
      },
      "name": "Petrozavodsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.39167,
        "lat": 52.306389
      },
      "name": "Petrovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.895832,
        "lat": 59.884998
      },
      "name": "Petrodvorets",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.802441,
        "lat": 58.593819
      },
      "name": "Pestovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.943611,
        "lat": 56.905281
      },
      "name": "Pervouralsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.285519,
        "lat": 58.01741
      },
      "name": "Perm",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.856258,
        "lat": 56.739342
      },
      "name": "Pereslavl-Zalesskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.004639,
        "lat": 53.200661
      },
      "name": "Penza",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.224388,
        "lat": 65.147163
      },
      "name": "Pechora",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.650555,
        "lat": 55.784721
      },
      "name": "Pavlovskiy Posad",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.785557,
        "lat": 46.132778
      },
      "name": "Pavlovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.108059,
        "lat": 50.457779
      },
      "name": "Pavlovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.10611,
        "lat": 45.023056
      },
      "name": "Pashkovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.883331,
        "lat": 50.049999
      },
      "name": "Pallasovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.550621,
        "lat": 54.859982
      },
      "name": "Ozery",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 51.3452,
        "lat": 53.375961
      },
      "name": "Otradnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.81806,
        "lat": 59.7775
      },
      "name": "Otradnoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.520561,
        "lat": 44.39333
      },
      "name": "Otradnaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 28.35368,
        "lat": 57.343948
      },
      "name": "Ostrov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.075619,
        "lat": 50.866402
      },
      "name": "Ostrogozhsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.107529,
        "lat": 57.146671
      },
      "name": "Ostashkov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.456692,
        "lat": 57.282879
      },
      "name": "Osa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.566849,
        "lat": 51.204868
      },
      "name": "Orsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.059166,
        "lat": 46.871387
      },
      "name": "Orlovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.098801,
        "lat": 51.772701
      },
      "name": "Orenburg",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.080276,
        "lat": 52.965832
      },
      "name": "Orel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.971943,
        "lat": 55.810833
      },
      "name": "Orekhovo-Zuyevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.052219,
        "lat": 43.32111
      },
      "name": "Ordzhonikidzevskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.14035,
        "lat": 63.906071
      },
      "name": "Onega",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.193199,
        "lat": 58.67001
      },
      "name": "Omutninsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.299999,
        "lat": 68.150002
      },
      "name": "Olenegorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.001671,
        "lat": 43.23806
      },
      "name": "Tsotsin-Yurt",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.471031,
        "lat": 54.481468
      },
      "name": "Oktyabrskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.277729,
        "lat": 55.677979
      },
      "name": "Odintsovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.7202,
        "lat": 57.89035
      },
      "name": "Ocher",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.610279,
        "lat": 55.096943
      },
      "name": "Obninsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.333969,
        "lat": 57.940418
      },
      "name": "Nytva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.19907,
        "lat": 61.669029
      },
      "name": "Nyandoma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.805111,
        "lat": 54.427662
      },
      "name": "Nurlat",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.869099,
        "lat": 50.7631
      },
      "name": "Novyy Oskol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 31.9275,
        "lat": 52.5396
      },
      "name": "Novozybkov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.217319,
        "lat": 51.30719
      },
      "name": "Novovoronezh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.143059,
        "lat": 50.459171
      },
      "name": "Novouzensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.389069,
        "lat": 54.149609
      },
      "name": "Novoulyanovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.326649,
        "lat": 51.203011
      },
      "name": "Novotroitsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.979168,
        "lat": 45.235558
      },
      "name": "Novotitarovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.93335,
        "lat": 47.760368
      },
      "name": "Novoshakhtinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.770832,
        "lat": 44.723888
      },
      "name": "Novorossiysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.700558,
        "lat": 45.951389
      },
      "name": "Novopokrovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.634171,
        "lat": 43.962219
      },
      "name": "Novopavlovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.284599,
        "lat": 54.010502
      },
      "name": "Novomoskovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.747898,
        "lat": 54.038399
      },
      "name": "Novomichurinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.946201,
        "lat": 53.095901
      },
      "name": "Novokuybyshevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.026699,
        "lat": 45.117001
      },
      "name": "Novokubansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.812199,
        "lat": 64.416496
      },
      "name": "Novodvinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.093887,
        "lat": 47.418056
      },
      "name": "Novocherkassk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.477551,
        "lat": 56.11095
      },
      "name": "Novocheboksarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.674702,
        "lat": 50.528702
      },
      "name": "Novoanninskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.220749,
        "lat": 45.494801
      },
      "name": "Novoaleksandrovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 31.283331,
        "lat": 58.51667
      },
      "name": "Velikiy Novgorod",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.40863,
        "lat": 51.641769
      },
      "name": "Novaya Usman",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.443802,
        "lat": 55.86647
      },
      "name": "Noginsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.811798,
        "lat": 58.629299
      },
      "name": "Nizhnyaya Tura",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.965,
        "lat": 57.919441
      },
      "name": "Nizhniy Tagil",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.002048,
        "lat": 56.328674
      },
      "name": "Nizhniy Novgorod",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.67664,
        "lat": 53.530411
      },
      "name": "Nizhniy Lomov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 51.824471,
        "lat": 55.63657
      },
      "name": "Nizhnekamsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.071178,
        "lat": 53.718861
      },
      "name": "Nikolsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.45953,
        "lat": 50.02824
      },
      "name": "Nikolayevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.221979,
        "lat": 69.412849
      },
      "name": "Nikel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.402779,
        "lat": 44.118061
      },
      "name": "Nezlobnaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.945278,
        "lat": 44.626667
      },
      "name": "Nevinnomyssk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.92844,
        "lat": 56.020939
      },
      "name": "Nevel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.050282,
        "lat": 43.238609
      },
      "name": "Nesterovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.574711,
        "lat": 57.458809
      },
      "name": "Nerekhta",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.777382,
        "lat": 56.221069
      },
      "name": "Nelidovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.916672,
        "lat": 44.666672
      },
      "name": "Neftekumsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.270321,
        "lat": 56.091991
      },
      "name": "Neftekamsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 51.166,
        "lat": 52.801998
      },
      "name": "Neftegorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.764999,
        "lat": 43.226109
      },
      "name": "Nazran",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.200279,
        "lat": 55.529171
      },
      "name": "Navashino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.086971,
        "lat": 67.671257
      },
      "name": "Naryan-Mar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.85083,
        "lat": 43.557499
      },
      "name": "Nartkala",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.73307,
        "lat": 55.38752
      },
      "name": "Naro-Fominsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.618889,
        "lat": 43.498058
      },
      "name": "Nalchik",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.181389,
        "lat": 55.851391
      },
      "name": "Nakhabino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.42889,
        "lat": 55.756111
      },
      "name": "Naberezhnyye Chelny",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.733891,
        "lat": 55.90889
      },
      "name": "Mytishchi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.041668,
        "lat": 55.565556
      },
      "name": "Murom",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.09251,
        "lat": 68.979172
      },
      "name": "Murmansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.573341,
        "lat": 53.276569
      },
      "name": "Mtsensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.227631,
        "lat": 56.444691
      },
      "name": "Mozhga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.027222,
        "lat": 55.501942
      },
      "name": "Mozhaysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.688061,
        "lat": 43.749168
      },
      "name": "Mozdok",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.79361,
        "lat": 44.41222
      },
      "name": "Mostovskoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.615555,
        "lat": 55.75222
      },
      "name": "Moscow",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.81065,
        "lat": 53.443539
      },
      "name": "Morshansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.826111,
        "lat": 48.353889
      },
      "name": "Morozovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.194443,
        "lat": 55.838055
      },
      "name": "Monino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.87389,
        "lat": 67.93972
      },
      "name": "Monchegorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.53598,
        "lat": 61.33289
      },
      "name": "Mirnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.135277,
        "lat": 44.210278
      },
      "name": "Mineralnyye Vody",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.396729,
        "lat": 48.922649
      },
      "name": "Millerovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.2379,
        "lat": 50.060001
      },
      "name": "Mikhaylovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.4907,
        "lat": 52.8978
      },
      "name": "Michurinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.547779,
        "lat": 59.800831
      },
      "name": "Metallostroy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.102581,
        "lat": 55.727058
      },
      "name": "Menzelinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.29047,
        "lat": 55.90818
      },
      "name": "Mendeleyevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.916672,
        "lat": 52.966671
      },
      "name": "Meleuz",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.629501,
        "lat": 55.334301
      },
      "name": "Melenki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.466667,
        "lat": 62.916668
      },
      "name": "Medvezhyegorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.025833,
        "lat": 45.453056
      },
      "name": "Medvedovskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.80405,
        "lat": 56.633881
      },
      "name": "Medvedevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.595001,
        "lat": 51.4128
      },
      "name": "Mednogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.105831,
        "lat": 44.60778
      },
      "name": "Maykop",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.748611,
        "lat": 51.711109
      },
      "name": "Marks",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.761944,
        "lat": 58.335278
      },
      "name": "Manturovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.471851,
        "lat": 55.014568
      },
      "name": "Maloyaroslavets",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.59306,
        "lat": 43.509171
      },
      "name": "Malgobek",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.02486,
        "lat": 55.647758
      },
      "name": "Malakhovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.502361,
        "lat": 42.976379
      },
      "name": "Makhachkala",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.047218,
        "lat": 53.41861
      },
      "name": "Magnitogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.447781,
        "lat": 53.86639
      },
      "name": "Lyudinovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.883331,
        "lat": 55.677776
      },
      "name": "Lyubertsy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.905834,
        "lat": 55.58139
      },
      "name": "Lytkarino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.805279,
        "lat": 58.108608
      },
      "name": "Lysva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.042198,
        "lat": 56.032822
      },
      "name": "Lyskovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.03611,
        "lat": 54.972778
      },
      "name": "Lukhovitsy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.84528,
        "lat": 58.737221
      },
      "name": "Luga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.200649,
        "lat": 55.869591
      },
      "name": "Losino-Petrovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.77253,
        "lat": 59.90612
      },
      "name": "Lomonosov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.553059,
        "lat": 60.726002
      },
      "name": "Lodeynoye Pole",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.481941,
        "lat": 56.00972
      },
      "name": "Lobnya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.606892,
        "lat": 52.425339
      },
      "name": "Livny",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.51545,
        "lat": 50.984051
      },
      "name": "Liski",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.570759,
        "lat": 52.603111
      },
      "name": "Lipetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.954445,
        "lat": 55.711666
      },
      "name": "Likino-Dulevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.2775,
        "lat": 51.630692
      },
      "name": "Lgovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.973331,
        "lat": 44.10667
      },
      "name": "Lermontov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.199444,
        "lat": 48.711945
      },
      "name": "Leninsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.460869,
        "lat": 54.602558
      },
      "name": "Leninogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.387699,
        "lat": 46.3214
      },
      "name": "Leningradskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.833328,
        "lat": 55.933331
      },
      "name": "Yubileyny",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.166389,
        "lat": 53.019421
      },
      "name": "Lebedyan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.333057,
        "lat": 43.906113
      },
      "name": "Lazarevskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.948479,
        "lat": 56.01931
      },
      "name": "Lakinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.735558,
        "lat": 44.634167
      },
      "name": "Labinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.536942,
        "lat": 43.662498
      },
      "name": "Dugulubgey",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.600368,
        "lat": 53.116749
      },
      "name": "Kuznetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.355202,
        "lat": 51.4781
      },
      "name": "Kuvandyk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.759171,
        "lat": 58.290562
      },
      "name": "Kushva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.638611,
        "lat": 46.556389
      },
      "name": "Kushchevskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.440559,
        "lat": 55.338329
      },
      "name": "Kusa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.19389,
        "lat": 51.730282
      },
      "name": "Kursk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.910831,
        "lat": 55.578335
      },
      "name": "Kurovskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.59861,
        "lat": 44.880001
      },
      "name": "Kurganinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.6521,
        "lat": 51.660099
      },
      "name": "Kurchatov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.0881,
        "lat": 43.201839
      },
      "name": "Kurchaloy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.959301,
        "lat": 57.436798
      },
      "name": "Kungur",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.783329,
        "lat": 52.76667
      },
      "name": "Kumertau",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.532501,
        "lat": 55.41333
      },
      "name": "Kulebaki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.894402,
        "lat": 56.185501
      },
      "name": "Kukmor",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.655998,
        "lat": 59.017288
      },
      "name": "Kudymkar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.689999,
        "lat": 55.583889
      },
      "name": "Kubinka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.197868,
        "lat": 56.147331
      },
      "name": "Kstovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.991169,
        "lat": 44.92934
      },
      "name": "Krymsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.575558,
        "lat": 45.4375
      },
      "name": "Kropotkin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 29.773611,
        "lat": 59.99361
      },
      "name": "Kronshtadt",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.07037,
        "lat": 47.892208
      },
      "name": "Krasnyy Sulin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.089439,
        "lat": 59.738331
      },
      "name": "Krasnoye Selo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.081989,
        "lat": 60.407829
      },
      "name": "Krasnovishersk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.766861,
        "lat": 56.60585
      },
      "name": "Krasnoufimsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.754108,
        "lat": 58.080158
      },
      "name": "Krasnokamsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.518612,
        "lat": 45.845554
      },
      "name": "Krasnogvardeyskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.318054,
        "lat": 55.822498
      },
      "name": "Krasnogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.976944,
        "lat": 45.03278
      },
      "name": "Krasnodar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.211712,
        "lat": 45.366138
      },
      "name": "Krasnoarmeyskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.133331,
        "lat": 56.099998
      },
      "name": "Krasnoarmeysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.696941,
        "lat": 51.023891
      },
      "name": "Krasnoarmeysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.57111,
        "lat": 56.336666
      },
      "name": "Kozmodemyansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.771591,
        "lat": 54.03746
      },
      "name": "Kozelsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.91386,
        "lat": 54.038761
      },
      "name": "Kovylkino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.319172,
        "lat": 56.35722
      },
      "name": "Kovrov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.47576,
        "lat": 67.566162
      },
      "name": "Kovdor",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.509441,
        "lat": 52.588612
      },
      "name": "Kotovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.801189,
        "lat": 50.321129
      },
      "name": "Kotovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.655556,
        "lat": 61.261112
      },
      "name": "Kotlas",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.146111,
        "lat": 47.631668
      },
      "name": "Kotelnikovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.844501,
        "lat": 55.63546
      },
      "name": "Kotelniki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.348,
        "lat": 58.308899
      },
      "name": "Kotelnich",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.934444,
        "lat": 57.770832
      },
      "name": "Kostroma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.57667,
        "lat": 64.570999
      },
      "name": "Kostomuksha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.54459,
        "lat": 54.118961
      },
      "name": "Kosaya Gora",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.16914,
        "lat": 61.314331
      },
      "name": "Koryazhma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.451942,
        "lat": 45.468613
      },
      "name": "Korenovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.09222,
        "lat": 47.582779
      },
      "name": "Konstantinovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 35.92778,
        "lat": 54.806389
      },
      "name": "Kondrovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.261379,
        "lat": 62.20565
      },
      "name": "Kondopoga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.766666,
        "lat": 56.700001
      },
      "name": "Konakovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.389999,
        "lat": 59.62056
      },
      "name": "Kommunar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.58856,
        "lat": 59.75069
      },
      "name": "Kolpino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.778332,
        "lat": 55.079441
      },
      "name": "Kolomna",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.383331,
        "lat": 56.299999
      },
      "name": "Kolchugino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.091499,
        "lat": 56.93486
      },
      "name": "Kokhma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.239342,
        "lat": 52.760189
      },
      "name": "Klintsy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.73333,
        "lat": 56.333328
      },
      "name": "Klin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.525002,
        "lat": 55.364723
      },
      "name": "Klimovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.715,
        "lat": 43.846939
      },
      "name": "Kizlyar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.867901,
        "lat": 43.20697
      },
      "name": "Kizilyurt",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.647671,
        "lat": 59.047089
      },
      "name": "Kizel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.720829,
        "lat": 43.91333
      },
      "name": "Kislovodsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.866669,
        "lat": 56.150002
      },
      "name": "Kirzhach",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.722359,
        "lat": 52.654942
      },
      "name": "Kirsanov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.672741,
        "lat": 67.614754
      },
      "name": "Kirovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.99507,
        "lat": 59.881008
      },
      "name": "Kirovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.03986,
        "lat": 58.55386
      },
      "name": "Kirovo-Chepetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.660069,
        "lat": 58.596649
      },
      "name": "Kirov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.299549,
        "lat": 54.06686
      },
      "name": "Kirov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.020489,
        "lat": 59.447121
      },
      "name": "Kirishi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.927921,
        "lat": 53.933609
      },
      "name": "Kireyevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 28.61343,
        "lat": 59.37331
      },
      "name": "Kingisepp",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.128941,
        "lat": 57.43914
      },
      "name": "Kineshma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 51.4743,
        "lat": 53.4706
      },
      "name": "Kinel-Cherkassy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.650002,
        "lat": 53.23333
      },
      "name": "Kinel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.349998,
        "lat": 56.866669
      },
      "name": "Kimry",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.53186,
        "lat": 53.971642
      },
      "name": "Kimovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.995441,
        "lat": 56.256989
      },
      "name": "Khotkovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.868889,
        "lat": 43.514721
      },
      "name": "Khosta",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.384998,
        "lat": 44.846939
      },
      "name": "Kholmskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.4375,
        "lat": 55.901669
      },
      "name": "Khimki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.588058,
        "lat": 43.25
      },
      "name": "Khasavyurt",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.256779,
        "lat": 47.419579
      },
      "name": "Kharabali",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.531944,
        "lat": 44.425556
      },
      "name": "Khadyzhensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.122139,
        "lat": 55.788738
      },
      "name": "Kazan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.19556,
        "lat": 54.753059
      },
      "name": "Katav-Ivanovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.639191,
        "lat": 42.881649
      },
      "name": "Kaspiysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.395279,
        "lat": 54.941113
      },
      "name": "Kasimov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.166939,
        "lat": 54.84444
      },
      "name": "Kashira",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.608059,
        "lat": 57.359169
      },
      "name": "Kashin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.985168,
        "lat": 53.122921
      },
      "name": "Karachev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.914188,
        "lat": 43.773991
      },
      "name": "Karachayevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.896389,
        "lat": 43.303612
      },
      "name": "Karabulak",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.700001,
        "lat": 56.316666
      },
      "name": "Karabanovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.638062,
        "lat": 43.226391
      },
      "name": "Kantyshevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.959599,
        "lat": 46.0849
      },
      "name": "Kanevskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 32.412289,
        "lat": 67.162003
      },
      "name": "Kandalaksha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.49556,
        "lat": 55.50861
      },
      "name": "Kanash",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.073639,
        "lat": 46.109951
      },
      "name": "Kamyzyak",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.416012,
        "lat": 50.098331
      },
      "name": "Kamyshin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.25948,
        "lat": 48.317791
      },
      "name": "Kamensk-Shakhtinskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.275421,
        "lat": 54.529301
      },
      "name": "Kaluga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.4758,
        "lat": 51.5
      },
      "name": "Kalininsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.825562,
        "lat": 55.914169
      },
      "name": "Korolev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 20.51095,
        "lat": 54.70649
      },
      "name": "Kaliningrad",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.526379,
        "lat": 48.69099
      },
      "name": "Kalach-na-Donu",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.0261,
        "lat": 50.4258
      },
      "name": "Kalach",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.49482,
        "lat": 58.699989
      },
      "name": "Kachkanar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.23333,
        "lat": 56.849998
      },
      "name": "Izhevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.864471,
        "lat": 42.56955
      },
      "name": "Izberbash",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.92083,
        "lat": 55.971111
      },
      "name": "Ivanteyevka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.985832,
        "lat": 56.994167
      },
      "name": "Ivanovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.864166,
        "lat": 55.917778
      },
      "name": "Istra",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.041489,
        "lat": 53.45446
      },
      "name": "Ishimbay",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.90361,
        "lat": 45.71806
      },
      "name": "Ipatovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.358612,
        "lat": 53.853333
      },
      "name": "Inza",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.091129,
        "lat": 44.09264
      },
      "name": "Inozemtsevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.56686,
        "lat": 44.84222
      },
      "name": "Ilskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.054722,
        "lat": 57.555828
      },
      "name": "Igra",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.651859,
        "lat": 55.61113
      },
      "name": "Gus-Khrustalnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 22.19972,
        "lat": 54.59222
      },
      "name": "Gusev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.694649,
        "lat": 45.353828
      },
      "name": "Gulkevichi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.93111,
        "lat": 48.053059
      },
      "name": "Gukovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.105282,
        "lat": 43.356941
      },
      "name": "Gudermes",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.54583,
        "lat": 51.28167
      },
      "name": "Gubkin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.553249,
        "lat": 58.838619
      },
      "name": "Gubakha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.252499,
        "lat": 58.880001
      },
      "name": "Gryazovets",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.935928,
        "lat": 52.496571
      },
      "name": "Gryazi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.700279,
        "lat": 43.308331
      },
      "name": "Groznyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.97636,
        "lat": 51.45792
      },
      "name": "Gribanovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.130001,
        "lat": 44.630833
      },
      "name": "Goryachiy Klyuch",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.09222,
        "lat": 44.023609
      },
      "name": "Goryachevodskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.474388,
        "lat": 48.804539
      },
      "name": "Gorodishche",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.474998,
        "lat": 56.65139
      },
      "name": "Gorodets",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.983334,
        "lat": 55.612221
      },
      "name": "Golitsyno",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.658421,
        "lat": 58.139408
      },
      "name": "Glazov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.071949,
        "lat": 44.86208
      },
      "name": "Giaginskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.469719,
        "lat": 44.151939
      },
      "name": "Georgiyevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.074722,
        "lat": 44.573055
      },
      "name": "Gelendzhik",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.4552,
        "lat": 51.466599
      },
      "name": "Gay",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.85331,
        "lat": 57.301849
      },
      "name": "Gavrilov-Yam",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 30.12833,
        "lat": 59.576389
      },
      "name": "Gatchina",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.3475,
        "lat": 58.379723
      },
      "name": "Galich",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.995369,
        "lat": 55.55291
      },
      "name": "Gagarin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.105831,
        "lat": 57.250832
      },
      "name": "Furmanov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.045555,
        "lat": 55.960556
      },
      "name": "Fryazino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.462776,
        "lat": 55.731945
      },
      "name": "Fryazevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.66222,
        "lat": 49.771332
      },
      "name": "Frolovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.72834,
        "lat": 61.812809
      },
      "name": "Ezhva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.116669,
        "lat": 51.5
      },
      "name": "Engels",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.90852,
        "lat": 44.927101
      },
      "name": "Enem",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.255829,
        "lat": 46.307781
      },
      "name": "Elista",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.207779,
        "lat": 55.71722
      },
      "name": "Elektrougli",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.442223,
        "lat": 55.791943
      },
      "name": "Elektrostal",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.791943,
        "lat": 55.879444
      },
      "name": "Elektrogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.823059,
        "lat": 43.212219
      },
      "name": "Ekazhevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.846943,
        "lat": 55.628613
      },
      "name": "Dzerzhinskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.463058,
        "lat": 56.238892
      },
      "name": "Dzerzhinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.868832,
        "lat": 55.491058
      },
      "name": "Dyurtyuli",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.338249,
        "lat": 53.59782
      },
      "name": "Dyatkovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.828999,
        "lat": 49.05825
      },
      "name": "Dubovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.166668,
        "lat": 56.733334
      },
      "name": "Dubna",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.97411,
        "lat": 45.455181
      },
      "name": "Donskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.336269,
        "lat": 53.971062
      },
      "name": "Donskoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.947762,
        "lat": 48.333721
      },
      "name": "Donetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.758331,
        "lat": 55.442223
      },
      "name": "Domodedovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.560638,
        "lat": 55.90411
      },
      "name": "Dolgoprudnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.416458,
        "lat": 58.461948
      },
      "name": "Dobryanka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.516666,
        "lat": 56.349998
      },
      "name": "Dmitrov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.354721,
        "lat": 45.90889
      },
      "name": "Divnoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.228329,
        "lat": 45.217819
      },
      "name": "Dinskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.618378,
        "lat": 54.21386
      },
      "name": "Dimitrovgrad",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.281509,
        "lat": 54.150768
      },
      "name": "Desnogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.289871,
        "lat": 42.067799
      },
      "name": "Derbent",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.122219,
        "lat": 55.86861
      },
      "name": "Dedovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.03434,
        "lat": 54.221451
      },
      "name": "Davlekanovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.155529,
        "lat": 53.251549
      },
      "name": "Dankov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.171711,
        "lat": 58.1908
      },
      "name": "Danilov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.192039,
        "lat": 42.115891
      },
      "name": "Dagestanskiye Ogni",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.813099,
        "lat": 58.3013
      },
      "name": "Chusovoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 31.683331,
        "lat": 59.116669
      },
      "name": "Chudovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 50.642441,
        "lat": 55.36311
      },
      "name": "Chistopol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.376419,
        "lat": 54.576481
      },
      "name": "Chishmy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.806931,
        "lat": 50.940948
      },
      "name": "Chernyanka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 21.815571,
        "lat": 54.63345
      },
      "name": "Chernyakhovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.076611,
        "lat": 56.507221
      },
      "name": "Chernushka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.366669,
        "lat": 56.0
      },
      "name": "Chernogolovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.057781,
        "lat": 44.223331
      },
      "name": "Cherkessk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.900002,
        "lat": 59.133331
      },
      "name": "Cherepovets",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.471111,
        "lat": 55.143055
      },
      "name": "Chekhov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.133331,
        "lat": 43.283329
      },
      "name": "Chegem",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.251942,
        "lat": 56.132221
      },
      "name": "Cheboksary",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.114841,
        "lat": 56.768639
      },
      "name": "Chaykovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.708599,
        "lat": 52.9771
      },
      "name": "Chapayevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.2635,
        "lat": 52.780701
      },
      "name": "Buzuluk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.119202,
        "lat": 42.819
      },
      "name": "Buynaksk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.529999,
        "lat": 58.478611
      },
      "name": "Buy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.609169,
        "lat": 50.823891
      },
      "name": "Buturlinovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.283329,
        "lat": 54.950001
      },
      "name": "Buinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.442001,
        "lat": 53.655399
      },
      "name": "Buguruslan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.799999,
        "lat": 54.549999
      },
      "name": "Bugulma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.165829,
        "lat": 44.78389
      },
      "name": "Budennovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.999592,
        "lat": 45.80603
      },
      "name": "Bryukhovetskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.380562,
        "lat": 53.287498
      },
      "name": "Bryansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.270832,
        "lat": 55.419445
      },
      "name": "Bronnitsy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.915459,
        "lat": 58.387779
      },
      "name": "Borovichi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 42.084942,
        "lat": 51.36713
      },
      "name": "Borisoglebsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.066944,
        "lat": 56.356667
      },
      "name": "Bor",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 34.1068,
        "lat": 57.879902
      },
      "name": "Bologoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.84853,
        "lat": 59.474049
      },
      "name": "Boksitogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.544998,
        "lat": 49.935768
      },
      "name": "Boguchar",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.515831,
        "lat": 56.103329
      },
      "name": "Bogorodsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.124081,
        "lat": 53.77166
      },
      "name": "Bogoroditsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.033329,
        "lat": 51.096111
      },
      "name": "Bobrov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.978062,
        "lat": 55.035
      },
      "name": "Blagoveshchensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.43639,
        "lat": 45.097778
      },
      "name": "Blagodarnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 55.542782,
        "lat": 55.421108
      },
      "name": "Birsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.69651,
        "lat": 57.785061
      },
      "name": "Bezhetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.4333,
        "lat": 52.981998
      },
      "name": "Bezenchuk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.543129,
        "lat": 43.192169
      },
      "name": "Beslan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 56.81237,
        "lat": 59.415192
      },
      "name": "Berezniki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.39806,
        "lat": 53.963058
      },
      "name": "Beloretsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.869999,
        "lat": 44.759998
      },
      "name": "Belorechensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.443581,
        "lat": 55.459782
      },
      "name": "Beloozerskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.580002,
        "lat": 50.610001
      },
      "name": "Belgorod",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.131939,
        "lat": 53.811939
      },
      "name": "Belev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 54.116669,
        "lat": 54.116669
      },
      "name": "Belebey",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.779999,
        "lat": 48.169998
      },
      "name": "Belaya Kalitva",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.860001,
        "lat": 46.07
      },
      "name": "Belaya Glina",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.322498,
        "lat": 52.59333
      },
      "name": "Baymak",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.260231,
        "lat": 54.39304
      },
      "name": "Bavly",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.751808,
        "lat": 47.139751
      },
      "name": "Bataysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.112289,
        "lat": 53.655331
      },
      "name": "Barysh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.010571,
        "lat": 57.97963
      },
      "name": "Balezino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.166698,
        "lat": 51.550201
      },
      "name": "Balashov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.958061,
        "lat": 55.809448
      },
      "name": "Balashikha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 47.800701,
        "lat": 52.027821
      },
      "name": "Balakovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.591942,
        "lat": 56.490559
      },
      "name": "Novaya Balakhna",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 36.660599,
        "lat": 55.18161
      },
      "name": "Balabanovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.536942,
        "lat": 43.688061
      },
      "name": "Baksan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.8083,
        "lat": 54.9417
      },
      "name": "Bakal",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.380001,
        "lat": 47.32
      },
      "name": "Bagayevskaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.416481,
        "lat": 47.107792
      },
      "name": "Azov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.0,
        "lat": 43.16
      },
      "name": "Avtury",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.007751,
        "lat": 51.871849
      },
      "name": "Atkarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.04076,
        "lat": 46.349682
      },
      "name": "Astrakhan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.272202,
        "lat": 54.997299
      },
      "name": "Asha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.220558,
        "lat": 45.37278
      },
      "name": "Arzgir",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.83992,
        "lat": 55.394852
      },
      "name": "Arzamas",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.877831,
        "lat": 56.091511
      },
      "name": "Arsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 41.123402,
        "lat": 44.989201
      },
      "name": "Armavir",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.543301,
        "lat": 64.5401
      },
      "name": "Arkhangelsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.869999,
        "lat": 43.290001
      },
      "name": "Argun",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.290001,
        "lat": 43.169998
      },
      "name": "Ardon",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.73,
        "lat": 44.459999
      },
      "name": "Apsheronsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.080101,
        "lat": 55.551941
      },
      "name": "Aprelevka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 33.403099,
        "lat": 67.56414
      },
      "name": "Apatity",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.429901,
        "lat": 51.4842
      },
      "name": "Anna",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.323898,
        "lat": 44.890839
      },
      "name": "Anapa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.315399,
        "lat": 54.904419
      },
      "name": "Almetyevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.080002,
        "lat": 54.509998
      },
      "name": "Aleksin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.6903,
        "lat": 50.630901
      },
      "name": "Alekseyevka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.000832,
        "lat": 44.714169
      },
      "name": "Aleksandrovskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.562408,
        "lat": 59.158039
      },
      "name": "Aleksandrovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.709999,
        "lat": 56.400002
      },
      "name": "Aleksandrov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.581299,
        "lat": 54.842098
      },
      "name": "Alatyr",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.869999,
        "lat": 47.259998
      },
      "name": "Aksay",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.303101,
        "lat": 44.854599
      },
      "name": "Akhtyrskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.172169,
        "lat": 48.279549
      },
      "name": "Akhtubinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 52.994221,
        "lat": 56.52034
      },
      "name": "Agryz",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.843929,
        "lat": 44.902119
      },
      "name": "Afipskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.919998,
        "lat": 43.43
      },
      "name": "Adler",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.279999,
        "lat": 43.189999
      },
      "name": "Achkhoy-Martan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.16111,
        "lat": 44.872581
      },
      "name": "Abinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 53.666672,
        "lat": 53.700001
      },
      "name": "Abdulino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.64333,
        "lat": 41.63361
      },
      "name": "Zaqatala",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.941582,
        "lat": 40.476101
      },
      "name": "Zabrat",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.150139,
        "lat": 40.61832
      },
      "name": "Yevlakh",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 46.31583,
        "lat": 40.586941
      },
      "name": "Xanlar",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.806049,
        "lat": 41.46349
      },
      "name": "Xacmaz",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.654228,
        "lat": 40.51902
      },
      "name": "Ujar",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 46.92889,
        "lat": 40.345001
      },
      "name": "Terter",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.66861,
        "lat": 40.589722
      },
      "name": "Sumqayit",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.97361,
        "lat": 40.396671
      },
      "name": "Qaracuxur",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 46.01889,
        "lat": 40.82972
      },
      "name": "Shamkhor",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.641369,
        "lat": 40.631409
      },
      "name": "Shamakhi",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.170559,
        "lat": 41.19194
      },
      "name": "Sheki",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.948059,
        "lat": 40.442501
      },
      "name": "Sabuncu",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.475151,
        "lat": 40.00946
      },
      "name": "Sabirabad",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.428928,
        "lat": 41.42728
      },
      "name": "Qusar",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.51519,
        "lat": 41.362591
      },
      "name": "Quba",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.944511,
        "lat": 40.04084
      },
      "name": "Haciqabul",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 45.366112,
        "lat": 41.09333
      },
      "name": "Qazax",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.558609,
        "lat": 40.623329
      },
      "name": "Haci Zeynalabdin",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.059528,
        "lat": 40.76395
      },
      "name": "Mingelchaur",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 50.003891,
        "lat": 40.53278
      },
      "name": "Mastaga",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 50.138889,
        "lat": 40.492222
      },
      "name": "Mardakyany",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.728039,
        "lat": 40.323719
      },
      "name": "Lokbatan",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.740559,
        "lat": 40.653061
      },
      "name": "Geoktschai",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 50.085281,
        "lat": 40.374439
      },
      "name": "Hovsan",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 46.360561,
        "lat": 40.682781
      },
      "name": "Ganja",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 50.113899,
        "lat": 40.517891
      },
      "name": "Buzovna",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 50.08564,
        "lat": 40.451931
      },
      "name": "Biny Selo",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.126671,
        "lat": 40.374439
      },
      "name": "Barda",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.80566,
        "lat": 40.444401
      },
      "name": "Bilajari",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.89201,
        "lat": 40.37767
      },
      "name": "Baku",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 49.983608,
        "lat": 40.426392
      },
      "name": "Amirdzhan",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 48.400871,
        "lat": 40.570278
      },
      "name": "Aghsu",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.476109,
        "lat": 40.650002
      },
      "name": "Agdas",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 47.461391,
        "lat": 40.05278
      },
      "name": "Agdzhabedy",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 25.59,
        "lat": 58.363892
      },
      "name": "Viljandi",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 26.72509,
        "lat": 58.380619
      },
      "name": "Tartu",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 24.753531,
        "lat": 59.436958
      },
      "name": "Tallinn",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 27.754721,
        "lat": 59.399719
      },
      "name": "Sillamae",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 26.355829,
        "lat": 59.34639
      },
      "name": "Rakvere",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 24.49711,
        "lat": 58.38588
      },
      "name": "Parnu",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 28.190281,
        "lat": 59.37722
      },
      "name": "Narva",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 25.025,
        "lat": 59.476669
      },
      "name": "Maardu",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 27.27306,
        "lat": 59.398609
      },
      "name": "Kohtla-Jarve",
      "country": "EE"
    },
    {
      "coord": {
        "lon": 26.41667,
        "lat": 55.599998
      },
      "name": "Visaginas",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 25.2798,
        "lat": 54.689159
      },
      "name": "Vilnius",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 25.6,
        "lat": 55.5
      },
      "name": "Utena",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 24.75,
        "lat": 55.25
      },
      "name": "Ukmerge",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 22.247219,
        "lat": 55.981392
      },
      "name": "Telsiai",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 22.289721,
        "lat": 55.25222
      },
      "name": "Taurage",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 21.483061,
        "lat": 55.348888
      },
      "name": "Silute",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 23.316669,
        "lat": 55.933331
      },
      "name": "Siauliai",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 25.58333,
        "lat": 55.966671
      },
      "name": "Rokiskis",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 23.533331,
        "lat": 55.816669
      },
      "name": "Radviliskis",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 21.84417,
        "lat": 55.911388
      },
      "name": "Plunge",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 24.35,
        "lat": 55.73333
      },
      "name": "Panevezys",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 21.068609,
        "lat": 55.9175
      },
      "name": "Palanga",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 22.33333,
        "lat": 56.316669
      },
      "name": "Mazeikiai",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 23.35,
        "lat": 54.566669
      },
      "name": "Marijampole",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 21.25083,
        "lat": 55.875832
      },
      "name": "Kretinga",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 21.1175,
        "lat": 55.71722
      },
      "name": "Klaipeda",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 23.97472,
        "lat": 55.28833
      },
      "name": "Kedainiai",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 23.9,
        "lat": 54.900002
      },
      "name": "Kaunas",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 24.283331,
        "lat": 55.083328
      },
      "name": "Jonava",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 21.40333,
        "lat": 55.71278
      },
      "name": "Gargzdai",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 23.966669,
        "lat": 54.01667
      },
      "name": "Druskininkai",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 24.049999,
        "lat": 54.400002
      },
      "name": "Alytus",
      "country": "LT"
    },
    {
      "coord": {
        "lon": 59.610279,
        "lat": 42.45306
      },
      "name": "Nukus",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 59.460049,
        "lat": 42.400429
      },
      "name": "Khujayli",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 58.903721,
        "lat": 43.068741
      },
      "name": "Oltinkol",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 59.916401,
        "lat": 41.65041
      },
      "name": "Tagta",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 52.955181,
        "lat": 40.02216
      },
      "name": "Turkmenbasy",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 59.154419,
        "lat": 42.327728
      },
      "name": "Koeneuergench",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 59.671009,
        "lat": 42.128239
      },
      "name": "Boldumsaz",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 59.966621,
        "lat": 41.83625
      },
      "name": "Dasoguz",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 20.25972,
        "lat": 63.828419
      },
      "name": "Umea",
      "country": "SE"
    },
    {
      "coord": {
        "lon": 20.952789,
        "lat": 64.750671
      },
      "name": "Skelleftea",
      "country": "SE"
    },
    {
      "coord": {
        "lon": 21.479441,
        "lat": 65.317169
      },
      "name": "Pitea",
      "country": "SE"
    },
    {
      "coord": {
        "lon": 22.15465,
        "lat": 65.584152
      },
      "name": "Lulea",
      "country": "SE"
    },
    {
      "coord": {
        "lon": 20.22513,
        "lat": 67.855721
      },
      "name": "Kiruna",
      "country": "SE"
    },
    {
      "coord": {
        "lon": 21.688641,
        "lat": 65.82518
      },
      "name": "Boden",
      "country": "SE"
    },
    {
      "coord": {
        "lon": 51.366669,
        "lat": 51.233334
      },
      "name": "Oral",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 57.423328,
        "lat": 49.474442
      },
      "name": "Oktyabrsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 54.019779,
        "lat": 46.953072
      },
      "name": "Qulsary",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 58.434719,
        "lat": 50.250278
      },
      "name": "Khromtau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 54.866669,
        "lat": 50.066669
      },
      "name": "Karagandy",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 58.144169,
        "lat": 48.826389
      },
      "name": "Embi",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 51.866669,
        "lat": 47.066669
      },
      "name": "Balyqshy",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 51.883331,
        "lat": 47.116669
      },
      "name": "Atyrau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 57.20718,
        "lat": 50.27969
      },
      "name": "Aqtobe",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 51.200001,
        "lat": 43.650002
      },
      "name": "Aktau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 52.994999,
        "lat": 51.167782
      },
      "name": "Aqsay",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 41.87088,
        "lat": 42.508801
      },
      "name": "Zugdidi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 43.052502,
        "lat": 42.110001
      },
      "name": "Zestaponi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 48.658199,
        "lat": 55.83596
      },
      "name": "Vasilyevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.968609,
        "lat": 42.227638
      },
      "name": "Tskhinvali",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 41.680069,
        "lat": 42.840351
      },
      "name": "Tqvarcheli",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 45.473148,
        "lat": 41.919781
      },
      "name": "Telavi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 44.833679,
        "lat": 41.694111
      },
      "name": "Tbilisi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 41.015278,
        "lat": 43.003334
      },
      "name": "Sokhumi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 42.067501,
        "lat": 42.27042
      },
      "name": "Senaki",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 42.335171,
        "lat": 42.153702
      },
      "name": "Samtredia",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 44.993229,
        "lat": 41.549492
      },
      "name": "Rustavi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 41.67197,
        "lat": 42.14616
      },
      "name": "Poti",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 41.468632,
        "lat": 42.712318
      },
      "name": "Ochamchire",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 44.808941,
        "lat": 41.47588
      },
      "name": "Marneuli",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 34.484901,
        "lat": 50.585178
      },
      "name": "Lebedyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 42.699741,
        "lat": 42.249611
      },
      "name": "Kutaisi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 41.77528,
        "lat": 41.82
      },
      "name": "Kobuleti",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 43.599941,
        "lat": 41.994141
      },
      "name": "Khashuri",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 44.11578,
        "lat": 41.984219
      },
      "name": "Gori",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 41.635929,
        "lat": 41.64159
      },
      "name": "Batumi",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 42.98262,
        "lat": 41.639011
      },
      "name": "Akhaltsikhe",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 40.838333,
        "lat": 43.080555
      },
      "name": "Stantsiya Novyy Afon",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 44.513611,
        "lat": 40.18111
      },
      "name": "Yerevan",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.294621,
        "lat": 40.165569
      },
      "name": "Ejmiatsin",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.2673,
        "lat": 40.832199
      },
      "name": "Spitak",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.948681,
        "lat": 40.548401
      },
      "name": "Sevan",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.435909,
        "lat": 40.067619
      },
      "name": "Masis",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.4939,
        "lat": 40.804562
      },
      "name": "Vanadzor",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 45.123859,
        "lat": 40.353981
      },
      "name": "Gavarr",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.766201,
        "lat": 40.497478
      },
      "name": "Hrazdan",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.038151,
        "lat": 40.154461
      },
      "name": "Armavir",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 43.84528,
        "lat": 40.794201
      },
      "name": "Gyumri",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 37.552589,
        "lat": 48.630131
      },
      "name": "Druzhkovka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 44.362041,
        "lat": 40.299099
      },
      "name": "Ashtarak",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 44.62656,
        "lat": 40.26741
      },
      "name": "Abovyan",
      "country": "AM"
    },
    {
      "coord": {
        "lon": 27.305,
        "lat": 48.16806
      },
      "name": "Edinet",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 27.79583,
        "lat": 47.20417
      },
      "name": "Ungheni",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 29.64333,
        "lat": 46.840279
      },
      "name": "Tiraspol",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.610279,
        "lat": 47.141392
      },
      "name": "Straseni",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.04722,
        "lat": 47.656391
      },
      "name": "Bilicenii Vechi",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.297501,
        "lat": 48.15583
      },
      "name": "Soroca",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 29.707781,
        "lat": 46.728062
      },
      "name": "Slobozia",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 29.00111,
        "lat": 47.766392
      },
      "name": "Ribnita",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.823059,
        "lat": 47.38306
      },
      "name": "Orhei",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 29.413891,
        "lat": 46.644169
      },
      "name": "Causeni",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.30139,
        "lat": 47.89333
      },
      "name": "Floresti",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 29.16083,
        "lat": 47.263062
      },
      "name": "Dubasari",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 27.816111,
        "lat": 48.035
      },
      "name": "Drochia",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.657221,
        "lat": 46.300282
      },
      "name": "Comrat",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.8575,
        "lat": 47.005562
      },
      "name": "Chisinau",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.83028,
        "lat": 46.055
      },
      "name": "Ceadir-Lunga",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.194441,
        "lat": 45.907501
      },
      "name": "Cahul",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 29.471109,
        "lat": 46.830559
      },
      "name": "Bender",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 27.92889,
        "lat": 47.761669
      },
      "name": "Balti",
      "country": "MD"
    },
    {
      "coord": {
        "lon": 28.3325,
        "lat": 54.098331
      },
      "name": "Horad Zhodzina",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.024,
        "lat": 52.892601
      },
      "name": "Zhlobin",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.2033,
        "lat": 55.190479
      },
      "name": "Vitsyebsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.90624,
        "lat": 54.489601
      },
      "name": "Vilyeyka",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 24.4513,
        "lat": 53.156101
      },
      "name": "Vawkavysk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 29.738899,
        "lat": 52.6329
      },
      "name": "Svyetlahorsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.743401,
        "lat": 53.4785
      },
      "name": "Stowbtsy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.3934,
        "lat": 54.479061
      },
      "name": "Smarhon",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.5597,
        "lat": 53.027401
      },
      "name": "Slutsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 25.321943,
        "lat": 53.086666
      },
      "name": "Slonim",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 24.7465,
        "lat": 53.601398
      },
      "name": "Shchuchin",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.5415,
        "lat": 52.787601
      },
      "name": "Salihorsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.0495,
        "lat": 53.093399
      },
      "name": "Rahachow",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.3916,
        "lat": 52.361698
      },
      "name": "Rechytsa",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 24.464443,
        "lat": 52.556667
      },
      "name": "Pruzhany",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 28.77556,
        "lat": 55.48592
      },
      "name": "Polatsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.0951,
        "lat": 52.122898
      },
      "name": "Pinsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.83263,
        "lat": 55.11676
      },
      "name": "Pastavy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 28.642221,
        "lat": 53.293331
      },
      "name": "Asipovichy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.405277,
        "lat": 54.515278
      },
      "name": "Orsha",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.450001,
        "lat": 53.883331
      },
      "name": "Novoye Medvezhino",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 28.642441,
        "lat": 55.536282
      },
      "name": "Navapolatsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 25.833332,
        "lat": 53.599998
      },
      "name": "Navahrudak",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.566668,
        "lat": 53.900002
      },
      "name": "Minsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 29.2456,
        "lat": 52.0495
      },
      "name": "Mazyr",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 24.5387,
        "lat": 53.412201
      },
      "name": "Masty",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 28.146999,
        "lat": 53.508999
      },
      "name": "Marina Horka",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.864361,
        "lat": 54.320518
      },
      "name": "Maladzyechna",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.33639,
        "lat": 53.913891
      },
      "name": "Mahilyow",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 28.69323,
        "lat": 54.881432
      },
      "name": "Lyepyel",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.804701,
        "lat": 52.2472
      },
      "name": "Luninyets",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 25.299721,
        "lat": 53.883331
      },
      "name": "Lida",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 31.70994,
        "lat": 53.694481
      },
      "name": "Krychaw",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.782301,
        "lat": 53.944
      },
      "name": "Kalodzishchy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 24.3564,
        "lat": 52.213799
      },
      "name": "Kobryn",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 29.325701,
        "lat": 52.132301
      },
      "name": "Kalinkavichy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 25.340099,
        "lat": 52.709
      },
      "name": "Ivatsevichy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 23.8258,
        "lat": 53.6884
      },
      "name": "Hrodna",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.98424,
        "lat": 54.286098
      },
      "name": "Horki",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.975401,
        "lat": 52.434502
      },
      "name": "Homyel",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.687929,
        "lat": 55.138229
      },
      "name": "Hlybokaye",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 27.138,
        "lat": 53.683201
      },
      "name": "Dzyarzhynsk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 31.3237,
        "lat": 52.408901
      },
      "name": "Dobrush",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 30.246929,
        "lat": 53.519348
      },
      "name": "Bykhaw",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 24.9786,
        "lat": 52.531399
      },
      "name": "Byaroza",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 23.700001,
        "lat": 52.099998
      },
      "name": "Brest",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 28.50485,
        "lat": 54.231232
      },
      "name": "Horad Barysaw",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 26.013901,
        "lat": 53.132702
      },
      "name": "Baranavichy",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 29.233334,
        "lat": 53.150002
      },
      "name": "Babruysk",
      "country": "BY"
    },
    {
      "coord": {
        "lon": 23.59606,
        "lat": 61.55632
      },
      "name": "Ylojarvi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.319651,
        "lat": 60.416988
      },
      "name": "Vihti",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.872999,
        "lat": 62.315331
      },
      "name": "Varkaus",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.040991,
        "lat": 60.29414
      },
      "name": "Vantaa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.031219,
        "lat": 61.26421
      },
      "name": "Valkeakoski",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 21.61577,
        "lat": 63.096001
      },
      "name": "Vaasa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 21.408409,
        "lat": 60.80043
      },
      "name": "Uusikaupunki",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.026381,
        "lat": 60.403679
      },
      "name": "Tuusula",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 22.26869,
        "lat": 60.451481
      },
      "name": "Turku",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.14662,
        "lat": 65.848106
      },
      "name": "Tornio",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.787121,
        "lat": 61.499111
      },
      "name": "Tampere",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.66667,
        "lat": 63.083328
      },
      "name": "Siilinjarvi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.26906,
        "lat": 60.377522
      },
      "name": "Sibbo",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 22.83333,
        "lat": 62.799999
      },
      "name": "Seinaejoki",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 28.87999,
        "lat": 61.8699
      },
      "name": "Savonlinna",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.133329,
        "lat": 60.383331
      },
      "name": "Salo",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.716669,
        "lat": 66.5
      },
      "name": "Rovaniemi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.77726,
        "lat": 60.73769
      },
      "name": "Riihimaki",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 21.511271,
        "lat": 61.127239
      },
      "name": "Rauma",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 22.168949,
        "lat": 60.48592
      },
      "name": "Raisio",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.48333,
        "lat": 64.683327
      },
      "name": "Raahe",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 21.783331,
        "lat": 61.48333
      },
      "name": "Pori",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.63228,
        "lat": 61.46125
      },
      "name": "Pirkkala",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.468161,
        "lat": 65.01236
      },
      "name": "Oulu",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.807301,
        "lat": 60.464069
      },
      "name": "Nurmijarvi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.5,
        "lat": 61.466671
      },
      "name": "Nokia",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.27227,
        "lat": 61.688568
      },
      "name": "Mikkeli",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.316669,
        "lat": 60.633331
      },
      "name": "Mantsala",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.06534,
        "lat": 60.248589
      },
      "name": "Lohja",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 22.46176,
        "lat": 60.510319
      },
      "name": "Lieto",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.75,
        "lat": 61.316669
      },
      "name": "Lempaala",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.951941,
        "lat": 62.41407
      },
      "name": "Laukaa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 28.188709,
        "lat": 61.058708
      },
      "name": "Lappeenranta",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.66151,
        "lat": 60.98267
      },
      "name": "Lahti",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.43853,
        "lat": 60.12381
      },
      "name": "Kirkkonummi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 26.633329,
        "lat": 60.900002
      },
      "name": "Kuusankoski",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 29.183331,
        "lat": 65.966667
      },
      "name": "Kuusamo",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.677031,
        "lat": 62.89238
      },
      "name": "Kuopio",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 26.700001,
        "lat": 60.866669
      },
      "name": "Kouvola",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 26.91667,
        "lat": 60.466671
      },
      "name": "Kotka",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 21.682159,
        "lat": 63.114182
      },
      "name": "Korsholm",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.130659,
        "lat": 63.83847
      },
      "name": "Karleby",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.105,
        "lat": 60.403381
      },
      "name": "Kerava",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.563709,
        "lat": 65.736412
      },
      "name": "Kemi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 26.950001,
        "lat": 60.51667
      },
      "name": "Karhula",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.076019,
        "lat": 61.463829
      },
      "name": "Kangasala",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.72846,
        "lat": 64.22728
      },
      "name": "Kajaani",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 22.36904,
        "lat": 60.407242
      },
      "name": "Kaarina",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.73333,
        "lat": 62.23333
      },
      "name": "Jyvaeskylae",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 29.763161,
        "lat": 62.601181
      },
      "name": "Joensuu",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.08992,
        "lat": 60.47369
      },
      "name": "Jarvenpaa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.6,
        "lat": 60.900002
      },
      "name": "Janakkala",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.19002,
        "lat": 61.864201
      },
      "name": "Jamsa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 22.70256,
        "lat": 63.674858
      },
      "name": "Jakobstad",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 28.75242,
        "lat": 61.171848
      },
      "name": "Imatra",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.19067,
        "lat": 63.559151
      },
      "name": "Iisalmi",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.866671,
        "lat": 60.633331
      },
      "name": "Hyvinkaa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.433331,
        "lat": 61.049999
      },
      "name": "Hollola",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.93545,
        "lat": 60.169521
      },
      "name": "Helsinki",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 26.033331,
        "lat": 61.216671
      },
      "name": "Heinola",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.352329,
        "lat": 65.176537
      },
      "name": "Haukipudas",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 27.197941,
        "lat": 60.56974
      },
      "name": "Hamina",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.46434,
        "lat": 60.99596
      },
      "name": "Hameenlinna",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 23.62146,
        "lat": 60.814621
      },
      "name": "Forssa",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 24.652201,
        "lat": 60.2052
      },
      "name": "Espoo",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.66507,
        "lat": 60.39233
      },
      "name": "Porvoo",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 26.83333,
        "lat": 60.683331
      },
      "name": "Anjala",
      "country": "FI"
    },
    {
      "coord": {
        "lon": 25.366671,
        "lat": 43.666672
      },
      "name": "Zimnicea",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.049999,
        "lat": 47.200001
      },
      "name": "Zalau",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.26667,
        "lat": 45.383331
      },
      "name": "Vulcan",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.133329,
        "lat": 44.466671
      },
      "name": "Voluntari",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.433331,
        "lat": 47.716671
      },
      "name": "Viseu de Sus",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.366671,
        "lat": 47.349998
      },
      "name": "Vatra Dornei",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.73333,
        "lat": 46.633331
      },
      "name": "Vaslui",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.633329,
        "lat": 44.716671
      },
      "name": "Urziceni",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.866671,
        "lat": 43.75
      },
      "name": "Turnu Magurele",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.783331,
        "lat": 46.566669
      },
      "name": "Turda",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.799999,
        "lat": 45.166672
      },
      "name": "Tulcea",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.133329,
        "lat": 46.0
      },
      "name": "Targu Secuiesc",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.366671,
        "lat": 47.200001
      },
      "name": "Targu Neamt",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.55747,
        "lat": 46.54245
      },
      "name": "Targu-Mures",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.283331,
        "lat": 45.049999
      },
      "name": "Targu Jiu",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.450001,
        "lat": 44.933331
      },
      "name": "Targoviste",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.227221,
        "lat": 45.749439
      },
      "name": "Timisoara",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.43441,
        "lat": 45.849731
      },
      "name": "Tecuci",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.25,
        "lat": 47.633331
      },
      "name": "Suceava",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.366671,
        "lat": 44.433331
      },
      "name": "Slatina",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.799999,
        "lat": 47.23333
      },
      "name": "Simleu Silvaniei",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.883329,
        "lat": 47.933331
      },
      "name": "Sighetu Marmatiei",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.15,
        "lat": 45.799999
      },
      "name": "Sibiu",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.783331,
        "lat": 45.866669
      },
      "name": "Sfantu-Gheorghe",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.566669,
        "lat": 45.966671
      },
      "name": "Sebes",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.883329,
        "lat": 47.799999
      },
      "name": "Satu Mare",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.65,
        "lat": 46.799999
      },
      "name": "Salonta",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.694269,
        "lat": 45.617401
      },
      "name": "Sacele",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.98333,
        "lat": 44.116669
      },
      "name": "Rosiori de Vede",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.91667,
        "lat": 46.916672
      },
      "name": "Roman",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.450001,
        "lat": 45.583328
      },
      "name": "Rasnov",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.366671,
        "lat": 45.099998
      },
      "name": "Ramnicu Valcea",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.049999,
        "lat": 45.383331
      },
      "name": "Ramnicu Sarat",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.88917,
        "lat": 45.300831
      },
      "name": "Resita",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.716669,
        "lat": 46.783329
      },
      "name": "Reghin-Sat",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.91667,
        "lat": 47.849998
      },
      "name": "Radauti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.16667,
        "lat": 44.383331
      },
      "name": "Popesti-Leordeni",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.01667,
        "lat": 44.950001
      },
      "name": "Ploiesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.866671,
        "lat": 44.849998
      },
      "name": "Pitesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.33333,
        "lat": 46.916672
      },
      "name": "Piatra Neamt",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.366671,
        "lat": 45.416672
      },
      "name": "Petrosani",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.41667,
        "lat": 45.450001
      },
      "name": "Petrila",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.200001,
        "lat": 44.450001
      },
      "name": "Pantelimon",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.200001,
        "lat": 45.833328
      },
      "name": "Orastie",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.933331,
        "lat": 47.066669
      },
      "name": "Oradea",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.633329,
        "lat": 44.083328
      },
      "name": "Oltenita",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.299999,
        "lat": 46.299999
      },
      "name": "Odorheiu Secuiesc",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.85,
        "lat": 46.383331
      },
      "name": "Ocna Mures",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.6,
        "lat": 44.316669
      },
      "name": "Navodari",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.971939,
        "lat": 44.803329
      },
      "name": "Motru",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.65,
        "lat": 44.98333
      },
      "name": "Moreni",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.48333,
        "lat": 46.466671
      },
      "name": "Moinesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.450001,
        "lat": 45.01667
      },
      "name": "Mizil",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.799999,
        "lat": 46.349998
      },
      "name": "Miercurea-Ciuc",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.35,
        "lat": 46.166672
      },
      "name": "Medias",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.283331,
        "lat": 44.25
      },
      "name": "Medgidia",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.33333,
        "lat": 47.349998
      },
      "name": "Margita",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.58333,
        "lat": 43.799999
      },
      "name": "Mangalia",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.238319,
        "lat": 45.360291
      },
      "name": "Lupeni",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.903061,
        "lat": 45.68861
      },
      "name": "Lugoj",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.1,
        "lat": 46.48333
      },
      "name": "Ludus",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.6,
        "lat": 47.166672
      },
      "name": "Iasi",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.059441,
        "lat": 46.673611
      },
      "name": "Husi",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.9,
        "lat": 45.75
      },
      "name": "Hunedoara",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.9,
        "lat": 47.549999
      },
      "name": "Gura Humorului",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.966669,
        "lat": 43.883331
      },
      "name": "Giurgiu",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.91667,
        "lat": 47.033329
      },
      "name": "Gherla",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.616671,
        "lat": 46.716671
      },
      "name": "Gheorgheni",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.049999,
        "lat": 45.450001
      },
      "name": "Galati",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.316669,
        "lat": 44.716671
      },
      "name": "Gaesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.183331,
        "lat": 45.700001
      },
      "name": "Focsani",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.51667,
        "lat": 44.549999
      },
      "name": "Filiasi",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.83333,
        "lat": 44.383331
      },
      "name": "Fetesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.299999,
        "lat": 47.450001
      },
      "name": "Falticeni",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.966669,
        "lat": 45.849998
      },
      "name": "Fogarasch",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.656111,
        "lat": 44.631939
      },
      "name": "Drobeta-Turnu Severin",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.26667,
        "lat": 44.650002
      },
      "name": "Dragasani",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.4,
        "lat": 47.950001
      },
      "name": "Dorohoi",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.9,
        "lat": 45.883331
      },
      "name": "Deva",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.866671,
        "lat": 47.150002
      },
      "name": "Dej",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.683331,
        "lat": 45.133331
      },
      "name": "Curtea de Arges",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.366671,
        "lat": 45.833328
      },
      "name": "Cugir",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.799999,
        "lat": 44.316669
      },
      "name": "Craiova",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.5,
        "lat": 43.783329
      },
      "name": "Corabia",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.65,
        "lat": 44.183331
      },
      "name": "Constanta",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.433331,
        "lat": 46.416672
      },
      "name": "Comanesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.450001,
        "lat": 45.700001
      },
      "name": "Codlea",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.6,
        "lat": 46.76667
      },
      "name": "Cluj-Napoca",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.15,
        "lat": 45.716671
      },
      "name": "Cisnadie",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.566669,
        "lat": 47.533329
      },
      "name": "Campulung Moldovenesc",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.883329,
        "lat": 46.549999
      },
      "name": "Campia Turzii",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 28.01667,
        "lat": 44.366669
      },
      "name": "Cernavoda",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.466669,
        "lat": 47.683331
      },
      "name": "Carei",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.216669,
        "lat": 45.416672
      },
      "name": "Caransebes",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.35,
        "lat": 44.116669
      },
      "name": "Caracal",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.932779,
        "lat": 43.991112
      },
      "name": "Calafat",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.83333,
        "lat": 45.150002
      },
      "name": "Buzau",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.700001,
        "lat": 46.716671
      },
      "name": "Buhusi",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.948891,
        "lat": 44.56139
      },
      "name": "Buftea",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.10626,
        "lat": 44.432251
      },
      "name": "Bucharest",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.66667,
        "lat": 45.183331
      },
      "name": "Breaza",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.606131,
        "lat": 45.648609
      },
      "name": "Brasov",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.98333,
        "lat": 45.26667
      },
      "name": "Braila",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 22.783331,
        "lat": 46.133331
      },
      "name": "Brad",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.66667,
        "lat": 47.75
      },
      "name": "Botosani",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.66328,
        "lat": 47.65527
      },
      "name": "Borsa",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.709169,
        "lat": 45.373329
      },
      "name": "Bocsa",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.91667,
        "lat": 46.183331
      },
      "name": "Blaj",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.500111,
        "lat": 47.13316
      },
      "name": "Bistrita",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.66667,
        "lat": 46.23333
      },
      "name": "Barlad",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 24.1,
        "lat": 44.349998
      },
      "name": "Bals",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.35,
        "lat": 44.01667
      },
      "name": "Bailesti",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.85,
        "lat": 45.033329
      },
      "name": "Baicoi",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.69215,
        "lat": 47.661888
      },
      "name": "Baia Sprie",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.568081,
        "lat": 47.657291
      },
      "name": "Baia Mare",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 26.9,
        "lat": 46.566669
      },
      "name": "Bacau",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 21.316669,
        "lat": 46.183331
      },
      "name": "Arad",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 25.33333,
        "lat": 43.98333
      },
      "name": "Alexandria",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.58333,
        "lat": 46.066669
      },
      "name": "Alba Iulia",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 23.716669,
        "lat": 46.299999
      },
      "name": "Aiud",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 27.16667,
        "lat": 46.099998
      },
      "name": "Adjud",
      "country": "RO"
    },
    {
      "coord": {
        "lon": 35.274166,
        "lat": 47.436943
      },
      "name": "Vasylivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.967541,
        "lat": 49.078659
      },
      "name": "Zvenyhorodka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.264439,
        "lat": 48.011398
      },
      "name": "Zuhres",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.037731,
        "lat": 49.668861
      },
      "name": "Zolotonosha",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.89436,
        "lat": 49.805969
      },
      "name": "Zolochiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.664719,
        "lat": 48.71278
      },
      "name": "Znomenka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.361092,
        "lat": 49.69664
      },
      "name": "Zmiyev",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.676689,
        "lat": 50.26487
      },
      "name": "Zhytomyr",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.112009,
        "lat": 49.037048
      },
      "name": "Zhmerynka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.50034,
        "lat": 48.347309
      },
      "name": "Zhovti Vody",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.110201,
        "lat": 49.245449
      },
      "name": "Zhashkiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.24251,
        "lat": 50.520599
      },
      "name": "Zdolbuniv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.183331,
        "lat": 47.816669
      },
      "name": "Zaporizhzhya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.101311,
        "lat": 46.622108
      },
      "name": "Yuzhne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.355831,
        "lat": 45.197224
      },
      "name": "Yevpatoriya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.211369,
        "lat": 48.233311
      },
      "name": "Yenakiyeve",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.859402,
        "lat": 48.129799
      },
      "name": "Yasinovataya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.166668,
        "lat": 44.5
      },
      "name": "Yalta",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.762461,
        "lat": 50.279751
      },
      "name": "Yahotyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.489799,
        "lat": 50.584759
      },
      "name": "Vyshhorod",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 22.76667,
        "lat": 48.150002
      },
      "name": "Vynohradiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.33078,
        "lat": 47.564941
      },
      "name": "Voznesensk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.496738,
        "lat": 47.601028
      },
      "name": "Volnovakha",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.946667,
        "lat": 50.300278
      },
      "name": "Vovchansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.323641,
        "lat": 50.852531
      },
      "name": "Volodymyr-Volynskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.370501,
        "lat": 50.38913
      },
      "name": "Vyshneve",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.48097,
        "lat": 49.23278
      },
      "name": "Vinnytsya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.062111,
        "lat": 49.015018
      },
      "name": "Vatutine",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.313459,
        "lat": 50.18692
      },
      "name": "Vasylkiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 22.299999,
        "lat": 48.616669
      },
      "name": "Uzhhorod",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.22184,
        "lat": 48.748379
      },
      "name": "Uman",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.846411,
        "lat": 48.67448
      },
      "name": "Tulchyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.718899,
        "lat": 46.61842
      },
      "name": "Tsyurupynsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.50618,
        "lat": 49.27837
      },
      "name": "Truskavets",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.596851,
        "lat": 48.038761
      },
      "name": "Torez",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.705833,
        "lat": 47.251389
      },
      "name": "Tokmak",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.60556,
        "lat": 49.555889
      },
      "name": "Ternopil",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.491661,
        "lat": 48.948318
      },
      "name": "Syeverodonetsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.241058,
        "lat": 49.048939
      },
      "name": "Svitlovodsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.652431,
        "lat": 48.089642
      },
      "name": "Sverdlovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.150349,
        "lat": 49.41029
      },
      "name": "Svatove",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 22.995781,
        "lat": 48.548531
      },
      "name": "Svalyava",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.800289,
        "lat": 50.9216
      },
      "name": "Sumy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.856091,
        "lat": 49.26223
      },
      "name": "Stryi",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.56357,
        "lat": 49.294159
      },
      "name": "Stebnik",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.203421,
        "lat": 49.757641
      },
      "name": "Starokostyantyniv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.91069,
        "lat": 49.27832
      },
      "name": "Starobilsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.64352,
        "lat": 48.56818
      },
      "name": "Stakhanov",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.282881,
        "lat": 50.47438
      },
      "name": "Sokal",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.772251,
        "lat": 48.026119
      },
      "name": "Snizhne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.88714,
        "lat": 49.22242
      },
      "name": "Smila",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.616669,
        "lat": 48.866669
      },
      "name": "Sloviansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.865061,
        "lat": 50.301552
      },
      "name": "Slavuta",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.665689,
        "lat": 49.73177
      },
      "name": "Skvyra",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.91124,
        "lat": 46.1161
      },
      "name": "Skadovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.517921,
        "lat": 48.320438
      },
      "name": "Synelnykove",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.11079,
        "lat": 44.957191
      },
      "name": "Simferopol",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.394711,
        "lat": 49.00687
      },
      "name": "Shpola",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.469799,
        "lat": 51.862961
      },
      "name": "Shostka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.06365,
        "lat": 50.185452
      },
      "name": "Shepetivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.516651,
        "lat": 48.062519
      },
      "name": "Shakhtersk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.533333,
        "lat": 44.599998
      },
      "name": "Sevastopol",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.60191,
        "lat": 51.337952
      },
      "name": "Sarny",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.197519,
        "lat": 49.518299
      },
      "name": "Sambir",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.603058,
        "lat": 45.135555
      },
      "name": "Saky",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.682201,
        "lat": 51.565498
      },
      "name": "Rylsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.379669,
        "lat": 49.012291
      },
      "name": "Rubizhne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.079189,
        "lat": 46.843342
      },
      "name": "Rozdilna",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.37764,
        "lat": 48.083321
      },
      "name": "Rovenki",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.474709,
        "lat": 50.751041
      },
      "name": "Romny",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.22743,
        "lat": 50.623081
      },
      "name": "Rivne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.293171,
        "lat": 45.457272
      },
      "name": "Reni",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.229111,
        "lat": 50.496132
      },
      "name": "Radomyshl",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.71056,
        "lat": 48.41333
      },
      "name": "Piatykhatky",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.870659,
        "lat": 51.337448
      },
      "name": "Putyvl",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.387611,
        "lat": 50.593239
      },
      "name": "Pryluky",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.37804,
        "lat": 48.633282
      },
      "name": "Popasnaya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.54073,
        "lat": 49.593731
      },
      "name": "Poltava",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.51087,
        "lat": 50.124241
      },
      "name": "Polonne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.253609,
        "lat": 47.48444
      },
      "name": "Polohy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.1068,
        "lat": 48.575279
      },
      "name": "Pidhorodne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.510731,
        "lat": 50.244499
      },
      "name": "Pyryatyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.548061,
        "lat": 48.629879
      },
      "name": "Pervomaysk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.850731,
        "lat": 48.044331
      },
      "name": "Pervomaysk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.4795,
        "lat": 50.087681
      },
      "name": "Pereyaslav-Khmelnytskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.843842,
        "lat": 48.43779
      },
      "name": "Perevalsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.866669,
        "lat": 48.51667
      },
      "name": "Pavlohrad",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.803511,
        "lat": 51.3246
      },
      "name": "Ovruch",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.785751,
        "lat": 47.56731
      },
      "name": "Orikhiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.115929,
        "lat": 48.669609
      },
      "name": "Oleksandriya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.732622,
        "lat": 46.477474
      },
      "name": "Odessa",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.54982,
        "lat": 46.612831
      },
      "name": "Ochakiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.622721,
        "lat": 50.10997
      },
      "name": "Obukhiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.521599,
        "lat": 47.693081
      },
      "name": "Novyy Buh",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.162649,
        "lat": 50.725761
      },
      "name": "Novovolynsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.528521,
        "lat": 48.326351
      },
      "name": "Novoukrayinka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.200001,
        "lat": 48.616669
      },
      "name": "Novomoskovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.616501,
        "lat": 50.59412
      },
      "name": "Novohrad-Volynskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.34864,
        "lat": 46.754509
      },
      "name": "Nova Kakhovka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.582821,
        "lat": 50.931519
      },
      "name": "Nosivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.886881,
        "lat": 51.048012
      },
      "name": "Nizhyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.738392,
        "lat": 45.447891
      },
      "name": "Nyzhnohirskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.39637,
        "lat": 47.57119
      },
      "name": "Nikopol",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.64171,
        "lat": 50.340038
      },
      "name": "Netishyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.569361,
        "lat": 48.6348
      },
      "name": "Nadvirna",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.9974,
        "lat": 46.965912
      },
      "name": "Mykolayiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 22.717791,
        "lat": 48.43919
      },
      "name": "Mukacheve",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.658241,
        "lat": 48.345779
      },
      "name": "Molodogvardeysk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.798201,
        "lat": 48.44598
      },
      "name": "Mohyliv-Podilskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.083332,
        "lat": 44.433334
      },
      "name": "Miskhor",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.60886,
        "lat": 49.96854
      },
      "name": "Myrhorod",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.051941,
        "lat": 49.819721
      },
      "name": "Merefa",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.373055,
        "lat": 46.84222
      },
      "name": "Melitopol",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.5,
        "lat": 47.066669
      },
      "name": "Mariupol",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.627689,
        "lat": 47.635429
      },
      "name": "Marhanets",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.238331,
        "lat": 50.772331
      },
      "name": "Malyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.925758,
        "lat": 48.047821
      },
      "name": "Makiyivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.966671,
        "lat": 49.950001
      },
      "name": "Lyubotyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.023239,
        "lat": 49.838261
      },
      "name": "Lviv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.226749,
        "lat": 48.405071
      },
      "name": "Lutugino",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.34244,
        "lat": 50.759319
      },
      "name": "Lutsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.317059,
        "lat": 48.567051
      },
      "name": "Luhansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.996941,
        "lat": 50.016251
      },
      "name": "Lubny",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.317551,
        "lat": 48.88937
      },
      "name": "Lozova",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.44207,
        "lat": 48.90485
      },
      "name": "Lisichansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.23678,
        "lat": 48.684959
      },
      "name": "Ladyzhyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.516666,
        "lat": 50.433334
      },
      "name": "Kiev",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.866671,
        "lat": 51.683331
      },
      "name": "Kuznetsovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.282101,
        "lat": 47.985222
      },
      "name": "Kurakhovo",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.349998,
        "lat": 47.916668
      },
      "name": "Kryvyy Rih",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.38475,
        "lat": 51.547749
      },
      "name": "Krolevets",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.217918,
        "lat": 49.0495
      },
      "name": "Kreminna",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.72459,
        "lat": 50.096931
      },
      "name": "Kremenets",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.41972,
        "lat": 49.097252
      },
      "name": "Kremenchuk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.937149,
        "lat": 48.139542
      },
      "name": "Krasnyy Luch",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.80225,
        "lat": 48.988361
      },
      "name": "Krasnyy Liman",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.792221,
        "lat": 45.955002
      },
      "name": "Krasnoperekopsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.440208,
        "lat": 49.381401
      },
      "name": "Krasnohrad",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.737289,
        "lat": 48.29229
      },
      "name": "Krasnodon",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.17585,
        "lat": 48.281979
      },
      "name": "Krasnoarmiysk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.972521,
        "lat": 49.651859
      },
      "name": "Krasyliv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.55629,
        "lat": 48.723049
      },
      "name": "Kramatorsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.703571,
        "lat": 49.62125
      },
      "name": "Kivsharivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.70867,
        "lat": 51.21526
      },
      "name": "Kovel",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.532049,
        "lat": 47.753052
      },
      "name": "Kotovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.25865,
        "lat": 49.418941
      },
      "name": "Korsun-Shevchenkivskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.056299,
        "lat": 50.31723
      },
      "name": "Korostyshiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.63855,
        "lat": 50.95937
      },
      "name": "Korosten",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.706902,
        "lat": 48.527699
      },
      "name": "Kostyantynivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.202629,
        "lat": 51.240318
      },
      "name": "Konotop",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.52618,
        "lat": 49.597012
      },
      "name": "Komsomolske",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.040277,
        "lat": 48.530556
      },
      "name": "Kolomyya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.45821,
        "lat": 50.834251
      },
      "name": "Kivertsy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.642799,
        "lat": 48.637508
      },
      "name": "Kirovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.259701,
        "lat": 48.513199
      },
      "name": "Kirovohrad",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.26367,
        "lat": 45.455181
      },
      "name": "Kiliya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.299089,
        "lat": 48.179298
      },
      "name": "Khust",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.996531,
        "lat": 49.421612
      },
      "name": "Khmelnytskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.957541,
        "lat": 49.559792
      },
      "name": "Khmilnyk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.617802,
        "lat": 46.655811
      },
      "name": "Kherson",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.147282,
        "lat": 48.042431
      },
      "name": "Khartsyzsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.25,
        "lat": 50.0
      },
      "name": "Kharkiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.475834,
        "lat": 45.358334
      },
      "name": "Kerch",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.833851,
        "lat": 49.71431
      },
      "name": "Kozyatyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.129471,
        "lat": 49.45668
      },
      "name": "Karlivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.460039,
        "lat": 49.75182
      },
      "name": "Kaniv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.566668,
        "lat": 48.666668
      },
      "name": "Kamieniec Podolski",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.373079,
        "lat": 49.011871
      },
      "name": "Kalush",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.526079,
        "lat": 49.453892
      },
      "name": "Kalynivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.48698,
        "lat": 46.813709
      },
      "name": "Kakhovka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.248482,
        "lat": 49.208752
      },
      "name": "Izyum",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.821251,
        "lat": 50.119469
      },
      "name": "Izyaslav",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.84079,
        "lat": 45.349289
      },
      "name": "Izmayil",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.709721,
        "lat": 48.921501
      },
      "name": "Ivano-Frankivsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.250549,
        "lat": 50.521751
      },
      "name": "Irpin",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.202358,
        "lat": 47.92498
      },
      "name": "Ilovaysk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.654779,
        "lat": 46.304951
      },
      "name": "Illichivsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.583941,
        "lat": 49.163738
      },
      "name": "Horodok",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.054192,
        "lat": 48.346981
      },
      "name": "Horlivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.916199,
        "lat": 51.678219
      },
      "name": "Hlukhiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.257778,
        "lat": 47.665279
      },
      "name": "Hulyaypole",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.64806,
        "lat": 49.784649
      },
      "name": "Horodok",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.445129,
        "lat": 49.284889
      },
      "name": "Horodyshche",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.525833,
        "lat": 46.520557
      },
      "name": "Hola Prystan",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.803398,
        "lat": 46.175919
      },
      "name": "Henichesk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.86791,
        "lat": 48.339581
      },
      "name": "Hayvoron",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.389771,
        "lat": 48.811432
      },
      "name": "Haysyn",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.99099,
        "lat": 50.37112
      },
      "name": "Hadyach",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.383331,
        "lat": 45.033333
      },
      "name": "Feodosiya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.9177,
        "lat": 50.076698
      },
      "name": "Fastiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.657398,
        "lat": 47.49865
      },
      "name": "Energodar",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.400002,
        "lat": 45.716667
      },
      "name": "Dzhankoy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.84787,
        "lat": 48.398689
      },
      "name": "Dzerzhynsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 26.856359,
        "lat": 48.889091
      },
      "name": "Dunaivtsi",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.73432,
        "lat": 50.416939
      },
      "name": "Dubno",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.50561,
        "lat": 49.349911
      },
      "name": "Drogobych",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.799999,
        "lat": 48.0
      },
      "name": "Donetsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.009439,
        "lat": 48.973301
      },
      "name": "Dolyna",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.764488,
        "lat": 48.110409
      },
      "name": "Dolynska",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.67384,
        "lat": 47.74773
      },
      "name": "Dokuchayevsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.085239,
        "lat": 48.461472
      },
      "name": "Dobropolye",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.98333,
        "lat": 48.450001
      },
      "name": "Dnipropetrovsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.6021,
        "lat": 48.511341
      },
      "name": "Dniprodzerzhynsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.976521,
        "lat": 47.381691
      },
      "name": "Dniprorudne",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.12112,
        "lat": 50.10659
      },
      "name": "Derhachy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.4049,
        "lat": 48.340721
      },
      "name": "Debaltsevo",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.68803,
        "lat": 49.83588
      },
      "name": "Chuhuyiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.79804,
        "lat": 49.01709
      },
      "name": "Chortkiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.796181,
        "lat": 48.07613
      },
      "name": "Chervonopartizansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.23514,
        "lat": 50.391048
      },
      "name": "Chervonograd",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.94034,
        "lat": 48.291489
      },
      "name": "Chernivtsi",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 31.28488,
        "lat": 51.505508
      },
      "name": "Chernihiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.062069,
        "lat": 49.428539
      },
      "name": "Cherkasy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.212009,
        "lat": 50.543449
      },
      "name": "Bucha",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.672218,
        "lat": 48.511002
      },
      "name": "Bryanka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.766666,
        "lat": 50.5
      },
      "name": "Brovary",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 25.15027,
        "lat": 50.08791
      },
      "name": "Brody",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.297279,
        "lat": 50.319099
      },
      "name": "Boyarka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.950001,
        "lat": 50.349998
      },
      "name": "Boryspil",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 23.432381,
        "lat": 49.28672
      },
      "name": "Boryslav",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.61487,
        "lat": 45.682621
      },
      "name": "Bolhrad",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.874399,
        "lat": 49.549389
      },
      "name": "Bohuslav",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 35.527649,
        "lat": 50.164661
      },
      "name": "Bohodukhiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.35,
        "lat": 46.200001
      },
      "name": "Bilhorod-Dnistrovskyy",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 30.112089,
        "lat": 49.809391
      },
      "name": "Bila Tserkva",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 24.933332,
        "lat": 49.450001
      },
      "name": "Berezhani",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 22.64418,
        "lat": 48.205551
      },
      "name": "Berehove",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 28.60235,
        "lat": 49.899281
      },
      "name": "Berdychiv",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.794445,
        "lat": 46.750278
      },
      "name": "Berdyansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.31287,
        "lat": 51.150162
      },
      "name": "Bilopillya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.599998,
        "lat": 45.049999
      },
      "name": "Bilohirsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 27.68256,
        "lat": 49.077171
      },
      "name": "Bar",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.61982,
        "lat": 47.935478
      },
      "name": "Balta",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 36.859509,
        "lat": 49.4627
      },
      "name": "Balakliya",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.599998,
        "lat": 44.5
      },
      "name": "Balaklava",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 32.756939,
        "lat": 51.180759
      },
      "name": "Bakhmach",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.866669,
        "lat": 44.75
      },
      "name": "Bakhchysaray",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.74255,
        "lat": 48.139889
      },
      "name": "Avdeyevka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 29.41824,
        "lat": 45.99194
      },
      "name": "Artsyz",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 37.99987,
        "lat": 48.595589
      },
      "name": "Artemivsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.692059,
        "lat": 46.109192
      },
      "name": "Armyansk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 33.713692,
        "lat": 47.66003
      },
      "name": "Apostolove",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 39.091282,
        "lat": 48.115028
      },
      "name": "Antratsit",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.47768,
        "lat": 47.79348
      },
      "name": "Amvrosiyivka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.416668,
        "lat": 44.666668
      },
      "name": "Alushta",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 38.816689,
        "lat": 48.468929
      },
      "name": "Alchevsk",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 34.898788,
        "lat": 50.31036
      },
      "name": "Okhtyrka",
      "country": "UA"
    },
    {
      "coord": {
        "lon": 20.41667,
        "lat": 47.183331
      },
      "name": "Torokszentmiklos",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.08333,
        "lat": 47.933331
      },
      "name": "Tiszaujvaros",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.200001,
        "lat": 47.183331
      },
      "name": "Szolnok",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.26667,
        "lat": 46.650002
      },
      "name": "Szentes",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.148239,
        "lat": 46.252998
      },
      "name": "Szeged",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.549999,
        "lat": 46.866669
      },
      "name": "Szarvas",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.66667,
        "lat": 48.400002
      },
      "name": "Satoraljaujhely",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.116671,
        "lat": 47.316669
      },
      "name": "Puspokladany",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.299999,
        "lat": 48.216671
      },
      "name": "Ozd",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.66667,
        "lat": 46.566669
      },
      "name": "Oroshaza",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.716709,
        "lat": 47.955391
      },
      "name": "Nyiregyhaza",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.783331,
        "lat": 48.099998
      },
      "name": "Miskolc",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.633329,
        "lat": 47.0
      },
      "name": "Mezotur",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.58333,
        "lat": 47.816669
      },
      "name": "Mezokovesd",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 22.323481,
        "lat": 47.95528
      },
      "name": "Mateszalka",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.48333,
        "lat": 46.216671
      },
      "name": "Mako",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 22.08333,
        "lat": 48.216671
      },
      "name": "Kisvarda",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.633329,
        "lat": 48.25
      },
      "name": "Kazincbarcika",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.933331,
        "lat": 47.316669
      },
      "name": "Karcag",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.33333,
        "lat": 46.416672
      },
      "name": "Hodmezovasarhely",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.4,
        "lat": 47.450001
      },
      "name": "Hajduszoboszlo",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.433331,
        "lat": 47.849998
      },
      "name": "Hajdunanas",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.51667,
        "lat": 47.666672
      },
      "name": "Hajduboszormeny",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.283331,
        "lat": 46.650002
      },
      "name": "Gyula",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.83333,
        "lat": 46.933331
      },
      "name": "Gyomaendrod",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.373289,
        "lat": 47.902649
      },
      "name": "Eger",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.633329,
        "lat": 47.533329
      },
      "name": "Debrecen",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.14242,
        "lat": 46.713322
      },
      "name": "Csongrad",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.549999,
        "lat": 47.216671
      },
      "name": "Berettyoujfalu",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.1,
        "lat": 46.683331
      },
      "name": "Bekescsaba",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.133329,
        "lat": 46.76667
      },
      "name": "Bekes",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.35,
        "lat": 47.616669
      },
      "name": "Balmazujvaros",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 20.004761,
        "lat": 47.189899
      },
      "name": "Abony",
      "country": "HU"
    },
    {
      "coord": {
        "lon": 21.68479,
        "lat": 48.888359
      },
      "name": "Vranov nad Toplou",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 21.71954,
        "lat": 48.628578
      },
      "name": "Trebisov",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 20.686199,
        "lat": 49.298592
      },
      "name": "Stara lubovna",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 20.561541,
        "lat": 48.944641
      },
      "name": "Spisska Nova Ves",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 22.15099,
        "lat": 48.988571
      },
      "name": "Snina",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 20.53758,
        "lat": 48.66008
      },
      "name": "Roznava",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 20.0224,
        "lat": 48.382839
      },
      "name": "Rimavska Sobota",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 21.233931,
        "lat": 48.99839
      },
      "name": "Presov",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 20.297979,
        "lat": 49.06144
      },
      "name": "Poprad",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 21.9195,
        "lat": 48.754341
      },
      "name": "Michalovce",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 21.25808,
        "lat": 48.713951
      },
      "name": "Kosice",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 20.433519,
        "lat": 49.1357
      },
      "name": "Kezmarok",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 21.91625,
        "lat": 48.937069
      },
      "name": "Humenne",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 21.272711,
        "lat": 49.291752
      },
      "name": "Bardejov",
      "country": "SK"
    },
    {
      "coord": {
        "lon": 26.5,
        "lat": 42.48333
      },
      "name": "Yambol",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.5625,
        "lat": 43.209999
      },
      "name": "Vratsa",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 22.872499,
        "lat": 43.990002
      },
      "name": "Vidin",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.995689,
        "lat": 42.027241
      },
      "name": "Velingrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.62904,
        "lat": 43.081242
      },
      "name": "Veliko Turnovo",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 27.91667,
        "lat": 43.216671
      },
      "name": "Varna",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.58917,
        "lat": 43.259171
      },
      "name": "Turgovishte",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.715891,
        "lat": 42.894272
      },
      "name": "Troyan",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.316669,
        "lat": 42.900002
      },
      "name": "Tonchevtsi",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 27.83333,
        "lat": 43.566669
      },
      "name": "Dobrich",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.353889,
        "lat": 43.623058
      },
      "name": "Svishtov",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.200001,
        "lat": 41.76667
      },
      "name": "Svilengrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.641939,
        "lat": 42.432781
      },
      "name": "Stara Zagora",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.116671,
        "lat": 42.26667
      },
      "name": "Dupnitsa",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.32415,
        "lat": 42.69751
      },
      "name": "Sofia",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.69194,
        "lat": 41.585281
      },
      "name": "Smolyan",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.32917,
        "lat": 42.685829
      },
      "name": "Sliven",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 27.26667,
        "lat": 44.116669
      },
      "name": "Silistra",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.922859,
        "lat": 43.270641
      },
      "name": "Shumen",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.113609,
        "lat": 43.025829
      },
      "name": "Sevlievo",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.283331,
        "lat": 41.566669
      },
      "name": "Sandanski",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.549999,
        "lat": 42.333328
      },
      "name": "Samokov",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.970831,
        "lat": 43.856392
      },
      "name": "Ruse",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.51667,
        "lat": 43.533329
      },
      "name": "Razgrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.966669,
        "lat": 42.299999
      },
      "name": "Rakovski",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.23333,
        "lat": 43.349998
      },
      "name": "Popovo",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.75,
        "lat": 42.150002
      },
      "name": "Plovdiv",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.616671,
        "lat": 43.416672
      },
      "name": "Pleven",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.216669,
        "lat": 41.400002
      },
      "name": "Petrich",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.299999,
        "lat": 42.033329
      },
      "name": "Peshtera",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.033331,
        "lat": 42.599998
      },
      "name": "Pernik",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.33333,
        "lat": 42.200001
      },
      "name": "Pazardzhik",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.183331,
        "lat": 42.5
      },
      "name": "Panagyurishte",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.01667,
        "lat": 42.48333
      },
      "name": "Nova Zagora",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.225,
        "lat": 43.412498
      },
      "name": "Montana",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.716669,
        "lat": 43.133331
      },
      "name": "Lovech",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.236111,
        "lat": 43.813889
      },
      "name": "Lom",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 22.691111,
        "lat": 42.28389
      },
      "name": "Kyustendil",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.366671,
        "lat": 41.650002
      },
      "name": "Kurdzhali",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.569441,
        "lat": 41.940281
      },
      "name": "Khaskovo",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.9,
        "lat": 41.933331
      },
      "name": "Kharmanli",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.4,
        "lat": 42.616669
      },
      "name": "Kazanluk",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 26.98333,
        "lat": 42.650002
      },
      "name": "Karnobat",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.799999,
        "lat": 42.633331
      },
      "name": "Karlovo",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.73333,
        "lat": 41.566669
      },
      "name": "Gotse Delchev",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.70167,
        "lat": 43.127781
      },
      "name": "Gorna Oryakhovitsa",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.334169,
        "lat": 42.874722
      },
      "name": "Gabrovo",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.6,
        "lat": 42.049999
      },
      "name": "Dimitrovgrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 25.33333,
        "lat": 42.200001
      },
      "name": "Chirpan",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.1,
        "lat": 43.26667
      },
      "name": "Cherven Bryag",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 27.46781,
        "lat": 42.506062
      },
      "name": "Burgas",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.783331,
        "lat": 42.900002
      },
      "name": "Botevgrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.1,
        "lat": 42.01667
      },
      "name": "Blagoevgrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 23.12583,
        "lat": 43.236111
      },
      "name": "Berkovitsa",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 27.25,
        "lat": 42.700001
      },
      "name": "Aytos",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 24.866671,
        "lat": 42.01667
      },
      "name": "Asenovgrad",
      "country": "BG"
    },
    {
      "coord": {
        "lon": 22.407499,
        "lat": 40.791939
      },
      "name": "Giannitsa",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 24.88361,
        "lat": 41.141392
      },
      "name": "Xanthi",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.203609,
        "lat": 40.523331
      },
      "name": "Veroia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.94389,
        "lat": 40.640282
      },
      "name": "Thessaloniki",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.95083,
        "lat": 40.649441
      },
      "name": "Sykies",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.549721,
        "lat": 41.08556
      },
      "name": "Serres",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.67861,
        "lat": 40.514721
      },
      "name": "Ptolemaida",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.948811,
        "lat": 40.66671
      },
      "name": "Polichni",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.987499,
        "lat": 40.600559
      },
      "name": "Pylaia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.924999,
        "lat": 40.500278
      },
      "name": "Peraia",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 23.0315,
        "lat": 40.587791
      },
      "name": "Panorama",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 26.52972,
        "lat": 41.503059
      },
      "name": "Orestiada",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.917219,
        "lat": 40.730831
      },
      "name": "Oraiokastro",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.06806,
        "lat": 40.62944
      },
      "name": "Naousa",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.9,
        "lat": 40.65694
      },
      "name": "Menemeni",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.78639,
        "lat": 40.301109
      },
      "name": "Kozani",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 25.396391,
        "lat": 41.12278
      },
      "name": "Komotini",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.870831,
        "lat": 40.99194
      },
      "name": "Kilkis",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 24.401939,
        "lat": 40.93972
      },
      "name": "Kavala",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.502501,
        "lat": 40.271938
      },
      "name": "Katerini",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.950279,
        "lat": 40.5825
      },
      "name": "Kalamaria",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 21.409809,
        "lat": 40.781971
      },
      "name": "Florina",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 22.04722,
        "lat": 40.80056
      },
      "name": "Edessa",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 24.139441,
        "lat": 41.154442
      },
      "name": "Drama",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 25.874439,
        "lat": 40.8475
      },
      "name": "Alexandroupoli",
      "country": "GR"
    },
    {
      "coord": {
        "lon": 31.793051,
        "lat": 41.451389
      },
      "name": "Zonguldak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.886391,
        "lat": 40.303059
      },
      "name": "Zile",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.904169,
        "lat": 40.994411
      },
      "name": "Zeytinburnu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.864052,
        "lat": 40.954109
      },
      "name": "Yomra",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.653061,
        "lat": 40.264439
      },
      "name": "Yenisehir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.729719,
        "lat": 40.776669
      },
      "name": "Korfez",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.27693,
        "lat": 40.655022
      },
      "name": "Yalova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.675819,
        "lat": 40.988941
      },
      "name": "Yakuplu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.45472,
        "lat": 41.143608
      },
      "name": "Vezirkopru",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.27639,
        "lat": 41.04583
      },
      "name": "Vakfikebir",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.688499,
        "lat": 41.26598
      },
      "name": "Uzun Keupru",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.282501,
        "lat": 41.13139
      },
      "name": "Unieh",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.12476,
        "lat": 41.01643
      },
      "name": "Umraniye",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.081108,
        "lat": 40.387501
      },
      "name": "Turhal",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.72694,
        "lat": 41.005001
      },
      "name": "Trabzon",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.040131,
        "lat": 41.01545
      },
      "name": "Tosya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.55444,
        "lat": 40.313889
      },
      "name": "Tokat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.813889,
        "lat": 41.006939
      },
      "name": "Tirebolu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.973888,
        "lat": 41.209171
      },
      "name": "Terme",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.54978,
        "lat": 41.029308
      },
      "name": "Tepecik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.459999,
        "lat": 41.21167
      },
      "name": "Tekkekoy",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.50852,
        "lat": 40.978008
      },
      "name": "Tekirdag",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.322498,
        "lat": 40.75972
      },
      "name": "Tasova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.214142,
        "lat": 41.5098
      },
      "name": "Taskopru",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.08667,
        "lat": 40.16444
      },
      "name": "Susehri",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.11676,
        "lat": 40.912579
      },
      "name": "Surmene",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.37389,
        "lat": 40.1675
      },
      "name": "Sungurlu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.647881,
        "lat": 40.83128
      },
      "name": "Suluova",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.987169,
        "lat": 41.060459
      },
      "name": "Sisli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.162521,
        "lat": 42.026829
      },
      "name": "Sinop",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.226049,
        "lat": 41.080219
      },
      "name": "Silivri",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.423611,
        "lat": 40.28833
      },
      "name": "Sebinkarahisar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.573059,
        "lat": 40.338058
      },
      "name": "Sarikamis",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.26738,
        "lat": 40.69141
      },
      "name": "Sapanca",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.330002,
        "lat": 41.286671
      },
      "name": "Samsun",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.694172,
        "lat": 41.250832
      },
      "name": "Safranbolu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.521938,
        "lat": 41.020828
      },
      "name": "Rize",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.01417,
        "lat": 40.35722
      },
      "name": "Osmaneli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.804699,
        "lat": 40.97818
      },
      "name": "Osmancik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.308889,
        "lat": 40.48917
      },
      "name": "Orhangazi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.878891,
        "lat": 40.984718
      },
      "name": "Ordu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.001259,
        "lat": 40.549831
      },
      "name": "Oltu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.26746,
        "lat": 40.94458
      },
      "name": "Of",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.951672,
        "lat": 40.591671
      },
      "name": "Niksar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.351789,
        "lat": 40.185928
      },
      "name": "Nallihan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.882219,
        "lat": 40.375278
      },
      "name": "Mudanya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.53768,
        "lat": 41.003151
      },
      "name": "Mimarsinan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.463058,
        "lat": 40.873329
      },
      "name": "Merzifon",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.155069,
        "lat": 40.935669
      },
      "name": "Maltepe",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.90111,
        "lat": 40.889999
      },
      "name": "Malkara",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.35918,
        "lat": 41.403851
      },
      "name": "Luleburgaz",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.263889,
        "lat": 40.874439
      },
      "name": "Kumru",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.346668,
        "lat": 40.824718
      },
      "name": "Korgan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.852779,
        "lat": 41.05336
      },
      "name": "Kocaali",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.650558,
        "lat": 40.469719
      },
      "name": "Kizilcahamam",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.22521,
        "lat": 41.735081
      },
      "name": "Kirklareli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.21237,
        "lat": 40.19828
      },
      "name": "Kestel",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.63028,
        "lat": 40.855831
      },
      "name": "Kesan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.436069,
        "lat": 40.12978
      },
      "name": "Kelkit",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.683891,
        "lat": 40.23167
      },
      "name": "Kazan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.33172,
        "lat": 41.092579
      },
      "name": "Kavakli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.77528,
        "lat": 41.378052
      },
      "name": "Kastamonu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.094952,
        "lat": 40.60199
      },
      "name": "Kars",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.785431,
        "lat": 41.070961
      },
      "name": "Karasu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.615681,
        "lat": 40.691441
      },
      "name": "Karamursel",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.40378,
        "lat": 40.215248
      },
      "name": "Karacabey",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.627682,
        "lat": 41.20488
      },
      "name": "Karabuk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 43.134239,
        "lat": 40.156689
      },
      "name": "Kagizman",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.721109,
        "lat": 40.428612
      },
      "name": "Iznik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.916941,
        "lat": 40.766941
      },
      "name": "Izmit",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.983311,
        "lat": 41.03508
      },
      "name": "İstanbul",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.949659,
        "lat": 41.01384
      },
      "name": "Istanbul",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.473888,
        "lat": 40.735279
      },
      "name": "Iskilip",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.51333,
        "lat": 40.07806
      },
      "name": "Inegeul",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.172779,
        "lat": 40.04583
      },
      "name": "Horasan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.43787,
        "lat": 41.405972
      },
      "name": "Hopa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.74806,
        "lat": 40.799438
      },
      "name": "Hendek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.10688,
        "lat": 41.213112
      },
      "name": "Hayrabolu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.66222,
        "lat": 40.970558
      },
      "name": "Havza",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.19487,
        "lat": 40.218761
      },
      "name": "Gursu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.61528,
        "lat": 40.99028
      },
      "name": "Gurpinar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.601669,
        "lat": 40.78833
      },
      "name": "Gurgentepe",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.481392,
        "lat": 40.460281
      },
      "name": "Gumushkhane",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.003059,
        "lat": 41.03083
      },
      "name": "Gorele",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.65399,
        "lat": 40.1049
      },
      "name": "Gonen",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.828609,
        "lat": 40.716671
      },
      "name": "Geulzuk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.387409,
        "lat": 40.916981
      },
      "name": "Giresun",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.2925,
        "lat": 40.5075
      },
      "name": "Geyve",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.196941,
        "lat": 40.800831
      },
      "name": "Gerede",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.159691,
        "lat": 40.430939
      },
      "name": "Gemlik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.67083,
        "lat": 40.410278
      },
      "name": "Gelibolu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.430679,
        "lat": 40.802761
      },
      "name": "Gebze",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.48583,
        "lat": 40.940819
      },
      "name": "Ferizli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 37.501389,
        "lat": 41.027779
      },
      "name": "Fatsa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.67528,
        "lat": 41.033329
      },
      "name": "Esenyurt",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.87619,
        "lat": 41.043499
      },
      "name": "Esenler",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.41806,
        "lat": 41.282619
      },
      "name": "Eregli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.79348,
        "lat": 40.399601
      },
      "name": "Erdek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.567501,
        "lat": 40.668892
      },
      "name": "Erbaa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.555969,
        "lat": 41.677189
      },
      "name": "Edirne",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.163891,
        "lat": 40.83889
      },
      "name": "Duzce",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.95583,
        "lat": 41.21917
      },
      "name": "Devrek",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.032219,
        "lat": 40.238609
      },
      "name": "Cubuk",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.953331,
        "lat": 40.548889
      },
      "name": "Corum",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.799999,
        "lat": 41.159168
      },
      "name": "Corlu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.00028,
        "lat": 41.285
      },
      "name": "Cerkezkoy",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.893581,
        "lat": 40.811642
      },
      "name": "Cerkes",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.72924,
        "lat": 41.092281
      },
      "name": "Cayeli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.075562,
        "lat": 41.426392
      },
      "name": "Caycuma",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.46154,
        "lat": 41.143242
      },
      "name": "Catalca",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 36.721939,
        "lat": 41.198891
      },
      "name": "Carsamba",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 33.615299,
        "lat": 40.599949
      },
      "name": "Khanjarah",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 26.406389,
        "lat": 40.145561
      },
      "name": "Canakkale",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.052361,
        "lat": 40.033279
      },
      "name": "Can",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.06111,
        "lat": 40.191669
      },
      "name": "Bursa",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 38.229069,
        "lat": 40.937168
      },
      "name": "Bulancak",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.76667,
        "lat": 41.468891
      },
      "name": "Boyabat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.60611,
        "lat": 40.735828
      },
      "name": "Bolu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 29.979321,
        "lat": 40.141918
      },
      "name": "Bilecik",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.24222,
        "lat": 40.228062
      },
      "name": "Biga",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.92111,
        "lat": 40.1675
      },
      "name": "Beypazari",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.228439,
        "lat": 41.051991
      },
      "name": "Besikduzu",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.227779,
        "lat": 40.258888
      },
      "name": "Bayburt",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 32.337502,
        "lat": 41.63583
      },
      "name": "Bartin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.976669,
        "lat": 40.352219
      },
      "name": "Bandirma",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 28.85671,
        "lat": 41.039028
      },
      "name": "Bagcilar",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.90694,
        "lat": 41.56778
      },
      "name": "Bafra",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 27.09306,
        "lat": 41.432499
      },
      "name": "Babaeski",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.819439,
        "lat": 41.18222
      },
      "name": "Artvin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.927559,
        "lat": 40.949581
      },
      "name": "Arsin",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 41.306938,
        "lat": 41.349171
      },
      "name": "Arhavi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.987499,
        "lat": 41.191109
      },
      "name": "Ardesen",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 42.702221,
        "lat": 41.108711
      },
      "name": "Ardahan",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 40.058418,
        "lat": 40.938541
      },
      "name": "Arakli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 35.833061,
        "lat": 40.653332
      },
      "name": "Amasya",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.379169,
        "lat": 41.169399
      },
      "name": "Alapli",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 34.842499,
        "lat": 40.168331
      },
      "name": "Alaca",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.622219,
        "lat": 40.685001
      },
      "name": "Akyazi",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 31.11623,
        "lat": 41.086632
      },
      "name": "Akcakoca",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 39.571461,
        "lat": 41.021198
      },
      "name": "Akcaabat",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 30.40333,
        "lat": 40.78056
      },
      "name": "Adapazari",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 20.44599,
        "lat": 52.048801
      },
      "name": "Zyrardow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.160179,
        "lat": 52.303761
      },
      "name": "Zielonka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.251961,
        "lat": 50.723141
      },
      "name": "Zamosc",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.243191,
        "lat": 52.9855
      },
      "name": "Zambrow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.105391,
        "lat": 52.292709
      },
      "name": "Zabki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.458401,
        "lat": 52.592781
      },
      "name": "Wyszkow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.242069,
        "lat": 52.340061
      },
      "name": "Wolomin",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.06473,
        "lat": 49.987381
      },
      "name": "Wieliczka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.01178,
        "lat": 52.229771
      },
      "name": "Warsaw",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.008551,
        "lat": 51.531311
      },
      "name": "Tomaszow Mazowiecki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.416161,
        "lat": 50.44767
      },
      "name": "Tomaszow Lubelski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.98698,
        "lat": 50.013809
      },
      "name": "Tarnow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.679371,
        "lat": 50.57304
      },
      "name": "Tarnobrzeg",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.987471,
        "lat": 53.562592
      },
      "name": "Szczytno",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.696211,
        "lat": 51.218979
      },
      "name": "Swidnik",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.93087,
        "lat": 54.111752
      },
      "name": "Suwalki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.26902,
        "lat": 52.252209
      },
      "name": "Sulejowek",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.16593,
        "lat": 50.563068
      },
      "name": "Staszow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.07126,
        "lat": 51.037399
      },
      "name": "Starachowice",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.053341,
        "lat": 50.582859
      },
      "name": "Stalowa Wola",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.253071,
        "lat": 52.406769
      },
      "name": "Sokolow Podlaski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.502279,
        "lat": 53.40715
      },
      "name": "Sokolka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.23838,
        "lat": 52.229439
      },
      "name": "Sochaczew",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.158369,
        "lat": 51.954849
      },
      "name": "Skierniewice",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.87162,
        "lat": 51.11311
      },
      "name": "Skarzysko-Kamienna",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.86231,
        "lat": 52.427189
      },
      "name": "Siemiatycze",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.29006,
        "lat": 52.167721
      },
      "name": "Siedlce",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.205601,
        "lat": 49.555729
      },
      "name": "Sanok",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.74898,
        "lat": 50.682652
      },
      "name": "Sandomierz",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.99901,
        "lat": 50.041321
      },
      "name": "Rzeszow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.60891,
        "lat": 50.052292
      },
      "name": "Ropczyce",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.25493,
        "lat": 51.76437
      },
      "name": "Rawa Mazowiecka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.616671,
        "lat": 51.783329
      },
      "name": "Radzyn Podlaski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.147141,
        "lat": 51.402531
      },
      "name": "Radom",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.08276,
        "lat": 52.702499
      },
      "name": "Pultusk",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.969391,
        "lat": 51.41655
      },
      "name": "Pulawy",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.49408,
        "lat": 50.05912
      },
      "name": "Przeworsk",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.767281,
        "lat": 49.784981
      },
      "name": "Przemysl",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.880289,
        "lat": 53.01907
      },
      "name": "Przasnysz",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.81214,
        "lat": 52.170719
      },
      "name": "Pruszkow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.375521,
        "lat": 52.623482
      },
      "name": "Plonsk",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.812531,
        "lat": 53.627441
      },
      "name": "Pisz",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.449949,
        "lat": 51.47604
      },
      "name": "Pionki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.83952,
        "lat": 52.184349
      },
      "name": "Piastow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.02397,
        "lat": 52.081402
      },
      "name": "Piaseczno",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.26129,
        "lat": 52.10577
      },
      "name": "Otwock",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.895069,
        "lat": 52.802448
      },
      "name": "Ostrow Mazowiecka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.38525,
        "lat": 50.929359
      },
      "name": "Ostrowiec Swietokrzyski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.575661,
        "lat": 53.086208
      },
      "name": "Ostroleka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.278271,
        "lat": 51.37569
      },
      "name": "Opoczno",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.49416,
        "lat": 53.779949
      },
      "name": "Olsztyn",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.50704,
        "lat": 54.033741
      },
      "name": "Olecko",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.03228,
        "lat": 49.477829
      },
      "name": "Nowy Targ",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.69705,
        "lat": 49.621769
      },
      "name": "Nowy Sacz",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.71652,
        "lat": 52.430222
      },
      "name": "Nowy Dwor Mazowiecki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.139681,
        "lat": 50.519871
      },
      "name": "Nisko",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.305071,
        "lat": 53.864368
      },
      "name": "Mragowo",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.3841,
        "lat": 53.112782
      },
      "name": "Mlawa",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.57251,
        "lat": 52.179352
      },
      "name": "Minsk Mazowiecki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.671551,
        "lat": 52.11879
      },
      "name": "Milanowek",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.423901,
        "lat": 50.28709
      },
      "name": "Mielec",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.78248,
        "lat": 51.986401
      },
      "name": "Miedzyrzec Podlaski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.10474,
        "lat": 52.320648
      },
      "name": "Marki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.37956,
        "lat": 51.929001
      },
      "name": "Lukow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.566669,
        "lat": 51.25
      },
      "name": "Lublin",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.60952,
        "lat": 51.460258
      },
      "name": "Lubartow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.059349,
        "lat": 53.178059
      },
      "name": "Lomza",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.886021,
        "lat": 52.334129
      },
      "name": "Lomianki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.57954,
        "lat": 54.125881
      },
      "name": "Lidzbark Warminski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.92664,
        "lat": 52.401489
      },
      "name": "Legionowo",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.88135,
        "lat": 51.301208
      },
      "name": "Leczna",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.88422,
        "lat": 52.9911
      },
      "name": "Lapy",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.22912,
        "lat": 50.06871
      },
      "name": "Lancut",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.77058,
        "lat": 49.68866
      },
      "name": "Krosno",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.1742,
        "lat": 50.984638
      },
      "name": "Krasnystaw",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.22706,
        "lat": 50.923599
      },
      "name": "Krasnik",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.547791,
        "lat": 51.582939
      },
      "name": "Kozienice",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.117611,
        "lat": 52.0938
      },
      "name": "Konstancin-Jeziorna",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.406071,
        "lat": 51.191662
      },
      "name": "Konskie",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.19589,
        "lat": 52.339531
      },
      "name": "Kobylka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.62752,
        "lat": 50.870331
      },
      "name": "Kielce",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.375271,
        "lat": 54.076759
      },
      "name": "Ketrzyn",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.08148,
        "lat": 52.130119
      },
      "name": "Kabaty",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.235889,
        "lat": 52.13707
      },
      "name": "Jozefow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.304541,
        "lat": 50.63945
      },
      "name": "Jedrzejow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.472521,
        "lat": 49.74506
      },
      "name": "Jaslo",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.677759,
        "lat": 50.016232
      },
      "name": "Jaroslaw",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.892509,
        "lat": 50.805019
      },
      "name": "Hrubieszow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.581221,
        "lat": 52.743279
      },
      "name": "Hajnowka",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.633699,
        "lat": 52.10387
      },
      "name": "Grodzisk Mazowiecki",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.45537,
        "lat": 53.647282
      },
      "name": "Grajewo",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.160351,
        "lat": 49.655628
      },
      "name": "Gorlice",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.76441,
        "lat": 54.038109
      },
      "name": "Gizycko",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.49551,
        "lat": 54.081341
      },
      "name": "Gierloz",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.61466,
        "lat": 51.897469
      },
      "name": "Garwolin",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.364691,
        "lat": 53.828239
      },
      "name": "Elk",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.17004,
        "lat": 53.239578
      },
      "name": "Dzialdowo",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.848289,
        "lat": 51.55912
      },
      "name": "Deblin",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 21.411409,
        "lat": 50.05146
      },
      "name": "Debica",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.619961,
        "lat": 52.881409
      },
      "name": "Ciechanow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.4716,
        "lat": 51.14312
      },
      "name": "Chelm",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.71884,
        "lat": 50.470779
      },
      "name": "Busko-Zdroj",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.60606,
        "lat": 49.969109
      },
      "name": "Brzesko",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.430281,
        "lat": 49.969051
      },
      "name": "Bochnia",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.72204,
        "lat": 50.541142
      },
      "name": "Bilgoraj",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.18647,
        "lat": 52.765121
      },
      "name": "Bielsk Podlaski",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.15,
        "lat": 53.133331
      },
      "name": "Bialystok",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 23.11652,
        "lat": 52.032379
      },
      "name": "Biala Podlaska",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.808189,
        "lat": 54.25354
      },
      "name": "Bartoszyce",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 22.97979,
        "lat": 53.843208
      },
      "name": "Augustow",
      "country": "PL"
    },
    {
      "coord": {
        "lon": 20.42194,
        "lat": 42.076939
      },
      "name": "Kukes",
      "country": "AL"
    },
    {
      "coord": {
        "lon": 20.78083,
        "lat": 40.61861
      },
      "name": "Korce",
      "country": "AL"
    },
    {
      "coord": {
        "lon": 20.138889,
        "lat": 40.075829
      },
      "name": "Gjirokaster",
      "country": "AL"
    },
    {
      "coord": {
        "lon": 20.08222,
        "lat": 41.112499
      },
      "name": "Elbasan",
      "country": "AL"
    },
    {
      "coord": {
        "lon": 20.00889,
        "lat": 41.610279
      },
      "name": "Burrel",
      "country": "AL"
    },
    {
      "coord": {
        "lon": 20.381941,
        "lat": 45.38361
      },
      "name": "Zrenjanin",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.40111,
        "lat": 44.84306
      },
      "name": "Zemun",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.064171,
        "lat": 41.980282
      },
      "name": "Zhelino",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.26405,
        "lat": 43.90358
      },
      "name": "Zajecar",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.967501,
        "lat": 42.823059
      },
      "name": "Vushtrri",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.30361,
        "lat": 45.116669
      },
      "name": "Vrsac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.90028,
        "lat": 42.551392
      },
      "name": "Vranje",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 22.509171,
        "lat": 41.882778
      },
      "name": "Vinica",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.155279,
        "lat": 42.37056
      },
      "name": "Ferizaj",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.002501,
        "lat": 43.61694
      },
      "name": "Trstenik",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.77556,
        "lat": 41.715561
      },
      "name": "Veles",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.97139,
        "lat": 42.010559
      },
      "name": "Tetovo",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.0525,
        "lat": 42.07444
      },
      "name": "Tearce",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.825001,
        "lat": 42.358608
      },
      "name": "Suva Reka",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.53056,
        "lat": 41.915829
      },
      "name": "Studenichani",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.64333,
        "lat": 41.4375
      },
      "name": "Strumica",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.676109,
        "lat": 41.178059
      },
      "name": "Struga",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.195829,
        "lat": 41.745831
      },
      "name": "Shtip",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.039721,
        "lat": 42.43306
      },
      "name": "Shtime",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 20.16083,
        "lat": 44.985001
      },
      "name": "Stara Pazova",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.392321,
        "lat": 44.676529
      },
      "name": "Sremcica",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.958851,
        "lat": 44.365479
      },
      "name": "Smederevska Palanka",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.93,
        "lat": 44.662781
      },
      "name": "Smederevo",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.433331,
        "lat": 42.0
      },
      "name": "Skopje",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.077221,
        "lat": 45.927502
      },
      "name": "Senta",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.32778,
        "lat": 42.0
      },
      "name": "Saraj",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.01222,
        "lat": 41.08889
      },
      "name": "Resen",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.46472,
        "lat": 41.638329
      },
      "name": "Radovish",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.58806,
        "lat": 43.234169
      },
      "name": "Prokuplje",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.739719,
        "lat": 42.21389
      },
      "name": "Prizren",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.16688,
        "lat": 42.672722
      },
      "name": "Pristina",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.55444,
        "lat": 41.34639
      },
      "name": "Prilep",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.182501,
        "lat": 44.61528
      },
      "name": "Pozarevac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.19306,
        "lat": 42.910561
      },
      "name": "Podujeva",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 22.586109,
        "lat": 43.153061
      },
      "name": "Pirot",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.28828,
        "lat": 42.65913
      },
      "name": "Peje",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 20.64028,
        "lat": 44.870831
      },
      "name": "Pancevo",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.65472,
        "lat": 42.399441
      },
      "name": "Orahovac",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 20.801941,
        "lat": 41.117222
      },
      "name": "Ohrid",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.200171,
        "lat": 44.654861
      },
      "name": "Obrenovac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.51222,
        "lat": 43.136669
      },
      "name": "Novi Pazar",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.219311,
        "lat": 44.943661
      },
      "name": "bar",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.90333,
        "lat": 43.324718
      },
      "name": "Nis",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.88389,
        "lat": 41.878609
      },
      "name": "Negotino",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.08917,
        "lat": 41.483891
      },
      "name": "Negotino",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.53083,
        "lat": 44.226391
      },
      "name": "Negotin",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.76333,
        "lat": 42.555279
      },
      "name": "Llazice",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.585279,
        "lat": 42.156391
      },
      "name": "Lipkovo",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.94611,
        "lat": 42.998058
      },
      "name": "Leskovac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.80278,
        "lat": 43.103889
      },
      "name": "Leposaviq",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 20.255699,
        "lat": 44.385342
      },
      "name": "Lazarevac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.714439,
        "lat": 42.132221
      },
      "name": "Kumanovo",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.333891,
        "lat": 43.580002
      },
      "name": "Krusevac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 22.33194,
        "lat": 42.201939
      },
      "name": "Kriva Palanka",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.68944,
        "lat": 43.72583
      },
      "name": "Kraljevo",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.91667,
        "lat": 44.01667
      },
      "name": "Kragujevac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.866671,
        "lat": 42.883331
      },
      "name": "Mitrovice",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.096109,
        "lat": 42.639439
      },
      "name": "Kosovo Polje",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 22.412781,
        "lat": 41.916389
      },
      "name": "Kochani",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.465281,
        "lat": 45.82972
      },
      "name": "Kikinda",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.963329,
        "lat": 41.514439
      },
      "name": "Kicevo",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.01194,
        "lat": 41.43306
      },
      "name": "Kavadarci",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.92667,
        "lat": 41.944439
      },
      "name": "Kamenjane",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.26222,
        "lat": 43.981392
      },
      "name": "Jagodina",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.487499,
        "lat": 42.78083
      },
      "name": "Istok",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 20.07917,
        "lat": 45.049171
      },
      "name": "Ingija",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.908331,
        "lat": 41.797218
      },
      "name": "Gostivar",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.450001,
        "lat": 44.033329
      },
      "name": "Gornji Milanovac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 21.46986,
        "lat": 42.460449
      },
      "name": "Gjilan",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 21.316389,
        "lat": 44.039719
      },
      "name": "Glogovac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 22.502501,
        "lat": 41.139172
      },
      "name": "Gevgelija",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.65333,
        "lat": 42.0625
      },
      "name": "Dragash",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 22.76944,
        "lat": 41.96722
      },
      "name": "Delchevo",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.28793,
        "lat": 42.54018
      },
      "name": "Decan",
      "country": "XK"
    },
    {
      "coord": {
        "lon": 20.5275,
        "lat": 41.525002
      },
      "name": "Debar",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.370001,
        "lat": 43.927502
      },
      "name": "Cuprija",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.34972,
        "lat": 43.891392
      },
      "name": "Cacak",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.980829,
        "lat": 41.96722
      },
      "name": "Brvenica",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 22.09528,
        "lat": 44.078331
      },
      "name": "Bor",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.91361,
        "lat": 41.923611
      },
      "name": "Bogovinje",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 21.340281,
        "lat": 41.031109
      },
      "name": "Bitola",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 20.46513,
        "lat": 44.804008
      },
      "name": "Belgrade",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.03331,
        "lat": 45.616322
      },
      "name": "Becej",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 20.559999,
        "lat": 44.306938
      },
      "name": "Arangelovac",
      "country": "RS"
    },
    {
      "coord": {
        "lon": 44.222221,
        "lat": 43.042221
      },
      "name": "Alagir",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.418331,
        "lat": 47.52972
      },
      "name": "Persianovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 39.668888,
        "lat": 43.670277
      },
      "name": "Dagomys",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 49.964439,
        "lat": 40.421669
      },
      "name": "Bakixanov",
      "country": "AZ"
    },
    {
      "coord": {
        "lon": 42.597599,
        "lat": 42.34129
      },
      "name": "Tsqaltubo",
      "country": "GE"
    },
    {
      "coord": {
        "lon": 36.583328,
        "lat": 50.583328
      },
      "name": "Gorod Belgorod",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 43.091202,
        "lat": 55.968601
      },
      "name": "Pavlovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 48.412472,
        "lat": 41.891842
      },
      "name": "Belidzhi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 59.802219,
        "lat": 58.636669
      },
      "name": "Lesnoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 58.459171,
        "lat": 54.814999
      },
      "name": "Trekhgornyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 40.33746,
        "lat": 62.764091
      },
      "name": "Mirnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 45.733799,
        "lat": 48.584202
      },
      "name": "Znamensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 46.583328,
        "lat": 53.133331
      },
      "name": "Zarechnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 38.711479,
        "lat": 40.947941
      },
      "name": "Espiye",
      "country": "TR"
    },
    {
      "coord": {
        "lon": 21.58222,
        "lat": 41.996109
      },
      "name": "Ilinden",
      "country": "MK"
    },
    {
      "coord": {
        "lon": 41.84528,
        "lat": 44.644169
      },
      "name": "Kochubeyevskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.296108,
        "lat": 55.611938
      },
      "name": "Vnukovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 37.35495,
        "lat": 55.59911
      },
      "name": "Moskovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 57.528061,
        "lat": 65.993889
      },
      "name": "Usinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 44.589439,
        "lat": 43.54417
      },
      "name": "Staryy Malgobek",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 22.224661,
        "lat": -10.70727
      },
      "name": "Luau",
      "country": "AO"
    },
    {
      "coord": {
        "lon": 24.26667,
        "lat": -17.5
      },
      "name": "Katima Mulilo",
      "country": "NA"
    },
    {
      "coord": {
        "lon": 35.033329,
        "lat": -11.3
      },
      "name": "Tingi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.633331,
        "lat": -10.75
      },
      "name": "Tandahimba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.650002,
        "lat": -10.68333
      },
      "name": "Songea",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.283329,
        "lat": -10.33333
      },
      "name": "Nyangao",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.283329,
        "lat": -10.95
      },
      "name": "Newala Kisimani",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.833328,
        "lat": -10.68333
      },
      "name": "Nanyamba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.5,
        "lat": -10.9
      },
      "name": "Nangomba",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.150002,
        "lat": -10.38333
      },
      "name": "Nanganga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.76667,
        "lat": -10.38333
      },
      "name": "Nachingwea",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 40.183331,
        "lat": -10.26667
      },
      "name": "Mtwara",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.01667,
        "lat": -10.93333
      },
      "name": "Mbinga",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 34.900002,
        "lat": -10.75
      },
      "name": "Matiri",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.799999,
        "lat": -10.71667
      },
      "name": "Masasi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.400002,
        "lat": -10.58333
      },
      "name": "Maposeni",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 38.799999,
        "lat": -10.56667
      },
      "name": "Lukuledi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.333328,
        "lat": -10.9
      },
      "name": "Luchingu",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.716671,
        "lat": -10.0
      },
      "name": "Lindi",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 39.73333,
        "lat": -10.71667
      },
      "name": "Kitama",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 35.049999,
        "lat": -10.8
      },
      "name": "Kigonsera",
      "country": "TZ"
    },
    {
      "coord": {
        "lon": 30.066481,
        "lat": -20.32674
      },
      "name": "Zvishavane",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 25.842991,
        "lat": -17.923531
      },
      "name": "Victoria Falls",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 30.00589,
        "lat": -19.67016
      },
      "name": "Shurugwi",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 32.128429,
        "lat": -18.527849
      },
      "name": "Rusape",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 29.783331,
        "lat": -19.033331
      },
      "name": "Redcliff",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 30.700001,
        "lat": -17.883329
      },
      "name": "Norton",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 32.67086,
        "lat": -18.970699
      },
      "name": "Mutare",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 30.82766,
        "lat": -20.06373
      },
      "name": "Masvingo",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 31.551929,
        "lat": -18.18527
      },
      "name": "Marondera",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 29.814859,
        "lat": -18.928101
      },
      "name": "Kwekwe",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 29.692471,
        "lat": -16.809931
      },
      "name": "Karoi",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 28.799999,
        "lat": -16.51667
      },
      "name": "Kariba",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 29.91534,
        "lat": -18.333281
      },
      "name": "Kadoma",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 26.50194,
        "lat": -18.36927
      },
      "name": "Hwange",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 31.05389,
        "lat": -17.82935
      },
      "name": "Harare",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 29.816669,
        "lat": -19.450001
      },
      "name": "Gweru",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 28.9349,
        "lat": -18.20476
      },
      "name": "Gokwe",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 31.66667,
        "lat": -21.049999
      },
      "name": "Chiredzi",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 32.623638,
        "lat": -20.18833
      },
      "name": "Chipinge",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 30.200001,
        "lat": -17.366671
      },
      "name": "Chinhoyi",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 30.140739,
        "lat": -18.130211
      },
      "name": "Chegutu",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 28.58333,
        "lat": -20.15
      },
      "name": "Bulawayo",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 31.330561,
        "lat": -17.30192
      },
      "name": "Bindura",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 30.0,
        "lat": -22.216669
      },
      "name": "Beitbridge",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 28.708759,
        "lat": -16.538179
      },
      "name": "Siavonga",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 24.296841,
        "lat": -17.475929
      },
      "name": "Sesheke",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 29.55652,
        "lat": -11.36491
      },
      "name": "Samfya",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 31.3253,
        "lat": -14.24264
      },
      "name": "Petauke",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.636589,
        "lat": -12.95867
      },
      "name": "Ndola",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 27.06188,
        "lat": -14.97832
      },
      "name": "Mumbwa",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.240709,
        "lat": -12.54982
      },
      "name": "Mufulira",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 31.452869,
        "lat": -11.83431
      },
      "name": "Mpika",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 27.48333,
        "lat": -16.283331
      },
      "name": "Monze",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 23.127411,
        "lat": -15.24835
      },
      "name": "Mongu",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 27.747999,
        "lat": -15.85601
      },
      "name": "Mazabuka",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.89431,
        "lat": -11.19976
      },
      "name": "Mansa",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.28713,
        "lat": -15.40669
      },
      "name": "Lusaka",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.416611,
        "lat": -13.13667
      },
      "name": "Luanshya",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 25.85425,
        "lat": -17.84194
      },
      "name": "Livingstone",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.247669,
        "lat": -12.79614
      },
      "name": "Kitwe",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 31.18084,
        "lat": -10.21289
      },
      "name": "Kasama",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.680861,
        "lat": -13.96518
      },
      "name": "Kapiri Mposhi",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 26.427271,
        "lat": -12.09514
      },
      "name": "Kansanshi",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.091921,
        "lat": -12.83778
      },
      "name": "Kalulushi",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.18136,
        "lat": -15.76911
      },
      "name": "Kafue",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 28.44644,
        "lat": -14.4469
      },
      "name": "Kabwe",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 26.95306,
        "lat": -16.80648
      },
      "name": "Choma",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 32.650002,
        "lat": -13.63333
      },
      "name": "Chipata",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 27.88382,
        "lat": -12.52897
      },
      "name": "Chingola",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 27.822861,
        "lat": -12.36475
      },
      "name": "Chililabombwe",
      "country": "ZM"
    },
    {
      "coord": {
        "lon": 44.399441,
        "lat": -12.16672
      },
      "name": "Moutsamoudou",
      "country": "KM"
    },
    {
      "coord": {
        "lon": 43.255058,
        "lat": -11.70216
      },
      "name": "Moroni",
      "country": "KM"
    },
    {
      "coord": {
        "lon": 45.227219,
        "lat": -12.77944
      },
      "name": "Mamoudzou",
      "country": "YT"
    },
    {
      "coord": {
        "lon": 27.47938,
        "lat": -11.66089
      },
      "name": "Lubumbashi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 26.73333,
        "lat": -10.98139
      },
      "name": "Likasi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 25.46674,
        "lat": -10.71484
      },
      "name": "Kolwezi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 27.23333,
        "lat": -11.76667
      },
      "name": "Kipushi",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 26.596939,
        "lat": -10.87639
      },
      "name": "Kambove",
      "country": "CD"
    },
    {
      "coord": {
        "lon": 35.318802,
        "lat": -15.38596
      },
      "name": "Zomba",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 34.458698,
        "lat": -13.7804
      },
      "name": "Salima",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 33.85746,
        "lat": -11.01863
      },
      "name": "Rumphi",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 35.26199,
        "lat": -16.91995
      },
      "name": "Nsanje",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 34.296139,
        "lat": -12.92744
      },
      "name": "Nkhotakota",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 33.599998,
        "lat": -11.9
      },
      "name": "Mzimba",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 35.5,
        "lat": -16.03163
      },
      "name": "Mulanje",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 32.880192,
        "lat": -13.79841
      },
      "name": "Mchinji",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 35.264481,
        "lat": -14.47815
      },
      "name": "Mangochi",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 35.203529,
        "lat": -15.05064
      },
      "name": "Liwonde",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 33.787251,
        "lat": -13.96692
      },
      "name": "Lilongwe",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 33.48333,
        "lat": -13.03333
      },
      "name": "Kasungu",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 34.333221,
        "lat": -14.3779
      },
      "name": "Dedza",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 35.008541,
        "lat": -15.78499
      },
      "name": "Blantyre",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 34.95575,
        "lat": -14.97928
      },
      "name": "Balaka",
      "country": "MW"
    },
    {
      "coord": {
        "lon": 27.70027,
        "lat": -30.400009
      },
      "name": "Quthing",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 28.68936,
        "lat": -30.11537
      },
      "name": "Qachas Nek",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 27.47691,
        "lat": -30.151369
      },
      "name": "Mohales Hoek",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 27.48333,
        "lat": -29.316669
      },
      "name": "Maseru",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 27.9,
        "lat": -28.883329
      },
      "name": "Maputsoe",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 27.23744,
        "lat": -29.823
      },
      "name": "Mafeteng",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 28.04501,
        "lat": -28.871849
      },
      "name": "Leribe",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 28.249359,
        "lat": -28.76659
      },
      "name": "Butha-Buthe",
      "country": "LS"
    },
    {
      "coord": {
        "lon": 27.48333,
        "lat": -21.48333
      },
      "name": "Tonota",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.539749,
        "lat": -24.670139
      },
      "name": "Thamaga",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 26.716669,
        "lat": -22.383329
      },
      "name": "Serowe",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 27.849831,
        "lat": -21.979031
      },
      "name": "Selebi-Phikwe",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.86989,
        "lat": -24.87158
      },
      "name": "Ramotswa",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 27.125071,
        "lat": -22.546049
      },
      "name": "Palapye",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.42156,
        "lat": -24.771799
      },
      "name": "Mosopa",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.495081,
        "lat": -24.40659
      },
      "name": "Molepolole",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.865561,
        "lat": -24.62694
      },
      "name": "Mogoditshane",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 26.15,
        "lat": -24.41667
      },
      "name": "Mochudi",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 23.41667,
        "lat": -19.98333
      },
      "name": "Maun",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 26.814211,
        "lat": -23.104071
      },
      "name": "Mahalapye",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.66667,
        "lat": -25.216669
      },
      "name": "Lobatse",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.58333,
        "lat": -21.41667
      },
      "name": "Letlhakane",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.332741,
        "lat": -24.966749
      },
      "name": "Kanye",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.549999,
        "lat": -25.41667
      },
      "name": "Janeng",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 25.90859,
        "lat": -24.65451
      },
      "name": "Gaborone",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 27.507879,
        "lat": -21.16995
      },
      "name": "Francistown",
      "country": "BW"
    },
    {
      "coord": {
        "lon": 57.478329,
        "lat": -20.298059
      },
      "name": "Vacoas",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.54528,
        "lat": -20.05472
      },
      "name": "Triolet",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.520828,
        "lat": -20.217501
      },
      "name": "Saint Pierre",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.471939,
        "lat": -20.264441
      },
      "name": "Quatre Bornes",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.49889,
        "lat": -20.16194
      },
      "name": "Port Louis",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.700001,
        "lat": -20.40806
      },
      "name": "Mahebourg",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.643059,
        "lat": -20.035
      },
      "name": "Goodlands",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.520279,
        "lat": -20.31472
      },
      "name": "Curepipe",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.714439,
        "lat": -20.18972
      },
      "name": "Centre de Flacq",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 57.745281,
        "lat": -20.254169
      },
      "name": "Bel Air",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 31.133329,
        "lat": -26.316669
      },
      "name": "Mbabane",
      "country": "SZ"
    },
    {
      "coord": {
        "lon": 31.366671,
        "lat": -26.48333
      },
      "name": "Manzini",
      "country": "SZ"
    },
    {
      "coord": {
        "lon": 31.200001,
        "lat": -26.466669
      },
      "name": "Lobamba",
      "country": "SZ"
    },
    {
      "coord": {
        "lon": 55.478111,
        "lat": -21.3393
      },
      "name": "Saint-Pierre",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.27071,
        "lat": -21.00963
      },
      "name": "Saint-Paul",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.41124,
        "lat": -21.285851
      },
      "name": "Saint-Louis",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.288239,
        "lat": -21.170589
      },
      "name": "Saint-Leu",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.619179,
        "lat": -21.37838
      },
      "name": "Saint-Joseph",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.60886,
        "lat": -20.906139
      },
      "name": "Sainte-Suzanne",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.549599,
        "lat": -20.896839
      },
      "name": "Sainte-Marie",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.450401,
        "lat": -20.882311
      },
      "name": "Saint-Denis",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.719372,
        "lat": -21.03801
      },
      "name": "Saint-Benoit",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.650311,
        "lat": -20.963329
      },
      "name": "Saint-Andre",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.518021,
        "lat": -21.283091
      },
      "name": "Le Tampon",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.291889,
        "lat": -20.9373
      },
      "name": "Le Port",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 55.335129,
        "lat": -20.928921
      },
      "name": "La Possession",
      "country": "RE"
    },
    {
      "coord": {
        "lon": 27.872499,
        "lat": -26.1625
      },
      "name": "Roodepoort",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.075121,
        "lat": -25.536949
      },
      "name": "Zeerust",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.98311,
        "lat": -27.197399
      },
      "name": "Wolmaransstad",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.01166,
        "lat": -25.33177
      },
      "name": "White River",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.233231,
        "lat": -25.87133
      },
      "name": "Witbank",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.6486,
        "lat": -26.319059
      },
      "name": "Westonaria",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.365829,
        "lat": -27.8549
      },
      "name": "Wesselsbron",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.70661,
        "lat": -27.986441
      },
      "name": "Welkom",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.84753,
        "lat": -28.11396
      },
      "name": "Warrenton",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.283331,
        "lat": -24.883329
      },
      "name": "Warmbaths",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.791651,
        "lat": -27.76952
      },
      "name": "Vryheid",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.728399,
        "lat": -26.956591
      },
      "name": "Vryburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.88175,
        "lat": -27.365419
      },
      "name": "Volksrust",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.865931,
        "lat": -28.10391
      },
      "name": "Virginia",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.948549,
        "lat": -27.20841
      },
      "name": "Viljoenskroon",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.926149,
        "lat": -26.67313
      },
      "name": "Vereeniging",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.83795,
        "lat": -26.71171
      },
      "name": "Vanderbijlpark",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 21.256121,
        "lat": -28.44776
      },
      "name": "Upington",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.78443,
        "lat": -31.58893
      },
      "name": "Umtata",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.79776,
        "lat": -30.206739
      },
      "name": "Umkomaas",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.41617,
        "lat": -28.33523
      },
      "name": "Ulundi",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.3971,
        "lat": -33.757568
      },
      "name": "Uitenhage",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.163509,
        "lat": -23.83322
      },
      "name": "Tzaneen",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.48497,
        "lat": -22.945641
      },
      "name": "Thohoyandou",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.701071,
        "lat": -28.41098
      },
      "name": "Theunissen",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.83898,
        "lat": -29.20932
      },
      "name": "Thaba Nchu",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.226801,
        "lat": -25.996361
      },
      "name": "Tembisa",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.42396,
        "lat": -32.570759
      },
      "name": "Stutterheim",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.76829,
        "lat": -26.844931
      },
      "name": "Stilfontein",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.289539,
        "lat": -29.328159
      },
      "name": "Stanger",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.24152,
        "lat": -26.933661
      },
      "name": "Standerton",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.4,
        "lat": -26.25
      },
      "name": "Springs",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.85849,
        "lat": -26.267811
      },
      "name": "Soweto",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.588039,
        "lat": -32.721729
      },
      "name": "Somerset East",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.04454,
        "lat": -25.11319
      },
      "name": "Siyabuswa",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.620819,
        "lat": -28.31971
      },
      "name": "Senekal",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.16667,
        "lat": -26.549999
      },
      "name": "Secunda",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.75316,
        "lat": -30.286659
      },
      "name": "Scottburgh",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.329309,
        "lat": -27.188709
      },
      "name": "Schweizer-Reneke",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.81695,
        "lat": -26.81358
      },
      "name": "Sasolburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.242081,
        "lat": -25.667561
      },
      "name": "Rustenburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.27235,
        "lat": -29.87196
      },
      "name": "Richmond",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 32.037682,
        "lat": -28.78301
      },
      "name": "Richards Bay",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.427259,
        "lat": -27.80138
      },
      "name": "Reitz",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.70203,
        "lat": -26.184401
      },
      "name": "Randfontein",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.87533,
        "lat": -31.89756
      },
      "name": "Queenstown",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.978621,
        "lat": -31.87101
      },
      "name": "Queensdale",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.18783,
        "lat": -25.74486
      },
      "name": "Pretoria",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.009741,
        "lat": -24.194361
      },
      "name": "Mokopane",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.1,
        "lat": -26.716669
      },
      "name": "Potchefstroom",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.45499,
        "lat": -30.741369
      },
      "name": "Port Shepstone",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.57007,
        "lat": -33.917992
      },
      "name": "Port Elizabeth",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.891041,
        "lat": -33.590569
      },
      "name": "Port Alfred",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 23.371599,
        "lat": -34.052738
      },
      "name": "Plettenberg Bay",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.813231,
        "lat": -27.007059
      },
      "name": "Piet Retief",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.468849,
        "lat": -23.90448
      },
      "name": "Polokwane",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.39278,
        "lat": -29.616779
      },
      "name": "Pietermaritzburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.815821,
        "lat": -28.524229
      },
      "name": "Phuthaditjhaba",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.141069,
        "lat": -23.942989
      },
      "name": "Phalaborwa",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.45727,
        "lat": -26.903299
      },
      "name": "Parys",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.687679,
        "lat": -27.783239
      },
      "name": "Pampierstad",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 22.201401,
        "lat": -33.590672
      },
      "name": "Oudtshoorn",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.67272,
        "lat": -26.98023
      },
      "name": "Orkney",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.4,
        "lat": -24.700001
      },
      "name": "Modimolle",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.287081,
        "lat": -23.887819
      },
      "name": "Nkowakowa",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.477131,
        "lat": -26.431379
      },
      "name": "Nigel",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.931801,
        "lat": -27.757959
      },
      "name": "Newcastle",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.970329,
        "lat": -25.47448
      },
      "name": "Nelspruit",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.636459,
        "lat": -29.81292
      },
      "name": "Mpumalanga",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.18618,
        "lat": -29.56822
      },
      "name": "Mpophomeni",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.71769,
        "lat": -27.98299
      },
      "name": "Mondlo",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.633329,
        "lat": -25.85
      },
      "name": "Mmabatho",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.00633,
        "lat": -31.492849
      },
      "name": "Middelburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.464821,
        "lat": -25.77507
      },
      "name": "Middelburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.0396,
        "lat": -22.351311
      },
      "name": "Messina",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.37052,
        "lat": -30.8636
      },
      "name": "Margate",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.100651,
        "lat": -25.497681
      },
      "name": "Mabopane",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.459669,
        "lat": -25.097799
      },
      "name": "Lydenburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.903191,
        "lat": -23.04385
      },
      "name": "Louis Trichardt",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.159679,
        "lat": -26.152
      },
      "name": "Lichtenburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.5,
        "lat": -24.200001
      },
      "name": "Lebowakgomo",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.232901,
        "lat": -31.703119
      },
      "name": "Lady Frere",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.45739,
        "lat": -29.194481
      },
      "name": "Ladybrand",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.75,
        "lat": -27.83333
      },
      "name": "Kutloanong",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.731421,
        "lat": -34.00333
      },
      "name": "Kruisfontein",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.77515,
        "lat": -26.08577
      },
      "name": "Krugersdorp",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.23488,
        "lat": -27.65036
      },
      "name": "Kroonstad",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.2253,
        "lat": -26.273911
      },
      "name": "Kriel",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.954781,
        "lat": -25.433201
      },
      "name": "Komatipoort",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.42412,
        "lat": -30.54723
      },
      "name": "Kokstad",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 23.047131,
        "lat": -34.03627
      },
      "name": "Knysna",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.666719,
        "lat": -26.852131
      },
      "name": "Klerksdorp",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.76232,
        "lat": -28.73226
      },
      "name": "Kimberley",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.043631,
        "lat": -26.202271
      },
      "name": "Johannesburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.23057,
        "lat": -29.477949
      },
      "name": "Howick",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.024229,
        "lat": -27.97654
      },
      "name": "Hennenman",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.715281,
        "lat": -26.15881
      },
      "name": "Hendrina",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.9709,
        "lat": -27.281151
      },
      "name": "Heilbron",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.359209,
        "lat": -26.504761
      },
      "name": "Heidelberg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.129459,
        "lat": -28.27276
      },
      "name": "Harrismith",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.532761,
        "lat": -33.304218
      },
      "name": "Grahamstown",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.53075,
        "lat": -32.252151
      },
      "name": "Graaff-Reinet",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.718679,
        "lat": -23.30246
      },
      "name": "Giyani",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 22.461729,
        "lat": -33.963001
      },
      "name": "George",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.994711,
        "lat": -25.61692
      },
      "name": "Ga-Rankuwa",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.48333,
        "lat": -27.26667
      },
      "name": "Frankfort",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.63376,
        "lat": -32.774769
      },
      "name": "Fort Beaufort",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.49387,
        "lat": -26.488621
      },
      "name": "Fochville",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.899611,
        "lat": -28.87097
      },
      "name": "eSikhawini",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.98333,
        "lat": -26.533331
      },
      "name": "Ermelo",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.89329,
        "lat": -28.761971
      },
      "name": "Empangeni",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.066669,
        "lat": -26.533331
      },
      "name": "eMbalenhle",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.744261,
        "lat": -23.6649
      },
      "name": "Ellisras",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.911619,
        "lat": -33.015289
      },
      "name": "East London",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.0292,
        "lat": -29.857901
      },
      "name": "Durban",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.233709,
        "lat": -28.16678
      },
      "name": "Dundee",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.14002,
        "lat": -23.69339
      },
      "name": "Duiwelskloof",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 30.449789,
        "lat": -27.0177
      },
      "name": "Driefontein",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.68322,
        "lat": -26.146601
      },
      "name": "Delmas",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 24.0123,
        "lat": -30.64966
      },
      "name": "De Aar",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.52364,
        "lat": -25.670879
      },
      "name": "Cullinan",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.619181,
        "lat": -32.164219
      },
      "name": "Cradock",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.16111,
        "lat": -27.914021
      },
      "name": "Christiana",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.397671,
        "lat": -26.360941
      },
      "name": "Carletonville",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.149811,
        "lat": -32.33083
      },
      "name": "Butterworth",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.742479,
        "lat": -25.81015
      },
      "name": "Bronkhorstspruit",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.78022,
        "lat": -25.634729
      },
      "name": "Brits",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.369381,
        "lat": -26.236561
      },
      "name": "Brakpan",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.7052,
        "lat": -29.270161
      },
      "name": "Botshabelo",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.61701,
        "lat": -27.3887
      },
      "name": "Bothaville",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.259581,
        "lat": -26.211969
      },
      "name": "Boksburg",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 25.60697,
        "lat": -27.64686
      },
      "name": "Bloemhof",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.214001,
        "lat": -29.121059
      },
      "name": "Bloemfontein",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 27.442181,
        "lat": -32.84721
      },
      "name": "Bhisho",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.30707,
        "lat": -28.23078
      },
      "name": "Bethlehem",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 29.46553,
        "lat": -26.457939
      },
      "name": "Bethal",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.32078,
        "lat": -26.18848
      },
      "name": "Benoni",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 22.582951,
        "lat": -32.356709
      },
      "name": "Beaufort West",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.05319,
        "lat": -25.78842
      },
      "name": "Barberton",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.21439,
        "lat": -29.538971
      },
      "name": "Ballitoville",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.59016,
        "lat": -26.663309
      },
      "name": "Balfour",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.64382,
        "lat": -27.754311
      },
      "name": "Allanridge",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 26.711411,
        "lat": -30.693661
      },
      "name": "Aliwal North",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 33.644169,
        "lat": -25.051941
      },
      "name": "Xai-Xai",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 34.743061,
        "lat": -19.60944
      },
      "name": "Dondo",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 33.098888,
        "lat": -25.026939
      },
      "name": "Macia",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 33.58667,
        "lat": -16.156389
      },
      "name": "Tete",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 36.888329,
        "lat": -17.878611
      },
      "name": "Quelimane",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 40.51775,
        "lat": -12.97395
      },
      "name": "Pemba",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 39.266602,
        "lat": -15.11646
      },
      "name": "Nampula",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 40.672779,
        "lat": -14.54278
      },
      "name": "Cidade de Nacala",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 38.999722,
        "lat": -13.12556
      },
      "name": "Montepuez",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 40.349998,
        "lat": -11.31667
      },
      "name": "Mocimboa",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 40.735828,
        "lat": -15.03417
      },
      "name": "Ilha de Mocambique",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 35.347221,
        "lat": -23.85972
      },
      "name": "Maxixe",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 32.458889,
        "lat": -25.962219
      },
      "name": "Matola",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 32.589169,
        "lat": -25.965281
      },
      "name": "Maputo",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 33.882778,
        "lat": -24.71167
      },
      "name": "Manjacaze",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 35.240559,
        "lat": -13.31278
      },
      "name": "Lichinga",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 35.383331,
        "lat": -23.865
      },
      "name": "Inhambane",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 36.53722,
        "lat": -14.80306
      },
      "name": "Cuamba",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 32.98333,
        "lat": -24.533331
      },
      "name": "Chokwe",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 33.48333,
        "lat": -19.11639
      },
      "name": "Chimoio",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 33.53056,
        "lat": -24.68667
      },
      "name": "Chibuto",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 34.83889,
        "lat": -19.843611
      },
      "name": "Beira",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 39.908611,
        "lat": -16.2325
      },
      "name": "Antonio Enes",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 49.383331,
        "lat": -18.16667
      },
      "name": "Toamasina",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.283329,
        "lat": -22.816669
      },
      "name": "Vondrozo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.033329,
        "lat": -17.35
      },
      "name": "Vohibinany",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.200001,
        "lat": -17.466669
      },
      "name": "Vavatenina",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.599998,
        "lat": -23.35
      },
      "name": "Vangaindrano",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.033329,
        "lat": -18.76667
      },
      "name": "Tsiroanomandidy",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 45.48333,
        "lat": -25.299999
      },
      "name": "Tsiombe",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.650002,
        "lat": -16.783331
      },
      "name": "Tsaratanana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 43.666672,
        "lat": -23.35
      },
      "name": "Toliara",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.998741,
        "lat": -25.031851
      },
      "name": "Fort Dauphin",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.73333,
        "lat": -19.16667
      },
      "name": "Soavinandriana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.583328,
        "lat": -16.91667
      },
      "name": "Soanierana Ivongo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 50.166672,
        "lat": -14.26667
      },
      "name": "Sambava",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 44.533329,
        "lat": -22.9
      },
      "name": "Sakaraha",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.533329,
        "lat": -20.58333
      },
      "name": "Nosy Varika",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 44.283329,
        "lat": -20.283331
      },
      "name": "Morondava",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.200001,
        "lat": -18.933331
      },
      "name": "Moramanga",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 45.466671,
        "lat": -19.51667
      },
      "name": "Miandrivazo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.633331,
        "lat": -16.1
      },
      "name": "Marovoay",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.116669,
        "lat": -20.049999
      },
      "name": "Marolambo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.73333,
        "lat": -15.43333
      },
      "name": "Maroantsetra",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.799999,
        "lat": -18.91667
      },
      "name": "Manjakandriana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.333328,
        "lat": -21.216669
      },
      "name": "Mananjary",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.76667,
        "lat": -16.16667
      },
      "name": "Mananara Avaratra",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.01667,
        "lat": -22.133329
      },
      "name": "Manakara",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.799999,
        "lat": -19.9
      },
      "name": "Mahanoro",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.316669,
        "lat": -15.71667
      },
      "name": "Mahajanga",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.433331,
        "lat": -21.883329
      },
      "name": "Ikongo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.583328,
        "lat": -21.15
      },
      "name": "Ikalamavony",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.116669,
        "lat": -22.4
      },
      "name": "Ihosy",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.633331,
        "lat": -21.299999
      },
      "name": "Ifanadiana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.083328,
        "lat": -21.433331
      },
      "name": "Fianarantsoa",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.566669,
        "lat": -18.433331
      },
      "name": "Fenoarivo Be",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.416672,
        "lat": -17.366671
      },
      "name": "Fenoarivo Atsinanana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.950001,
        "lat": -19.4
      },
      "name": "Faratsiho",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.833328,
        "lat": -22.816669
      },
      "name": "Farafangana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.383331,
        "lat": -20.23333
      },
      "name": "Fandriana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 44.383331,
        "lat": -23.716669
      },
      "name": "Betioky",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.849998,
        "lat": -19.83333
      },
      "name": "Betafo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 45.166672,
        "lat": -21.66667
      },
      "name": "Beroroha",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 44.549999,
        "lat": -19.700001
      },
      "name": "Belo Tsiribihina",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 45.049999,
        "lat": -25.16667
      },
      "name": "Beloha",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.73333,
        "lat": -14.55
      },
      "name": "Bealanana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.183331,
        "lat": -19.01667
      },
      "name": "Arivonimamo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.987511,
        "lat": -14.87959
      },
      "name": "Antsohihy",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.29171,
        "lat": -12.2787
      },
      "name": "Antsiranana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.316669,
        "lat": -19.65
      },
      "name": "Antanifotsy",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.536129,
        "lat": -18.913679
      },
      "name": "Antananarivo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 50.278759,
        "lat": -14.90033
      },
      "name": "Antalaha",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.116669,
        "lat": -18.316669
      },
      "name": "Ankazobe",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 44.51667,
        "lat": -22.283331
      },
      "name": "Ankazoabo",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.866669,
        "lat": -18.4
      },
      "name": "Anjozorobe",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.26667,
        "lat": -13.4
      },
      "name": "Andoany",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.583328,
        "lat": -17.01667
      },
      "name": "Andilamena",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 49.650002,
        "lat": -14.65
      },
      "name": "Andapa",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.216671,
        "lat": -17.58333
      },
      "name": "Amparafaravola",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 44.75,
        "lat": -24.700001
      },
      "name": "Ampanihy",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.083328,
        "lat": -25.16667
      },
      "name": "Ambovombe",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.25,
        "lat": -20.51667
      },
      "name": "Ambositra",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.383331,
        "lat": -25.033331
      },
      "name": "Amboasary",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.416672,
        "lat": -17.83333
      },
      "name": "Ambatondrazaka",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 47.416672,
        "lat": -19.383329
      },
      "name": "Ambatolampy",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.799999,
        "lat": -20.549999
      },
      "name": "Ambatofinandrahana",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.716671,
        "lat": -16.466669
      },
      "name": "Ambato Boeny",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 48.450001,
        "lat": -13.68333
      },
      "name": "Ambanja",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 46.933331,
        "lat": -21.83333
      },
      "name": "Ambalavao",
      "country": "MG"
    },
    {
      "coord": {
        "lon": 31.147499,
        "lat": -17.889999
      },
      "name": "Epworth",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 37.00444,
        "lat": -14.87056
      },
      "name": "Mutuali",
      "country": "MZ"
    },
    {
      "coord": {
        "lon": 45.20417,
        "lat": -12.73361
      },
      "name": "Koungou",
      "country": "YT"
    },
    {
      "coord": {
        "lon": 28.74918,
        "lat": -25.69619
      },
      "name": "Ekangala",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.137779,
        "lat": -25.96361
      },
      "name": "Midrand",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 28.18577,
        "lat": -25.85891
      },
      "name": "Centurion",
      "country": "ZA"
    },
    {
      "coord": {
        "lon": 31.07555,
        "lat": -18.012739
      },
      "name": "Chitungwiza",
      "country": "ZW"
    },
    {
      "coord": {
        "lon": 57.521111,
        "lat": -20.135
      },
      "name": "Le Hochet",
      "country": "MU"
    },
    {
      "coord": {
        "lon": 67.99234,
        "lat": 24.38953
      },
      "name": "Chuhar Jamali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 61.501202,
        "lat": 31.0287
      },
      "name": "Zabol",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 98.400078,
        "lat": 7.88481
      },
      "name": "Ban Talat Yai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.872032,
        "lat": 12.27081
      },
      "name": "Sam Roi Yot",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 69.534508,
        "lat": 36.73605
      },
      "name": "Taloqan",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 62.1474,
        "lat": 33.30294
      },
      "name": "Shindand",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 65.752899,
        "lat": 36.667568
      },
      "name": "Shibirghan",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 64.305199,
        "lat": 34.10738
      },
      "name": "Shahrak",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 65.932487,
        "lat": 36.215439
      },
      "name": "Sar-e Pul",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 66.436943,
        "lat": 35.84972
      },
      "name": "Sang-e Charak",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.015511,
        "lat": 36.264679
      },
      "name": "Aibak",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.830452,
        "lat": 37.126041
      },
      "name": "Rustaq",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 66.043579,
        "lat": 37.41853
      },
      "name": "Qarqin",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.780411,
        "lat": 37.220188
      },
      "name": "Qarawul",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.715118,
        "lat": 35.94458
      },
      "name": "Pul-e Khumri",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.953331,
        "lat": 34.587502
      },
      "name": "Paghman",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.13343,
        "lat": 36.064899
      },
      "name": "Nahrin",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 64.783607,
        "lat": 35.921391
      },
      "name": "Maymana",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 70.209442,
        "lat": 34.671391
      },
      "name": "Mehtar Lam",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 67.11087,
        "lat": 36.709042
      },
      "name": "Mazar-e Sharif",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 64.371613,
        "lat": 31.593821
      },
      "name": "Lashkar Gah",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 61.952209,
        "lat": 33.29565
      },
      "name": "Kushk",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.857002,
        "lat": 36.728958
      },
      "name": "Kunduz",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.92041,
        "lat": 33.339512
      },
      "name": "Khost",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 67.698257,
        "lat": 36.697361
      },
      "name": "Khulm",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 62.79055,
        "lat": 31.52919
      },
      "name": "Khash",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.115562,
        "lat": 36.682499
      },
      "name": "Khanabad",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 62.5863,
        "lat": 34.481079
      },
      "name": "Karukh",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 65.710129,
        "lat": 31.613319
      },
      "name": "Kandahar",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.172333,
        "lat": 34.52813
      },
      "name": "Kabul",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 70.45153,
        "lat": 34.426472
      },
      "name": "Jalalabad",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.237778,
        "lat": 35.118328
      },
      "name": "Jabal os Saraj",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 62.199669,
        "lat": 34.348171
      },
      "name": "Herat",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 63.782639,
        "lat": 35.730621
      },
      "name": "Ghormach",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.426888,
        "lat": 33.553558
      },
      "name": "Ghazni",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 64.570053,
        "lat": 31.82089
      },
      "name": "Gereshk",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.225922,
        "lat": 33.597439
      },
      "name": "Gardez",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 70.580017,
        "lat": 37.116638
      },
      "name": "Fayzabad",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 62.116379,
        "lat": 32.374512
      },
      "name": "Farah",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 61.066669,
        "lat": 34.666672
      },
      "name": "Kafir Qala",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.171387,
        "lat": 35.013611
      },
      "name": "Charikar",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.948608,
        "lat": 33.967499
      },
      "name": "Baraki Barak",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 66.897202,
        "lat": 36.756351
      },
      "name": "Balkh",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 68.70829,
        "lat": 36.13068
      },
      "name": "Baghlan",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 69.479584,
        "lat": 37.085709
      },
      "name": "Art Khwajah",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 71.358093,
        "lat": 35.033329
      },
      "name": "Asmar",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 71.146973,
        "lat": 34.873112
      },
      "name": "Asadabad",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 65.123756,
        "lat": 36.95293
      },
      "name": "Andkhoy",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 99.944672,
        "lat": 13.11189
      },
      "name": "Phetchaburi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.611412,
        "lat": 7.55633
      },
      "name": "Trang",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.680389,
        "lat": 8.16453
      },
      "name": "Thung Song",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.216118,
        "lat": 17.61289
      },
      "name": "Thoen",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.891663,
        "lat": 15.46063
      },
      "name": "Thap Than",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.64122,
        "lat": 13.96118
      },
      "name": "Tha Muang",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.76667,
        "lat": 13.9
      },
      "name": "Tha Maka",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.128983,
        "lat": 16.86968
      },
      "name": "Tak",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.333107,
        "lat": 9.14011
      },
      "name": "Surat Thani",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.822998,
        "lat": 17.00778
      },
      "name": "Sukhothai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.759781,
        "lat": 17.51692
      },
      "name": "Si Satchanalai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.831863,
        "lat": 17.315969
      },
      "name": "Sawankhalok",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.895721,
        "lat": 18.628281
      },
      "name": "San Pa Tong",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.11953,
        "lat": 18.74486
      },
      "name": "San Kamphaeng",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.854248,
        "lat": 8.17911
      },
      "name": "Ron Phibun",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.817123,
        "lat": 13.53671
      },
      "name": "Ratchaburi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.634758,
        "lat": 9.96583
      },
      "name": "Ranong",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.909828,
        "lat": 12.38466
      },
      "name": "Pran Buri",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.784103,
        "lat": 11.82098
      },
      "name": "Prachuap Khiri Khan",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.232079,
        "lat": 9.11072
      },
      "name": "Phunphin",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.398102,
        "lat": 7.89059
      },
      "name": "Phuket",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.849693,
        "lat": 13.69234
      },
      "name": "Photharam",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.87883,
        "lat": 19.19203
      },
      "name": "Phayao",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.939362,
        "lat": 18.526171
      },
      "name": "Pa Sang",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.966667,
        "lat": 8.43333
      },
      "name": "Nakhon Si Thammarat",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.566673,
        "lat": 16.716669
      },
      "name": "Mae Sot",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.876167,
        "lat": 20.433531
      },
      "name": "Mae Sai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.516647,
        "lat": 16.98403
      },
      "name": "Mae Ramat",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.852562,
        "lat": 20.146749
      },
      "name": "Mae Chan",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.789253,
        "lat": 15.751
      },
      "name": "Lat Yao",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.078468,
        "lat": 9.94561
      },
      "name": "Lang Suan",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.007446,
        "lat": 18.58054
      },
      "name": "Lamphun",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.492767,
        "lat": 18.29232
      },
      "name": "Lampang",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.854309,
        "lat": 12.08283
      },
      "name": "Kui Buri",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.910522,
        "lat": 8.07257
      },
      "name": "Krabi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.82428,
        "lat": 13.24025
      },
      "name": "Khao Yoi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.86058,
        "lat": 16.061701
      },
      "name": "Khanu Woralaksaburi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.333221,
        "lat": 7.91779
      },
      "name": "Kathu",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.548317,
        "lat": 14.00412
      },
      "name": "Kanchanaburi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.52153,
        "lat": 16.48344
      },
      "name": "Kamphaeng Phet",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.634781,
        "lat": 7.78933
      },
      "name": "Huai Yot",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.958763,
        "lat": 12.57065
      },
      "name": "Hua Hin",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.919388,
        "lat": 18.687031
      },
      "name": "Hang Dong",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.993423,
        "lat": 19.16242
      },
      "name": "Dok Kham Tai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.954689,
        "lat": 13.51824
      },
      "name": "Damnoen Saduak",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.166672,
        "lat": 10.5
      },
      "name": "Chumphon",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.59169,
        "lat": 13.62
      },
      "name": "Chom Bueng",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.832497,
        "lat": 19.908581
      },
      "name": "Chiang Rai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 98.98468,
        "lat": 18.79038
      },
      "name": "Chiang Mai",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.966667,
        "lat": 12.8
      },
      "name": "Cha-am",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.516113,
        "lat": 14.32361
      },
      "name": "Bo Phloi",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.081284,
        "lat": 17.043249
      },
      "name": "Ban Tak",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.877388,
        "lat": 13.81629
      },
      "name": "Ban Pong",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.363724,
        "lat": 8.80036
      },
      "name": "Ban Na San",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.752502,
        "lat": 17.03056
      },
      "name": "Ban Na",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.511673,
        "lat": 11.21259
      },
      "name": "Bang Saphan",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 99.929817,
        "lat": 13.69157
      },
      "name": "Bang Phae",
      "country": "TH"
    },
    {
      "coord": {
        "lon": 60.8629,
        "lat": 29.4963
      },
      "name": "Zahedan",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 60.622501,
        "lat": 35.243999
      },
      "name": "Torbat-e Jam",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 60.7756,
        "lat": 34.740002
      },
      "name": "Taybad",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 61.1577,
        "lat": 36.544899
      },
      "name": "Sarakhs",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 61.21582,
        "lat": 28.221069
      },
      "name": "Khash",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 60.684761,
        "lat": 27.20245
      },
      "name": "Iranshahr",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 60.643002,
        "lat": 25.291901
      },
      "name": "Chah Bahar",
      "country": "IR"
    },
    {
      "coord": {
        "lon": 73.760429,
        "lat": 33.857819
      },
      "name": "Rawala Kot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.617859,
        "lat": 27.591021
      },
      "name": "Pir jo Goth",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.761703,
        "lat": 27.52948
      },
      "name": "Khairpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.448059,
        "lat": 31.34111
      },
      "name": "Zhob",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.467781,
        "lat": 34.06028
      },
      "name": "Zaida",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.524048,
        "lat": 28.812389
      },
      "name": "Zahir Pir",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.899872,
        "lat": 32.34631
      },
      "name": "Zafarwal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.744591,
        "lat": 29.12122
      },
      "name": "Yazman Mandi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.115936,
        "lat": 32.445831
      },
      "name": "Wazirabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.833328,
        "lat": 31.549999
      },
      "name": "Warburton",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.79776,
        "lat": 27.44808
      },
      "name": "Warah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.349998,
        "lat": 30.033331
      },
      "name": "Vihari",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.762863,
        "lat": 34.187988
      },
      "name": "Utmanzai",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.621941,
        "lat": 25.80722
      },
      "name": "Uthal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.04454,
        "lat": 28.17943
      },
      "name": "Usta Muhammad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.736237,
        "lat": 25.36157
      },
      "name": "Umarkot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.728897,
        "lat": 28.165239
      },
      "name": "Ubauro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 63.043991,
        "lat": 26.002279
      },
      "name": "Turbat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.623581,
        "lat": 34.070412
      },
      "name": "Topi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.482689,
        "lat": 30.974331
      },
      "name": "Toba Tek Singh",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.775879,
        "lat": 28.240339
      },
      "name": "Thul",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.923531,
        "lat": 24.74745
      },
      "name": "Thatta",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.11602,
        "lat": 26.944229
      },
      "name": "Tharu Shah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.650513,
        "lat": 30.70484
      },
      "name": "Taunsa",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.37928,
        "lat": 32.22168
      },
      "name": "Tank",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.65361,
        "lat": 34.30056
      },
      "name": "Tangi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.535767,
        "lat": 25.123011
      },
      "name": "Tando Muhammad Khan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.536186,
        "lat": 25.427179
      },
      "name": "Tando Jam",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.719231,
        "lat": 25.462629
      },
      "name": "Tando Allahyar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.66098,
        "lat": 25.763741
      },
      "name": "Tando Adam",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.133331,
        "lat": 31.033331
      },
      "name": "Tandlianwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.816673,
        "lat": 24.883329
      },
      "name": "Talhar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.240112,
        "lat": 30.527081
      },
      "name": "Talamba",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.415833,
        "lat": 32.929729
      },
      "name": "Talagang",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.243851,
        "lat": 35.47908
      },
      "name": "Tal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.469872,
        "lat": 34.119881
      },
      "name": "Swabi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.857384,
        "lat": 27.70516
      },
      "name": "Sukkur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.511223,
        "lat": 31.86388
      },
      "name": "Sukheke Mandi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.182343,
        "lat": 32.46162
      },
      "name": "Sodhra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.849998,
        "lat": 27.033331
      },
      "name": "Sita Road",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.808983,
        "lat": 26.03031
      },
      "name": "Sinjhoro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.539841,
        "lat": 31.826111
      },
      "name": "Sillanwali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.876404,
        "lat": 29.5448
      },
      "name": "Sibi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.543129,
        "lat": 32.510101
      },
      "name": "Sialkot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.293129,
        "lat": 29.879669
      },
      "name": "Shujaabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.877411,
        "lat": 31.90991
      },
      "name": "Shorko",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.637894,
        "lat": 27.95706
      },
      "name": "Shikarpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.978333,
        "lat": 31.71306
      },
      "name": "Sheikhupura",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.099998,
        "lat": 31.463329
      },
      "name": "Sharqpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 75.166817,
        "lat": 32.262321
      },
      "name": "Shakargarr",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.021156,
        "lat": 29.57646
      },
      "name": "Shahr Sultan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.650932,
        "lat": 26.15497
      },
      "name": "Shahpur Chakar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.619987,
        "lat": 25.924061
      },
      "name": "Shahdadpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.905502,
        "lat": 27.84771
      },
      "name": "Shahdadkot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.555229,
        "lat": 34.213902
      },
      "name": "Shabqadar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.862999,
        "lat": 26.42794
      },
      "name": "Sehwan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.671112,
        "lat": 32.083611
      },
      "name": "Sargodha",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.969772,
        "lat": 30.594891
      },
      "name": "Sarai Sidhu",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.781357,
        "lat": 32.825909
      },
      "name": "Sarai Naurang",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.755913,
        "lat": 32.901218
      },
      "name": "Sarai Alamgir",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.383331,
        "lat": 31.716669
      },
      "name": "Sangla",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.948097,
        "lat": 26.04656
      },
      "name": "Sanghar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.352089,
        "lat": 32.474548
      },
      "name": "Sambrial",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.273613,
        "lat": 26.13839
      },
      "name": "Sakrand",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.330872,
        "lat": 31.974461
      },
      "name": "Sahiwal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.099998,
        "lat": 30.66667
      },
      "name": "Montgomery",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.130653,
        "lat": 28.306231
      },
      "name": "Sadiqabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.895058,
        "lat": 27.69223
      },
      "name": "Rohri",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.599998,
        "lat": 30.883329
      },
      "name": "Renala Khurd",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.067902,
        "lat": 33.6007
      },
      "name": "Rawalpindi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.287079,
        "lat": 27.802959
      },
      "name": "Ratodero",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.505051,
        "lat": 27.28792
      },
      "name": "Ranipur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.325043,
        "lat": 29.10351
      },
      "name": "Rajanpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.251938,
        "lat": 31.220831
      },
      "name": "Raja Jang",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.217781,
        "lat": 31.25444
      },
      "name": "Raiwind",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.949997,
        "lat": 27.183331
      },
      "name": "Radhan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.009712,
        "lat": 30.198999
      },
      "name": "Quetta",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.00103,
        "lat": 27.58676
      },
      "name": "Kambar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.671173,
        "lat": 30.292379
      },
      "name": "Qadirpur Ran",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.089737,
        "lat": 33.767879
      },
      "name": "Punch",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 66.996109,
        "lat": 30.58028
      },
      "name": "Pishin",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.433327,
        "lat": 30.76667
      },
      "name": "Pir Mahal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.26609,
        "lat": 33.240238
      },
      "name": "Pindi Gheb",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.273018,
        "lat": 31.89781
      },
      "name": "Pindi Bhattian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.045639,
        "lat": 32.587891
      },
      "name": "Pind Dadan Khan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.577454,
        "lat": 32.429729
      },
      "name": "Phalia",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.578491,
        "lat": 34.007999
      },
      "name": "Peshawar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.849998,
        "lat": 31.01667
      },
      "name": "Pattoki",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.663422,
        "lat": 32.26413
      },
      "name": "Pasrur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 63.471031,
        "lat": 25.263109
      },
      "name": "Pasni",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.111557,
        "lat": 27.85685
      },
      "name": "Pano Aqil",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.386642,
        "lat": 30.34104
      },
      "name": "Pakpattan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.972351,
        "lat": 32.10384
      },
      "name": "Paharpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.301971,
        "lat": 26.77475
      },
      "name": "Pad Idan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.798889,
        "lat": 34.010559
      },
      "name": "Pabbi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.445831,
        "lat": 30.80806
      },
      "name": "Okara",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.021477,
        "lat": 29.55423
      },
      "name": "Nushki",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.409554,
        "lat": 26.248329
      },
      "name": "Nawabshah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.122978,
        "lat": 26.842381
      },
      "name": "Naushahro Firoz",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.972252,
        "lat": 31.962839
      },
      "name": "Naushahra Virkan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.362167,
        "lat": 27.66477
      },
      "name": "Naudero",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.916779,
        "lat": 27.380911
      },
      "name": "Nasirabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.883331,
        "lat": 32.099998
      },
      "name": "Narowal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.517563,
        "lat": 31.9132
      },
      "name": "Narang",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.402382,
        "lat": 24.85869
      },
      "name": "Naukot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.69722,
        "lat": 31.4475
      },
      "name": "Nankana Sahib",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.192131,
        "lat": 30.075371
      },
      "name": "Muzaffargarh",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.471107,
        "lat": 34.369999
      },
      "name": "Muzaffarabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.498894,
        "lat": 30.89222
      },
      "name": "Mustafabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.392952,
        "lat": 33.907269
      },
      "name": "Murree",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.261673,
        "lat": 31.8025
      },
      "name": "Muridke",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.475281,
        "lat": 30.19556
      },
      "name": "Multan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.001556,
        "lat": 26.664591
      },
      "name": "Moro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.798111,
        "lat": 24.731831
      },
      "name": "Mithi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.110832,
        "lat": 32.248611
      },
      "name": "Mitha Tiwana",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.548859,
        "lat": 28.022711
      },
      "name": "Mirpur Mathelo",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.0159,
        "lat": 25.525101
      },
      "name": "Mirpur Khas",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.362488,
        "lat": 34.775841
      },
      "name": "Mingaora",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.568542,
        "lat": 30.163
      },
      "name": "Minchinabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.52639,
        "lat": 32.5741
      },
      "name": "Mianwali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.354309,
        "lat": 30.440041
      },
      "name": "Mian Channun",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.025398,
        "lat": 28.1085
      },
      "name": "Mehrabpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.822884,
        "lat": 27.18067
      },
      "name": "Mehar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.655678,
        "lat": 25.043119
      },
      "name": "Matli",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.446663,
        "lat": 25.59609
      },
      "name": "Matiari",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.845047,
        "lat": 29.79936
      },
      "name": "Mastung",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.052544,
        "lat": 34.20195
      },
      "name": "Mardan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.199997,
        "lat": 34.333328
      },
      "name": "Mansehra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.381668,
        "lat": 31.893061
      },
      "name": "Mangla",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.484322,
        "lat": 32.583389
      },
      "name": "Mandi Bahauddin",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.687782,
        "lat": 31.584169
      },
      "name": "Mananwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.800003,
        "lat": 30.83333
      },
      "name": "Mamu Kanjan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.175827,
        "lat": 29.80028
      },
      "name": "Mailsi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.329781,
        "lat": 29.86371
      },
      "name": "Mach",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.597977,
        "lat": 30.370529
      },
      "name": "Loralai",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.633568,
        "lat": 29.54051
      },
      "name": "Lodhran",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.939041,
        "lat": 30.961281
      },
      "name": "Leiah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.214142,
        "lat": 27.55508
      },
      "name": "Larkana",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.799713,
        "lat": 31.824141
      },
      "name": "Lalian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.959999,
        "lat": 32.702351
      },
      "name": "Lala Musa",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.911423,
        "lat": 32.607948
      },
      "name": "Lakki Marwat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.343613,
        "lat": 31.549721
      },
      "name": "Lahore",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.117012,
        "lat": 32.156559
      },
      "name": "Ladhewala Waraich",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.338577,
        "lat": 33.383251
      },
      "name": "Lachi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.56913,
        "lat": 25.178471
      },
      "name": "Kunri",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.973679,
        "lat": 32.528481
      },
      "name": "Kunjah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.477539,
        "lat": 32.458721
      },
      "name": "Kundian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.459167,
        "lat": 31.92861
      },
      "name": "Kulachi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.468369,
        "lat": 28.5522
      },
      "name": "Kot Samaba",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.312157,
        "lat": 25.365999
      },
      "name": "Kotri",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.099716,
        "lat": 31.172501
      },
      "name": "Kot Radha Kishan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.027977,
        "lat": 32.189541
      },
      "name": "Kot Mumin",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.992989,
        "lat": 30.19438
      },
      "name": "Kot Malik",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.49321,
        "lat": 32.588299
      },
      "name": "Kotli Loharan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.916672,
        "lat": 33.51667
      },
      "name": "Kotli",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.547981,
        "lat": 32.332981
      },
      "name": "Kot Ghulam Muhammad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.708344,
        "lat": 27.34272
      },
      "name": "Kot Diji",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.96714,
        "lat": 30.4692
      },
      "name": "Kot Addu",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.449287,
        "lat": 33.581959
      },
      "name": "Kohat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.352501,
        "lat": 32.296669
      },
      "name": "Khushab",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.26667,
        "lat": 31.500561
      },
      "name": "Khurrianwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.37719,
        "lat": 25.82847
      },
      "name": "Khipro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.010582,
        "lat": 32.64793
      },
      "name": "Khewra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.863586,
        "lat": 32.81493
      },
      "name": "Kharian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 65.416672,
        "lat": 28.58333
      },
      "name": "Kharan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.6567,
        "lat": 28.64534
      },
      "name": "Khanpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.413727,
        "lat": 27.84358
      },
      "name": "Khanpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.161842,
        "lat": 29.917299
      },
      "name": "Khangarh",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.623062,
        "lat": 31.831671
      },
      "name": "Khangah Dogran",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.889442,
        "lat": 34.060001
      },
      "name": "Khalabat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.733658,
        "lat": 27.09359
      },
      "name": "Khairpur Nathan Shah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.236389,
        "lat": 29.58111
      },
      "name": "Khairpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.70076,
        "lat": 28.06526
      },
      "name": "Khairpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.446671,
        "lat": 31.115561
      },
      "name": "Kasur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.583328,
        "lat": 28.433331
      },
      "name": "Kashmor",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.949226,
        "lat": 31.227409
      },
      "name": "Karor",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.082199,
        "lat": 24.9056
      },
      "name": "Karachi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.123108,
        "lat": 30.766291
      },
      "name": "Kanganpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.209091,
        "lat": 27.06011
      },
      "name": "Kandiaro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.18235,
        "lat": 28.243959
      },
      "name": "Kandhkot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.51107,
        "lat": 33.747341
      },
      "name": "Kamra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.224442,
        "lat": 31.97444
      },
      "name": "Kamoke",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.050003,
        "lat": 30.433331
      },
      "name": "Kamir",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.366943,
        "lat": 32.843891
      },
      "name": "Kamar Mushani",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.650002,
        "lat": 30.73333
      },
      "name": "Kamalia",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.259438,
        "lat": 32.156391
      },
      "name": "Kalur Kot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.699997,
        "lat": 32.783329
      },
      "name": "Kallar Kahar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.602592,
        "lat": 31.97718
      },
      "name": "Kaleke Mandi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.591599,
        "lat": 29.02252
      },
      "name": "Kalat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.556969,
        "lat": 32.965
      },
      "name": "Kalabagh",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.386757,
        "lat": 33.591301
      },
      "name": "Kahuta",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.916733,
        "lat": 29.623819
      },
      "name": "Kohror Pakka",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.36528,
        "lat": 31.369169
      },
      "name": "Kahna",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.866699,
        "lat": 30.406771
      },
      "name": "Kabirwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.613297,
        "lat": 26.69206
      },
      "name": "Johi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 61.741669,
        "lat": 25.049999
      },
      "name": "Jiwani",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.183472,
        "lat": 31.56781
      },
      "name": "Jhumra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.888206,
        "lat": 25.95507
      },
      "name": "Jhol",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.726372,
        "lat": 32.933128
      },
      "name": "Jhelum",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.62278,
        "lat": 32.361389
      },
      "name": "Jhawarian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.328423,
        "lat": 31.27154
      },
      "name": "Jhang Sadr",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.281303,
        "lat": 32.289799
      },
      "name": "Jauharabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.850319,
        "lat": 29.516541
      },
      "name": "Jatoi Shimali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.433327,
        "lat": 31.33333
      },
      "name": "Jaranwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.019279,
        "lat": 33.429852
      },
      "name": "Jand",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.595444,
        "lat": 29.64414
      },
      "name": "Jampur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.21917,
        "lat": 29.50687
      },
      "name": "Jalalpur Pirwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.218292,
        "lat": 32.63744
      },
      "name": "Jalalpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.277107,
        "lat": 31.805519
      },
      "name": "Jahanian Shah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.438759,
        "lat": 28.281
      },
      "name": "Jacobabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.043289,
        "lat": 33.721481
      },
      "name": "Islamabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.373657,
        "lat": 25.39242
      },
      "name": "Hyderabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.823578,
        "lat": 30.741791
      },
      "name": "Hujra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.415977,
        "lat": 27.21088
      },
      "name": "Hingorja",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.492119,
        "lat": 33.909142
      },
      "name": "Hazro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.16571,
        "lat": 34.0536
      },
      "name": "Havelian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.698883,
        "lat": 30.450159
      },
      "name": "Haveli",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.555283,
        "lat": 29.712219
      },
      "name": "Hasilpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.699997,
        "lat": 30.433331
      },
      "name": "Hasan Abdal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.138893,
        "lat": 29.613331
      },
      "name": "Haru Zbad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.553886,
        "lat": 32.279171
      },
      "name": "Harnoli",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.93409,
        "lat": 33.999969
      },
      "name": "Haripur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.059341,
        "lat": 33.531078
      },
      "name": "Hangu",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.422729,
        "lat": 25.81308
      },
      "name": "Hala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.685448,
        "lat": 32.06786
      },
      "name": "Hafizabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.569038,
        "lat": 32.641319
      },
      "name": "Hadali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 62.325409,
        "lat": 25.12163
      },
      "name": "Gwadar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.078972,
        "lat": 32.572842
      },
      "name": "Gujrat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.188309,
        "lat": 32.161671
      },
      "name": "Gujranwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.302551,
        "lat": 33.255791
      },
      "name": "Gujar Khan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.686562,
        "lat": 31.148741
      },
      "name": "Gojra",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.316078,
        "lat": 28.006041
      },
      "name": "Ghotki",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.083054,
        "lat": 28.139059
      },
      "name": "Ghauspur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.585648,
        "lat": 24.742411
      },
      "name": "Gharo",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.905289,
        "lat": 30.833879
      },
      "name": "Garh Maharaja",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.520508,
        "lat": 27.35145
      },
      "name": "Gambat",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.853607,
        "lat": 29.192499
      },
      "name": "Fort Abbas",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 75.066673,
        "lat": 32.183331
      },
      "name": "Fazalpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.209457,
        "lat": 31.17959
      },
      "name": "Chak Two Hundred Forty-Nine TDA",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.414398,
        "lat": 31.88722
      },
      "name": "Faruka",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.034027,
        "lat": 29.466311
      },
      "name": "Faqirwali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.083328,
        "lat": 31.41667
      },
      "name": "Faisalabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.259438,
        "lat": 32.042191
      },
      "name": "Eminabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.719582,
        "lat": 29.7995
      },
      "name": "Dunyapur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.24324,
        "lat": 29.74931
      },
      "name": "Dunga Bunga",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.436249,
        "lat": 31.835871
      },
      "name": "Dullewala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.875557,
        "lat": 35.20583
      },
      "name": "Dir",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.652924,
        "lat": 30.67091
      },
      "name": "Dipalpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.722023,
        "lat": 32.639759
      },
      "name": "Dinga",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.98333,
        "lat": 31.216669
      },
      "name": "Dijkot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.11129,
        "lat": 25.15579
      },
      "name": "Digri",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.566673,
        "lat": 25.5
      },
      "name": "Dhoro Naro",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.752129,
        "lat": 29.57991
      },
      "name": "Dhanot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.902397,
        "lat": 31.832689
      },
      "name": "Dera Ismail Khan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.634773,
        "lat": 30.056141
      },
      "name": "Dera Ghazi Khan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.150993,
        "lat": 29.030689
      },
      "name": "Dera Bugti",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.319153,
        "lat": 26.45834
      },
      "name": "Daur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.570122,
        "lat": 32.874981
      },
      "name": "Daud Khel",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.349739,
        "lat": 32.324261
      },
      "name": "Daska",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.103943,
        "lat": 31.791229
      },
      "name": "Darya Khan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.376152,
        "lat": 29.557671
      },
      "name": "Dajal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.776314,
        "lat": 26.732861
      },
      "name": "Dadu",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.651352,
        "lat": 29.475269
      },
      "name": "Dadhar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.980293,
        "lat": 30.96397
      },
      "name": "Chunian",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.800003,
        "lat": 31.75
      },
      "name": "Chuhar Kana",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 69.76667,
        "lat": 25.51667
      },
      "name": "Chor",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.984863,
        "lat": 32.720058
      },
      "name": "Choa Saidan Shah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.866669,
        "lat": 29.799999
      },
      "name": "Chishtian Mandi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.978889,
        "lat": 31.719999
      },
      "name": "Chiniot",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.699997,
        "lat": 30.533331
      },
      "name": "Chichawatni",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.706123,
        "lat": 32.34692
      },
      "name": "Chawinda",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.731728,
        "lat": 34.143452
      },
      "name": "Charsadda",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.451157,
        "lat": 30.923599
      },
      "name": "Chaman",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.858528,
        "lat": 32.93338
      },
      "name": "Chakwal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.033333,
        "lat": 30.75
      },
      "name": "Chak Azam Saffo",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.650002,
        "lat": 30.16667
      },
      "name": "Burewala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.363297,
        "lat": 32.428879
      },
      "name": "Bhopalwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.492653,
        "lat": 25.804371
      },
      "name": "Bhit Shah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.079262,
        "lat": 32.975681
      },
      "name": "Bhimbar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.909698,
        "lat": 32.483181
      },
      "name": "Bhera",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.648987,
        "lat": 31.56918
      },
      "name": "Bhawana",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 67.72139,
        "lat": 26.55831
      },
      "name": "Bhan",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.904251,
        "lat": 32.272041
      },
      "name": "Bhalwal",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.065742,
        "lat": 31.62525
      },
      "name": "Bhakkar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.949997,
        "lat": 31.200001
      },
      "name": "Bhai Pheru",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 66.311096,
        "lat": 26.2271
      },
      "name": "Bela",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.97139,
        "lat": 34.616669
      },
      "name": "Bat Khela",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.829002,
        "lat": 30.583179
      },
      "name": "Basirpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.602699,
        "lat": 32.985409
      },
      "name": "Bannu",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.683327,
        "lat": 29.4
      },
      "name": "Bahawalpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.253601,
        "lat": 29.998659
      },
      "name": "Bahawalnagar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.838409,
        "lat": 24.655991
      },
      "name": "Badin",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.668343,
        "lat": 31.99283
      },
      "name": "Baddomalhi",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.3741,
        "lat": 33.773109
      },
      "name": "Attock City",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.07354,
        "lat": 30.293989
      },
      "name": "Arifwala",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.93,
        "lat": 34.005829
      },
      "name": "Amangarh",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 70.911568,
        "lat": 29.38464
      },
      "name": "Alipur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 72.126106,
        "lat": 34.003609
      },
      "name": "Akora",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 71.259758,
        "lat": 29.143089
      },
      "name": "Ahmadpur East",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 73.214493,
        "lat": 34.146851
      },
      "name": "Abbottabad",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 88.466667,
        "lat": 26.033331
      },
      "name": "Thakurgaon",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 92.305817,
        "lat": 20.862431
      },
      "name": "Teknaf",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.40583,
        "lat": 23.889999
      },
      "name": "Tungi",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.871674,
        "lat": 24.896669
      },
      "name": "Sylhet",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.146942,
        "lat": 23.588329
      },
      "name": "Dohar",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.933327,
        "lat": 24.91667
      },
      "name": "Jamalpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.159752,
        "lat": 24.68293
      },
      "name": "Shibganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.099998,
        "lat": 22.716669
      },
      "name": "Satkhira",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.716667,
        "lat": 24.450001
      },
      "name": "Sirajganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.716667,
        "lat": 24.883329
      },
      "name": "Netrakona",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.718063,
        "lat": 23.92083
      },
      "name": "Narsingdi",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.456108,
        "lat": 22.467779
      },
      "name": "Sandwip",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.599998,
        "lat": 24.16667
      },
      "name": "Shahzadpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.849998,
        "lat": 23.1
      },
      "name": "Ramganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.599998,
        "lat": 24.366671
      },
      "name": "Rajshahi",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.98333,
        "lat": 22.566669
      },
      "name": "Pirojpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.561996,
        "lat": 26.331289
      },
      "name": "Panchagarh",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.976212,
        "lat": 22.293119
      },
      "name": "Patiya",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.924698,
        "lat": 25.664909
      },
      "name": "Parbatipur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.501106,
        "lat": 23.623329
      },
      "name": "Narayanganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.283333,
        "lat": 22.633329
      },
      "name": "Nalchiti",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.692993,
        "lat": 25.968809
      },
      "name": "Nageswari",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.400002,
        "lat": 24.75
      },
      "name": "Mymensingh",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.23333,
        "lat": 24.76667
      },
      "name": "Muktagacha",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.099998,
        "lat": 24.1
      },
      "name": "Mirzapur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.783333,
        "lat": 24.48333
      },
      "name": "Maulavi Bazar",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.858704,
        "lat": 22.453699
      },
      "name": "Morrelgonj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.533333,
        "lat": 22.816669
      },
      "name": "Mehendiganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.962898,
        "lat": 22.2855
      },
      "name": "Mathba",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.447289,
        "lat": 25.912439
      },
      "name": "Lalmanirhat",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.142502,
        "lat": 23.247219
      },
      "name": "Laksham",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.204437,
        "lat": 23.457781
      },
      "name": "Comilla",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.25,
        "lat": 25.75
      },
      "name": "Rangpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.12207,
        "lat": 23.901051
      },
      "name": "Kushtia",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.140198,
        "lat": 23.4095
      },
      "name": "Kaliganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.093803,
        "lat": 23.1131
      },
      "name": "Jhingergacha",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.02169,
        "lat": 25.09433
      },
      "name": "Joypurhat",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.083328,
        "lat": 24.133329
      },
      "name": "Ishurdi",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.416672,
        "lat": 24.383329
      },
      "name": "Habiganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.23333,
        "lat": 22.966669
      },
      "name": "Gaurnadi",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.566673,
        "lat": 24.433331
      },
      "name": "Gafargaon",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.410004,
        "lat": 23.01861
      },
      "name": "Feni",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.76667,
        "lat": 23.049999
      },
      "name": "Raipur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.789703,
        "lat": 22.308201
      },
      "name": "Sarankhola",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.40744,
        "lat": 23.7104
      },
      "name": "Dhaka",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.671516,
        "lat": 25.55592
      },
      "name": "Chilmari",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.506943,
        "lat": 23.030001
      },
      "name": "Chhagalnaiya",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.741898,
        "lat": 22.3384
      },
      "name": "Lalmohan",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.966667,
        "lat": 23.1
      },
      "name": "Khagrachhari",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.666672,
        "lat": 25.033331
      },
      "name": "Chhatak",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.443199,
        "lat": 23.01531
      },
      "name": "Bhatpara Abhaynagar",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.9925,
        "lat": 24.023199
      },
      "name": "Bheramara",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.966667,
        "lat": 24.066669
      },
      "name": "Bhairab Bazar",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 92.226196,
        "lat": 22.196501
      },
      "name": "Bandarban",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.632797,
        "lat": 23.0396
      },
      "name": "Kalia",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.366669,
        "lat": 24.51667
      },
      "name": "Baniachang",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.949997,
        "lat": 24.216669
      },
      "name": "Bajitpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.054901,
        "lat": 25.67403
      },
      "name": "Badarganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.5,
        "lat": 23.16667
      },
      "name": "Narail",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.916672,
        "lat": 22.9
      },
      "name": "Tungipara",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.833328,
        "lat": 24.73333
      },
      "name": "Sarishabari",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.183327,
        "lat": 24.299999
      },
      "name": "Sakhipur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.919838,
        "lat": 22.53702
      },
      "name": "Raojan",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.51667,
        "lat": 22.700001
      },
      "name": "Phultala",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.349998,
        "lat": 23.216669
      },
      "name": "Palang",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.950844,
        "lat": 24.80287
      },
      "name": "Par Naogaon",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.973328,
        "lat": 23.89167
      },
      "name": "Nabinagar",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.833328,
        "lat": 22.950001
      },
      "name": "Lakshmipur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.216667,
        "lat": 22.91667
      },
      "name": "Kesabpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.859169,
        "lat": 23.25111
      },
      "name": "Hajiganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.833328,
        "lat": 23.6
      },
      "name": "Faridpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.638641,
        "lat": 25.62715
      },
      "name": "Dinajpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.713226,
        "lat": 22.233219
      },
      "name": "Uttar Char Fasson",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.836388,
        "lat": 22.333059
      },
      "name": "Chittagong",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.216667,
        "lat": 23.316669
      },
      "name": "Char Bhadrasan",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.616669,
        "lat": 24.08333
      },
      "name": "Bera",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.723457,
        "lat": 22.49184
      },
      "name": "Burhanuddin",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 99.816399,
        "lat": 3.001
      },
      "name": "Teluk Nibung",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.162498,
        "lat": 3.3285
      },
      "name": "Tebingtinggi",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.369904,
        "lat": 4.0613
      },
      "name": "Tanjungtiram",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.800003,
        "lat": 2.96667
      },
      "name": "Tanjungbalai",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.615097,
        "lat": 3.5765
      },
      "name": "Sunggal",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.451302,
        "lat": 3.761
      },
      "name": "Stabat",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 95.960899,
        "lat": 5.3848
      },
      "name": "Sigli",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.779198,
        "lat": 1.7427
      },
      "name": "Sibolga",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 95.321388,
        "lat": 5.89333
      },
      "name": "Sabang",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 96.283333,
        "lat": 5.21667
      },
      "name": "Reuleuet",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.833328,
        "lat": 2.1
      },
      "name": "Rantauprapat",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.863998,
        "lat": 3.6253
      },
      "name": "Percut",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.956001,
        "lat": 3.5679
      },
      "name": "Perbaungan",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.068703,
        "lat": 2.9595
      },
      "name": "Pematangsiantar",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.278198,
        "lat": 4.0238
      },
      "name": "Pangkalan Brandan",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.26667,
        "lat": 1.36667
      },
      "name": "Padangsidempuan",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 96.128502,
        "lat": 4.1363
      },
      "name": "Meulaboh",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.666672,
        "lat": 3.58333
      },
      "name": "Medan",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 97.150703,
        "lat": 5.1801
      },
      "name": "Lhokseumawe",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 97.9683,
        "lat": 4.4683
      },
      "name": "Langsa",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.673798,
        "lat": 3.7278
      },
      "name": "Labuhan Deli",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.615799,
        "lat": 2.9845
      },
      "name": "Kisaran",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.490799,
        "lat": 3.1001
      },
      "name": "Kabanjahe",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.683899,
        "lat": 3.5078
      },
      "name": "Deli Tua",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 96.700897,
        "lat": 5.203
      },
      "name": "Bireun",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.485397,
        "lat": 3.6001
      },
      "name": "Binjai",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 98.683197,
        "lat": 3.7755
      },
      "name": "Belawan",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 99.75,
        "lat": 2.05
      },
      "name": "Bandar",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 95.322197,
        "lat": 5.5577
      },
      "name": "Banda Aceh",
      "country": "ID"
    },
    {
      "coord": {
        "lon": 68.395828,
        "lat": 39.96056
      },
      "name": "Zomin",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.243057,
        "lat": 39.402222
      },
      "name": "Urgut",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.278328,
        "lat": 37.224171
      },
      "name": "Tirmiz",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.787498,
        "lat": 37.999439
      },
      "name": "Shorchi",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.834167,
        "lat": 39.057781
      },
      "name": "Shahrisabz",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.959717,
        "lat": 39.654171
      },
      "name": "Samarqand",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.800003,
        "lat": 38.866669
      },
      "name": "Qarshi",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.152779,
        "lat": 39.25528
      },
      "name": "Muborak",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.833183,
        "lat": 39.084251
      },
      "name": "Kitob",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.256111,
        "lat": 39.898891
      },
      "name": "Kattaqorgon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.584999,
        "lat": 39.037498
      },
      "name": "Koson",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 63.833328,
        "lat": 39.533329
      },
      "name": "Karakul",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 64.551666,
        "lat": 39.722778
      },
      "name": "Kogon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.248062,
        "lat": 38.620831
      },
      "name": "Guzor",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 64.448334,
        "lat": 39.85778
      },
      "name": "Galaosiyo",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.664169,
        "lat": 39.71611
      },
      "name": "Juma",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.900002,
        "lat": 38.26667
      },
      "name": "Denov",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.57222,
        "lat": 39.033611
      },
      "name": "Chiroqchi",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.861107,
        "lat": 39.92028
      },
      "name": "Chelak",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.271393,
        "lat": 39.764721
      },
      "name": "Bulungur",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 64.428612,
        "lat": 39.774719
      },
      "name": "Buxoro",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.653061,
        "lat": 38.821388
      },
      "name": "Beshkent",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.198608,
        "lat": 38.206108
      },
      "name": "Boysun",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.925278,
        "lat": 39.921391
      },
      "name": "Oqtosh",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 62.359749,
        "lat": 37.298859
      },
      "name": "Yoloten",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 60.50544,
        "lat": 37.383381
      },
      "name": "Tejen",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 62.913738,
        "lat": 39.481602
      },
      "name": "Seydi",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 63.880348,
        "lat": 38.78392
      },
      "name": "Sayat",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 61.830311,
        "lat": 37.593781
      },
      "name": "Mary",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 65.210579,
        "lat": 37.835739
      },
      "name": "Atamyrat",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 66.046562,
        "lat": 37.812439
      },
      "name": "Gowurdak",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 63.578621,
        "lat": 39.07328
      },
      "name": "Turkmenabat",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 62.167149,
        "lat": 37.618519
      },
      "name": "Bayramaly",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 69.037842,
        "lat": 38.314079
      },
      "name": "Yovon",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.644157,
        "lat": 37.803959
      },
      "name": "Vose",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.834557,
        "lat": 37.714851
      },
      "name": "Vakhsh",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.003281,
        "lat": 39.9142
      },
      "name": "Istaravshan",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.233269,
        "lat": 38.51437
      },
      "name": "Tursunzoda",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.78186,
        "lat": 37.833988
      },
      "name": "Qurghonteppa",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 67.609306,
        "lat": 39.495239
      },
      "name": "Panjakent",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.403557,
        "lat": 37.492191
      },
      "name": "Farkhor",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.013542,
        "lat": 38.55632
      },
      "name": "Vahdat",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.322723,
        "lat": 38.389172
      },
      "name": "Norak",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.783028,
        "lat": 37.914532
      },
      "name": "Kulob",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.658859,
        "lat": 37.58823
      },
      "name": "Kolkhozobod",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 71.55304,
        "lat": 37.489738
      },
      "name": "Khorugh",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 71.613312,
        "lat": 36.724838
      },
      "name": "Ishqoshim",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.551239,
        "lat": 38.52504
      },
      "name": "Hisor",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.779053,
        "lat": 38.535751
      },
      "name": "Dushanbe",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.339981,
        "lat": 38.095779
      },
      "name": "Danghara",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.706108,
        "lat": 37.613659
      },
      "name": "Chubek",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 68.805328,
        "lat": 38.466129
      },
      "name": "Boshkengash",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 99.843201,
        "lat": 6.32649
      },
      "name": "Kuah",
      "country": "MY"
    },
    {
      "coord": {
        "lon": 69.57,
        "lat": 39.933731
      },
      "name": "Sulyukta",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 69.530579,
        "lat": 39.838558
      },
      "name": "Isfana",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 79.901398,
        "lat": 7.0281
      },
      "name": "Welisara",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.416672,
        "lat": 5.96667
      },
      "name": "Weligama",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.889801,
        "lat": 6.9779
      },
      "name": "Wattala",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.497101,
        "lat": 8.7514
      },
      "name": "Vavuniya",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.166672,
        "lat": 9.81667
      },
      "name": "Valvedditturai",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 81.233498,
        "lat": 8.5711
      },
      "name": "Trincomalee",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.39917,
        "lat": 6.68278
      },
      "name": "Ratnapura",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.8283,
        "lat": 8.0362
      },
      "name": "Puttalam",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.23333,
        "lat": 9.81667
      },
      "name": "Point Pedro",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.901497,
        "lat": 6.8905
      },
      "name": "Pita Kotte",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.883598,
        "lat": 6.9685
      },
      "name": "Peliyagoda",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.902603,
        "lat": 6.7132
      },
      "name": "Panadura",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.78286,
        "lat": 6.97078
      },
      "name": "Nuwara Eliya",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.8358,
        "lat": 7.2083
      },
      "name": "Negombo",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.929703,
        "lat": 6.933
      },
      "name": "Mulleriyawa",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.881599,
        "lat": 6.773
      },
      "name": "Moratuwa",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.535278,
        "lat": 5.94851
      },
      "name": "Matara",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.926498,
        "lat": 6.848
      },
      "name": "Maharagama",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.362297,
        "lat": 7.4863
      },
      "name": "Kurunegala",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.908333,
        "lat": 6.90278
      },
      "name": "Sri Jayewardenepura Kotte",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.9095,
        "lat": 6.9269
      },
      "name": "Kotikawatta",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.884804,
        "lat": 6.9329
      },
      "name": "Kolonnawa",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.921997,
        "lat": 6.9553
      },
      "name": "Kelaniya",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.875702,
        "lat": 7.1643
      },
      "name": "Katunayaka North",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.635597,
        "lat": 7.2955
      },
      "name": "Kandy",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.8937,
        "lat": 7.048
      },
      "name": "Kandana",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.959297,
        "lat": 6.5831
      },
      "name": "Kalutara",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 81.816673,
        "lat": 7.41667
      },
      "name": "Kalmunai",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.007423,
        "lat": 9.66845
      },
      "name": "Jaffna",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.891899,
        "lat": 7.0744
      },
      "name": "Ja Ela",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.002403,
        "lat": 6.844
      },
      "name": "Homagama",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.883003,
        "lat": 6.9909
      },
      "name": "Hendala",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.595497,
        "lat": 6.8916
      },
      "name": "Hatton",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.085197,
        "lat": 6.9012
      },
      "name": "Hanwella Ihala",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.569603,
        "lat": 7.1643
      },
      "name": "Gampola",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.217003,
        "lat": 6.0367
      },
      "name": "Galle",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.862999,
        "lat": 6.8293
      },
      "name": "Galkissa",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 81.603798,
        "lat": 7.7782
      },
      "name": "Eravur Town",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.651672,
        "lat": 7.86
      },
      "name": "Dambulla",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.847778,
        "lat": 6.93194
      },
      "name": "Colombo",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.79528,
        "lat": 7.57583
      },
      "name": "Chilaw",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.982803,
        "lat": 6.4788
      },
      "name": "Beruwala",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 79.994797,
        "lat": 6.4254
      },
      "name": "Bentota",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 81.692398,
        "lat": 7.7102
      },
      "name": "Batticaloa",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 81.055702,
        "lat": 6.9895
      },
      "name": "Badulla",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.417259,
        "lat": 8.35647
      },
      "name": "Anuradhapura",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 81.666672,
        "lat": 7.28333
      },
      "name": "Ampara",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 80.053802,
        "lat": 6.2355
      },
      "name": "Ambalangoda",
      "country": "LK"
    },
    {
      "coord": {
        "lon": 89.641907,
        "lat": 27.466089
      },
      "name": "Thimphu",
      "country": "BT"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 9.23333
      },
      "name": "Keelakarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.51667,
        "lat": 25.966669
      },
      "name": "Zunheboto",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.566673,
        "lat": 25.433331
      },
      "name": "Zamania",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.333336,
        "lat": 26.833332
      },
      "name": "Zaidpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.616669,
        "lat": 17.683331
      },
      "name": "Zahirabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.48333,
        "lat": 20.033331
      },
      "name": "Yeola",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.716667,
        "lat": 14.96667
      },
      "name": "Yellapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.333328,
        "lat": 17.6
      },
      "name": "Yellandu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.600281,
        "lat": 13.1075
      },
      "name": "Yelahanka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.133331,
        "lat": 20.4
      },
      "name": "Yavatmal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.699997,
        "lat": 21.16667
      },
      "name": "Yaval",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.216667,
        "lat": 16.73333
      },
      "name": "Yanam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 30.1
      },
      "name": "Yamunanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.133331,
        "lat": 16.76667
      },
      "name": "Yadgir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.26667,
        "lat": 26.1
      },
      "name": "Wokha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.166672,
        "lat": 27.0
      },
      "name": "Wer",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.800003,
        "lat": 11.36667
      },
      "name": "Wellington",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.050003,
        "lat": 28.216669
      },
      "name": "Wazirganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.150002,
        "lat": 20.1
      },
      "name": "Washim",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 21.466669
      },
      "name": "Warud",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.0,
        "lat": 20.23333
      },
      "name": "Warora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.633331,
        "lat": 25.01667
      },
      "name": "Waris Aliganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.616669,
        "lat": 20.75
      },
      "name": "Wardha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.033333,
        "lat": 21.75
      },
      "name": "Waraseoni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.583328,
        "lat": 18.0
      },
      "name": "Warangal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.066673,
        "lat": 16.366671
      },
      "name": "Wanparti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.933327,
        "lat": 22.616671
      },
      "name": "Wankaner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.949997,
        "lat": 20.066669
      },
      "name": "Wani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.383331,
        "lat": 12.93333
      },
      "name": "Walajapet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 17.933331
      },
      "name": "Wai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.98333,
        "lat": 17.066669
      },
      "name": "Wadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.400002,
        "lat": 21.116671
      },
      "name": "Vyara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.849998,
        "lat": 16.366671
      },
      "name": "Vuyyuru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 27.58333
      },
      "name": "Vrindavan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.333328,
        "lat": 11.5
      },
      "name": "Vriddhachalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.416672,
        "lat": 18.116671
      },
      "name": "Vizianagaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.550003,
        "lat": 17.283331
      },
      "name": "Vite",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.550003,
        "lat": 23.700001
      },
      "name": "Visnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.209251,
        "lat": 17.690041
      },
      "name": "Vishakhapatnam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.683327,
        "lat": 21.383329
      },
      "name": "Visavadar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.966667,
        "lat": 9.6
      },
      "name": "Virudunagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.533333,
        "lat": 8.7
      },
      "name": "Viravanallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 12.2
      },
      "name": "Virarajendrapet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.800003,
        "lat": 19.466669
      },
      "name": "Virar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.75,
        "lat": 16.049999
      },
      "name": "Vinukonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.48333,
        "lat": 11.93333
      },
      "name": "Villupuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.900002,
        "lat": 17.33333
      },
      "name": "Vikarabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.616669,
        "lat": 16.51667
      },
      "name": "Vijayawada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.75,
        "lat": 23.566669
      },
      "name": "Vijapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.816673,
        "lat": 23.533331
      },
      "name": "Vidisha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 10.56667
      },
      "name": "Vettaikkaranpudur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.316673,
        "lat": 15.78333
      },
      "name": "Vetapalem",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.366669,
        "lat": 20.9
      },
      "name": "Veraval",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.215767,
        "lat": 17.77844
      },
      "name": "Vepagunta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.583328,
        "lat": 13.96667
      },
      "name": "Venkatagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.883331,
        "lat": 18.466669
      },
      "name": "Vemalwada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.01667,
        "lat": 11.1
      },
      "name": "Velur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.133331,
        "lat": 12.93333
      },
      "name": "Vellore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.566673,
        "lat": 22.683331
      },
      "name": "Vejalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.849998,
        "lat": 10.36667
      },
      "name": "Vedaraniyam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.76667,
        "lat": 10.16667
      },
      "name": "Vattalkundu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.416672,
        "lat": 9.23333
      },
      "name": "Vasudevanallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.26667,
        "lat": 19.41667
      },
      "name": "Vasind",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.815681,
        "lat": 15.39585
      },
      "name": "Vasco Da Gama",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.8,
        "lat": 19.47
      },
      "name": "Vasai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.73333,
        "lat": 22.66667
      },
      "name": "Vasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.706711,
        "lat": 8.7341
      },
      "name": "Varkkallai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.900002,
        "lat": 21.01667
      },
      "name": "Varangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.0,
        "lat": 25.333332
      },
      "name": "Varanasi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.616669,
        "lat": 12.68333
      },
      "name": "Vaniyambadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.616669,
        "lat": 12.5
      },
      "name": "Vandavasi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.933327,
        "lat": 20.633329
      },
      "name": "Valsad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.966667,
        "lat": 10.36667
      },
      "name": "Valparai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.900002,
        "lat": 22.533331
      },
      "name": "Vallabh Vidyanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.866669,
        "lat": 21.883329
      },
      "name": "Valabhipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 9.76667
      },
      "name": "Vaikam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.73333,
        "lat": 19.91667
      },
      "name": "Vaijapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.199997,
        "lat": 22.299999
      },
      "name": "Vadodara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.633331,
        "lat": 23.783331
      },
      "name": "Vadnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.800003,
        "lat": 14.31667
      },
      "name": "Vadlapudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.949997,
        "lat": 10.08333
      },
      "name": "Vadippatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.083328,
        "lat": 10.46667
      },
      "name": "Vadamadurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.650002,
        "lat": 8.38333
      },
      "name": "Vadakku Valliyur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.133331,
        "lat": 19.65
      },
      "name": "Vada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.76667,
        "lat": 12.6
      },
      "name": "Uttiramerur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.449997,
        "lat": 30.73333
      },
      "name": "Uttarkashi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333328,
        "lat": 9.8
      },
      "name": "Uttamapalaiyam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.416672,
        "lat": 27.316669
      },
      "name": "Utraula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.800003,
        "lat": 9.96667
      },
      "name": "Usilampatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.25,
        "lat": 27.816668
      },
      "name": "Usehat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 14.95
      },
      "name": "Uravakonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.93972,
        "lat": 18.87694
      },
      "name": "Uran",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.283333,
        "lat": 21.73333
      },
      "name": "Upleta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.559113,
        "lat": 17.405769
      },
      "name": "Uppal Kalan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.5,
        "lat": 26.533331
      },
      "name": "Unnao",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.400002,
        "lat": 23.799999
      },
      "name": "Unjha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 23.33333
      },
      "name": "Unhel",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.283333,
        "lat": 31.48333
      },
      "name": "Una",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.033333,
        "lat": 20.816669
      },
      "name": "Una",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.254173,
        "lat": 29.584721
      },
      "name": "Un",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.76667,
        "lat": 23.883329
      },
      "name": "Un",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.116669,
        "lat": 22.700001
      },
      "name": "Umreth",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.333328,
        "lat": 20.85
      },
      "name": "Umred",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.216667,
        "lat": 19.66667
      },
      "name": "Umarkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 19.6
      },
      "name": "Umarkhed",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.833328,
        "lat": 23.533331
      },
      "name": "Umaria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.616669,
        "lat": 17.83333
      },
      "name": "Umarga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.849998,
        "lat": 12.8
      },
      "name": "Ullal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.150002,
        "lat": 19.216669
      },
      "name": "Ulhasnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.76667,
        "lat": 23.183331
      },
      "name": "Ujjain",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.01667,
        "lat": 28.016666
      },
      "name": "Ujhani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.25,
        "lat": 10.58333
      },
      "name": "Udumalaippettai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.75,
        "lat": 13.35
      },
      "name": "Udipi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.133331,
        "lat": 32.933331
      },
      "name": "Udhampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.116669,
        "lat": 18.383329
      },
      "name": "Udgir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.01667,
        "lat": 8.43333
      },
      "name": "Udankudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.133331,
        "lat": 26.76667
      },
      "name": "Udalguri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.5,
        "lat": 23.08333
      },
      "name": "Udaipura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.48333,
        "lat": 27.716669
      },
      "name": "Udaipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.691826,
        "lat": 24.571167
      },
      "name": "Udaipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.48333,
        "lat": 23.533331
      },
      "name": "Udaipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.699997,
        "lat": 11.4
      },
      "name": "Ooty",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.166672,
        "lat": 29.466669
      },
      "name": "Uchana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.616669,
        "lat": 11.16667
      },
      "name": "Turaiyur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.22007,
        "lat": 25.519831
      },
      "name": "Tura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.550003,
        "lat": 17.35
      },
      "name": "Tuni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.283333,
        "lat": 27.200001
      },
      "name": "Tundla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.73333,
        "lat": 21.383329
      },
      "name": "Tumsar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.101669,
        "lat": 13.34222
      },
      "name": "Tumkur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.416672,
        "lat": 27.549999
      },
      "name": "Tulsipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.083328,
        "lat": 18.0
      },
      "name": "Tuljapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.666672,
        "lat": 26.316669
      },
      "name": "Tufanganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.833328,
        "lat": 26.283331
      },
      "name": "Tuensang",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 8.48333
      },
      "name": "Thiruvananthapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.216667,
        "lat": 10.51667
      },
      "name": "Trichur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.783333,
        "lat": 26.16667
      },
      "name": "Tonk",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.01667,
        "lat": 9.73333
      },
      "name": "Tondi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.900002,
        "lat": 29.700001
      },
      "name": "Tohana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.48333,
        "lat": 26.01667
      },
      "name": "Todaraisingh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.816673,
        "lat": 26.91667
      },
      "name": "Todabhim",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.150002,
        "lat": 20.299999
      },
      "name": "Titlagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.373611,
        "lat": 22.736389
      },
      "name": "Titagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.883331,
        "lat": 8.33333
      },
      "name": "Tisaiyanvilai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.550003,
        "lat": 12.66667
      },
      "name": "Cheyyar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.066673,
        "lat": 12.21667
      },
      "name": "Tiruvannamalai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.916672,
        "lat": 13.15
      },
      "name": "Tiruvallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 9.38333
      },
      "name": "Tiruvalla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.633331,
        "lat": 13.18333
      },
      "name": "Thiruthani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.833328,
        "lat": 9.48333
      },
      "name": "Tiruttangal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.916672,
        "lat": 10.9
      },
      "name": "Tirur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 9.83333
      },
      "name": "Tiruppuvanam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.349998,
        "lat": 11.1
      },
      "name": "Tiruppur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.066673,
        "lat": 9.86667
      },
      "name": "Tirupparangunram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.416672,
        "lat": 13.65
      },
      "name": "Tirupati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 8.73333
      },
      "name": "Tirunelveli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.349998,
        "lat": 13.68333
      },
      "name": "Tirumala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 11.95
      },
      "name": "Tirukkoyilur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 11.38333
      },
      "name": "Tiruchengode",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.683327,
        "lat": 10.81667
      },
      "name": "Tiruchchirappalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 8.48333
      },
      "name": "Tiruchchendur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.23333,
        "lat": 13.7
      },
      "name": "Tirthahalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.478333,
        "lat": 13.25861
      },
      "name": "Tiptur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.366669,
        "lat": 27.5
      },
      "name": "Tinsukia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.026108,
        "lat": 13.11139
      },
      "name": "Tinnanur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.650002,
        "lat": 12.25
      },
      "name": "Tindivanam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.73333,
        "lat": 27.98333
      },
      "name": "Tilhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.833298,
        "lat": 24.745001
      },
      "name": "Tikamgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.849998,
        "lat": 27.933331
      },
      "name": "Tijara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.01667,
        "lat": 24.633329
      },
      "name": "Thoubal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.650002,
        "lat": 10.76667
      },
      "name": "Thiruvarur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.216667,
        "lat": 22.799999
      },
      "name": "Thasra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.626671,
        "lat": 24.396111
      },
      "name": "Tharad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.150002,
        "lat": 10.8
      },
      "name": "Thanjavur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.816673,
        "lat": 29.98333
      },
      "name": "Thanesar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.966667,
        "lat": 19.200001
      },
      "name": "Thane",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.416672,
        "lat": 29.58639
      },
      "name": "Thana Bhawan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.183327,
        "lat": 22.566669
      },
      "name": "Than",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.133331,
        "lat": 26.450001
      },
      "name": "Thakurganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.849998,
        "lat": 29.200001
      },
      "name": "Thakurdwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.800003,
        "lat": 26.633329
      },
      "name": "Tezpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.050003,
        "lat": 16.5
      },
      "name": "Terdal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.650002,
        "lat": 24.98333
      },
      "name": "Teonthar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 8.96667
      },
      "name": "Thenkasi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.48333,
        "lat": 10.0
      },
      "name": "Teni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.533333,
        "lat": 11.75
      },
      "name": "Thalassery",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.83889,
        "lat": 21.026939
      },
      "name": "Telhara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.23333,
        "lat": 18.616671
      },
      "name": "Tekkali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.883331,
        "lat": 15.53333
      },
      "name": "Tekkalakote",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.833328,
        "lat": 24.933331
      },
      "name": "Tekari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.48333,
        "lat": 30.383329
      },
      "name": "Tehri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.949997,
        "lat": 25.48333
      },
      "name": "Teghra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 17.033331
      },
      "name": "Tasgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.925278,
        "lat": 31.450001
      },
      "name": "Tarn Taran",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.816673,
        "lat": 13.71667
      },
      "name": "Tarikere",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.852783,
        "lat": 11.03194
      },
      "name": "Tharangambadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.035103,
        "lat": 28.6709
      },
      "name": "Taranagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.033333,
        "lat": 23.33333
      },
      "name": "Tarana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.98333,
        "lat": 11.7
      },
      "name": "Taramangalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.01722,
        "lat": 22.885
      },
      "name": "Tarakeswar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 28.216669
      },
      "name": "Taoru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.699997,
        "lat": 16.75
      },
      "name": "Tanuku",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.583328,
        "lat": 17.23333
      },
      "name": "Tandur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.933327,
        "lat": 28.98333
      },
      "name": "Tanda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.650002,
        "lat": 26.549999
      },
      "name": "Tanda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.116669,
        "lat": 29.08333
      },
      "name": "Tanakpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.916672,
        "lat": 22.299999
      },
      "name": "Tamluk",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.866669,
        "lat": 31.94861
      },
      "name": "Talwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.933327,
        "lat": 30.85
      },
      "name": "Talwandi Bhai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.216667,
        "lat": 21.566669
      },
      "name": "Taloda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.349998,
        "lat": 12.05
      },
      "name": "Taliparamba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.316673,
        "lat": 16.48333
      },
      "name": "Talikota",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.800003,
        "lat": 15.46667
      },
      "name": "Taleigao",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.683327,
        "lat": 18.716669
      },
      "name": "Talegaon Dabhade",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.216667,
        "lat": 20.950001
      },
      "name": "Talcher",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.050003,
        "lat": 21.35
      },
      "name": "Talaja",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.921387,
        "lat": 22.586109
      },
      "name": "Taki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.866669,
        "lat": 22.15
      },
      "name": "Takhatpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.0,
        "lat": 25.33333
      },
      "name": "Takhatgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.48333,
        "lat": 29.16667
      },
      "name": "Tajpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.01667,
        "lat": 14.91667
      },
      "name": "Tadpatri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.5,
        "lat": 16.83333
      },
      "name": "Tadepallegudem",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.599998,
        "lat": 16.48333
      },
      "name": "Tadepalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.616669,
        "lat": 17.15
      },
      "name": "Suriapet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.416672,
        "lat": 25.466669
      },
      "name": "Surianwan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.683327,
        "lat": 22.700001
      },
      "name": "Surendranagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 29.316669
      },
      "name": "Suratgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.833328,
        "lat": 21.16667
      },
      "name": "Surat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.400002,
        "lat": 8.96667
      },
      "name": "Surandai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.734703,
        "lat": 28.312401
      },
      "name": "Surajgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.599998,
        "lat": 26.116671
      },
      "name": "Supaul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.966667,
        "lat": 24.366671
      },
      "name": "Sunel",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.883331,
        "lat": 31.533331
      },
      "name": "Sundarnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.033333,
        "lat": 22.116671
      },
      "name": "Sundargarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 30.133329
      },
      "name": "Sunam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 12.56667
      },
      "name": "Sulya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.01667,
        "lat": 13.7
      },
      "name": "Suluru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.133331,
        "lat": 11.03333
      },
      "name": "Sulur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.199722,
        "lat": 31.215281
      },
      "name": "Sultanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.066673,
        "lat": 26.26667
      },
      "name": "Sultanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.033333,
        "lat": 24.65
      },
      "name": "Suket",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.050003,
        "lat": 29.033331
      },
      "name": "Suar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.633331,
        "lat": 9.51667
      },
      "name": "Srivilliputhur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.01667,
        "lat": 18.033331
      },
      "name": "Srivardhan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 8.61667
      },
      "name": "Srivaikuntam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.866669,
        "lat": 16.08333
      },
      "name": "Srisailam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.25544,
        "lat": 17.26652
      },
      "name": "Sriramnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.948891,
        "lat": 12.96889
      },
      "name": "Sriperumbudur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.216667,
        "lat": 13.33333
      },
      "name": "Srinivaspur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.816673,
        "lat": 34.083328
      },
      "name": "Srinagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 30.216669
      },
      "name": "Srinagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.599998,
        "lat": 27.466669
      },
      "name": "Sri Madhopur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.45417,
        "lat": 29.84194
      },
      "name": "Karanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.900002,
        "lat": 18.299999
      },
      "name": "Srikakulam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.01667,
        "lat": 28.08333
      },
      "name": "Sri Dungargarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.616669,
        "lat": 20.6
      },
      "name": "Soygaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.75,
        "lat": 27.883329
      },
      "name": "Soron",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.685829,
        "lat": 21.288059
      },
      "name": "Soro",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.433327,
        "lat": 19.75
      },
      "name": "Sorada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.466667,
        "lat": 34.299999
      },
      "name": "Sopur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 28.98333
      },
      "name": "Sonipat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.566673,
        "lat": 21.16667
      },
      "name": "Songadh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.916672,
        "lat": 20.83333
      },
      "name": "Sonepur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.033333,
        "lat": 27.066669
      },
      "name": "Sonari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.416672,
        "lat": 23.299999
      },
      "name": "Sonamukhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.599998,
        "lat": 18.933331
      },
      "name": "Sompeta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.066673,
        "lat": 13.5
      },
      "name": "Someshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.116669,
        "lat": 30.91667
      },
      "name": "Solan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.716667,
        "lat": 22.549999
      },
      "name": "Sojitra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.666672,
        "lat": 25.91667
      },
      "name": "Sojat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.066673,
        "lat": 28.25
      },
      "name": "Sohna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.199997,
        "lat": 22.700001
      },
      "name": "Sohagpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.416672,
        "lat": 25.633329
      },
      "name": "Siwana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.366669,
        "lat": 26.216669
      },
      "name": "Siwan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.816673,
        "lat": 9.45
      },
      "name": "Sivakasi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.800003,
        "lat": 11.11667
      },
      "name": "Sivagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433327,
        "lat": 9.33333
      },
      "name": "Sivagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.48333,
        "lat": 9.86667
      },
      "name": "Sivaganga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.533333,
        "lat": 23.91667
      },
      "name": "Siuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.699997,
        "lat": 28.933331
      },
      "name": "Sitarganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.683327,
        "lat": 27.566669
      },
      "name": "Sitapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.48333,
        "lat": 26.6
      },
      "name": "Sitamarhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.76667,
        "lat": 27.15
      },
      "name": "Siswa Bazar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.466667,
        "lat": 29.41667
      },
      "name": "Sisauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.383331,
        "lat": 18.83333
      },
      "name": "Sirur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 11.33333
      },
      "name": "Sirumugai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.900002,
        "lat": 15.63333
      },
      "name": "Siruguppa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.833328,
        "lat": 18.383329
      },
      "name": "Sirsilla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.650002,
        "lat": 28.65
      },
      "name": "Sirsi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.849998,
        "lat": 14.61667
      },
      "name": "Sirsi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.699997,
        "lat": 27.049999
      },
      "name": "Sirsaganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.01667,
        "lat": 29.533331
      },
      "name": "Sirsa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 24.1
      },
      "name": "Sironj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.866669,
        "lat": 24.883329
      },
      "name": "Sirohi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.73333,
        "lat": 11.23333
      },
      "name": "Sirkazhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.3825,
        "lat": 30.645559
      },
      "name": "Sirhind",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.909172,
        "lat": 13.74528
      },
      "name": "Sira",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.0,
        "lat": 19.85
      },
      "name": "Sinnar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.229439,
        "lat": 22.80917
      },
      "name": "Singur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.033333,
        "lat": 15.25
      },
      "name": "Singarayakonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 11.0
      },
      "name": "Singanallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.76667,
        "lat": 15.78333
      },
      "name": "Sindhnur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.23333,
        "lat": 16.91667
      },
      "name": "Sindgi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.166672,
        "lat": 31.1
      },
      "name": "Shimla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.51667,
        "lat": 22.616671
      },
      "name": "Simdega",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.01667,
        "lat": 20.26667
      },
      "name": "Silvassa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.650002,
        "lat": 20.299999
      },
      "name": "Sillod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.800003,
        "lat": 24.816669
      },
      "name": "Silchar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.416672,
        "lat": 25.08333
      },
      "name": "Silao",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.150002,
        "lat": 27.616671
      },
      "name": "Sikar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.400002,
        "lat": 27.700001
      },
      "name": "Sikandra Rao",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.050003,
        "lat": 26.049999
      },
      "name": "Sikandarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 28.450001
      },
      "name": "Sikandarabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.833328,
        "lat": 22.433331
      },
      "name": "Sikka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.316673,
        "lat": 23.783331
      },
      "name": "Sijua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.116669,
        "lat": 23.48333
      },
      "name": "Sihora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.966667,
        "lat": 21.700001
      },
      "name": "Sihor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.862778,
        "lat": 13.38806
      },
      "name": "Sidlaghatta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.883331,
        "lat": 24.41667
      },
      "name": "Sidhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.833328,
        "lat": 27.283331
      },
      "name": "Sidhauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.849998,
        "lat": 18.1
      },
      "name": "Siddipet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.383331,
        "lat": 23.91667
      },
      "name": "Siddhapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.633331,
        "lat": 26.98333
      },
      "name": "Sibsagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.716667,
        "lat": 23.4
      },
      "name": "Shujalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.70417,
        "lat": 12.41361
      },
      "name": "Shrirangapattana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.342216,
        "lat": 22.752781
      },
      "name": "Shrirampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.683327,
        "lat": 18.616671
      },
      "name": "Shrigonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.75,
        "lat": 16.51667
      },
      "name": "Shorapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.283333,
        "lat": 10.76667
      },
      "name": "Shoranur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.416672,
        "lat": 13.11667
      },
      "name": "Sholinghur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.916672,
        "lat": 17.683331
      },
      "name": "Solapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.650002,
        "lat": 25.433331
      },
      "name": "Shivpuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.316673,
        "lat": 28.716669
      },
      "name": "Shishgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.883331,
        "lat": 21.35
      },
      "name": "Shirpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 15.23333
      },
      "name": "Shirhatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.48333,
        "lat": 19.76667
      },
      "name": "Shirdi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 13.91667
      },
      "name": "Shimoga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.883133,
        "lat": 25.56892
      },
      "name": "Shillong",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.433327,
        "lat": 26.700001
      },
      "name": "Shiliguri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.599998,
        "lat": 27.1
      },
      "name": "Shikohabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.01667,
        "lat": 28.283333
      },
      "name": "Shikarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.349998,
        "lat": 14.26667
      },
      "name": "Shikarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.23333,
        "lat": 15.0
      },
      "name": "Shiggaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.333328,
        "lat": 9.7
      },
      "name": "Shertallai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 29.35
      },
      "name": "Sherkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.783333,
        "lat": 24.566669
      },
      "name": "Sherghati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.699997,
        "lat": 25.66667
      },
      "name": "Sheopur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.300003,
        "lat": 26.51667
      },
      "name": "Sheohar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.066673,
        "lat": 25.15
      },
      "name": "Sheoganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.683327,
        "lat": 20.783331
      },
      "name": "Shegaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.466667,
        "lat": 23.25
      },
      "name": "Shantipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.433327,
        "lat": 27.533331
      },
      "name": "Shamsabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.133331,
        "lat": 27.01667
      },
      "name": "Shamsabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.316673,
        "lat": 29.450001
      },
      "name": "Shamli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.633331,
        "lat": 24.183331
      },
      "name": "Shamgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.26667,
        "lat": 23.433331
      },
      "name": "Shajapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.849998,
        "lat": 25.15
      },
      "name": "Shaikhpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.966667,
        "lat": 27.383333
      },
      "name": "Shahpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.933327,
        "lat": 25.633329
      },
      "name": "Shahpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 29.35
      },
      "name": "Shahpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.449997,
        "lat": 25.58333
      },
      "name": "Shahpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.216667,
        "lat": 21.23333
      },
      "name": "Shahpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.833328,
        "lat": 16.700001
      },
      "name": "Shahpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.916672,
        "lat": 27.883329
      },
      "name": "Shahjahanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.316673,
        "lat": 28.549999
      },
      "name": "Shahi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.683327,
        "lat": 26.049999
      },
      "name": "Shahganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.349998,
        "lat": 23.283331
      },
      "name": "Shahdol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.466667,
        "lat": 21.549999
      },
      "name": "Shahada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.871498,
        "lat": 30.1681
      },
      "name": "Shahabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.01667,
        "lat": 28.566669
      },
      "name": "Shahabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.949997,
        "lat": 27.65
      },
      "name": "Shahabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 17.133329
      },
      "name": "Shahabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.833328,
        "lat": 23.299999
      },
      "name": "Serchhip",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 17.183331
      },
      "name": "Seram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.466667,
        "lat": 22.450001
      },
      "name": "Seoni Malwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.533333,
        "lat": 22.08333
      },
      "name": "Seoni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.779716,
        "lat": 26.15778
      },
      "name": "Seondha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 29.216669
      },
      "name": "Seohara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.099998,
        "lat": 21.683331
      },
      "name": "Sendhwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.083328,
        "lat": 23.200001
      },
      "name": "Sehore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.542633,
        "lat": 17.504271
      },
      "name": "Secunderabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.466667,
        "lat": 22.549999
      },
      "name": "Sayla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.366669,
        "lat": 25.98333
      },
      "name": "Sawai Madhopur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.883331,
        "lat": 21.15
      },
      "name": "Savda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.349998,
        "lat": 14.96667
      },
      "name": "Savanur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.816673,
        "lat": 15.9
      },
      "name": "Savantvadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 21.65
      },
      "name": "Sausar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.116669,
        "lat": 15.78333
      },
      "name": "Saundatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.25,
        "lat": 11.51667
      },
      "name": "Sathyamangalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 9.36667
      },
      "name": "Sattur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.183327,
        "lat": 16.4
      },
      "name": "Sattenapalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.833336,
        "lat": 24.583332
      },
      "name": "Satna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.98333,
        "lat": 17.683331
      },
      "name": "Satara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.199997,
        "lat": 20.58333
      },
      "name": "Satana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.033333,
        "lat": 18.33333
      },
      "name": "Sasvad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.0,
        "lat": 26.066669
      },
      "name": "Sarwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.5,
        "lat": 22.98333
      },
      "name": "Sarkhej",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.25,
        "lat": 29.700001
      },
      "name": "Sardulgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.616669,
        "lat": 29.15
      },
      "name": "Sardhana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.48333,
        "lat": 28.433331
      },
      "name": "Sardarshahr",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.099998,
        "lat": 28.5
      },
      "name": "Sarauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.466667,
        "lat": 23.566669
      },
      "name": "Sarangpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.0,
        "lat": 21.33333
      },
      "name": "Saraipali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.916672,
        "lat": 26.01667
      },
      "name": "Sarai Mir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.51667,
        "lat": 25.383329
      },
      "name": "Sarai Akil",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.900002,
        "lat": 21.383329
      },
      "name": "Saoner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.199997,
        "lat": 22.549999
      },
      "name": "Sankrail",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.48333,
        "lat": 16.26667
      },
      "name": "Sankeshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.833328,
        "lat": 30.23333
      },
      "name": "Sangrur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.199997,
        "lat": 17.433331
      },
      "name": "Sangola",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.283333,
        "lat": 24.91667
      },
      "name": "Sangod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.564171,
        "lat": 16.85438
      },
      "name": "Sangli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.449997,
        "lat": 29.799999
      },
      "name": "Sangaria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.091667,
        "lat": 17.62944
      },
      "name": "Sangareddi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.216667,
        "lat": 19.566669
      },
      "name": "Sangamner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.550003,
        "lat": 15.1
      },
      "name": "Sandur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.51667,
        "lat": 27.083332
      },
      "name": "Sandila",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.949997,
        "lat": 27.299999
      },
      "name": "Sandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 15.36667
      },
      "name": "Sancoale",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.772217,
        "lat": 24.75528
      },
      "name": "Sanchor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.066673,
        "lat": 22.183331
      },
      "name": "Sanawad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.455276,
        "lat": 30.3025
      },
      "name": "Sanaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.383331,
        "lat": 22.98333
      },
      "name": "Sanand",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.916672,
        "lat": 25.85
      },
      "name": "Samthar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.18972,
        "lat": 30.83667
      },
      "name": "Samrala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.583328,
        "lat": 25.816669
      },
      "name": "Samdari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.199997,
        "lat": 26.91667
      },
      "name": "Sambhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.550003,
        "lat": 28.58333
      },
      "name": "Sambhal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.966667,
        "lat": 21.450001
      },
      "name": "Sambalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.116669,
        "lat": 32.566669
      },
      "name": "Samba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.783333,
        "lat": 25.85
      },
      "name": "Samastipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.183327,
        "lat": 17.049999
      },
      "name": "Samalkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 29.23333
      },
      "name": "Samalkha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.216667,
        "lat": 18.533331
      },
      "name": "Salur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.050003,
        "lat": 24.133329
      },
      "name": "Salumbar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 11.65
      },
      "name": "Salem",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.599998,
        "lat": 22.316669
      },
      "name": "Salaya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.966667,
        "lat": 22.033331
      },
      "name": "Sakti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.783333,
        "lat": 12.96667
      },
      "name": "Sakleshpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.666672,
        "lat": 23.950001
      },
      "name": "Sainthia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.466667,
        "lat": 19.466669
      },
      "name": "Sailu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.966667,
        "lat": 22.48333
      },
      "name": "Saiha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.183327,
        "lat": 25.549999
      },
      "name": "Saidpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.650002,
        "lat": 25.25
      },
      "name": "Sahibganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.849998,
        "lat": 27.799999
      },
      "name": "Sahawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.75,
        "lat": 28.083332
      },
      "name": "Sahaswan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.616669,
        "lat": 29.133329
      },
      "name": "Sahaspur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.599998,
        "lat": 25.883329
      },
      "name": "Saharsa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 29.966669
      },
      "name": "Saharanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.73333,
        "lat": 26.783331
      },
      "name": "Sagauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.716667,
        "lat": 23.83333
      },
      "name": "Sagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.033333,
        "lat": 14.16667
      },
      "name": "Sagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.349998,
        "lat": 26.73333
      },
      "name": "Safipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.666672,
        "lat": 29.41667
      },
      "name": "Safidon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.433327,
        "lat": 25.183331
      },
      "name": "Sadri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.949997,
        "lat": 17.616671
      },
      "name": "Sadaseopet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.550003,
        "lat": 16.566669
      },
      "name": "Sadalgi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.050003,
        "lat": 27.450001
      },
      "name": "Sadabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.400002,
        "lat": 26.25
      },
      "name": "Sabalgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.033333,
        "lat": 25.75
      },
      "name": "Rusera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.900002,
        "lat": 26.48333
      },
      "name": "Rura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.533058,
        "lat": 30.966391
      },
      "name": "Rupnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.614441,
        "lat": 26.43944
      },
      "name": "Rudarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.883331,
        "lat": 29.866671
      },
      "name": "Roorkee",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.73333,
        "lat": 15.66667
      },
      "name": "Ron",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 28.9
      },
      "name": "Rohtak",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.116669,
        "lat": 18.433331
      },
      "name": "Roha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.283333,
        "lat": 12.96667
      },
      "name": "Robertsonpet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.066673,
        "lat": 24.700001
      },
      "name": "Robertsganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.783333,
        "lat": 19.966669
      },
      "name": "Risod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.347778,
        "lat": 22.71417
      },
      "name": "Rishra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.316673,
        "lat": 30.116671
      },
      "name": "Rishikesh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 27.35
      },
      "name": "Ringas",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.51667,
        "lat": 28.700001
      },
      "name": "Richha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.616669,
        "lat": 28.183331
      },
      "name": "Rewari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.300003,
        "lat": 24.533331
      },
      "name": "Rewa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.666672,
        "lat": 25.783331
      },
      "name": "Revelganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.849998,
        "lat": 16.01667
      },
      "name": "Repalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.383331,
        "lat": 25.85
      },
      "name": "Reoti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.033333,
        "lat": 24.200001
      },
      "name": "Renukut",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.51667,
        "lat": 13.65
      },
      "name": "Renigunta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.872223,
        "lat": 21.52611
      },
      "name": "Remuna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.083328,
        "lat": 23.633329
      },
      "name": "Rehli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.666672,
        "lat": 18.466669
      },
      "name": "Razam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.783333,
        "lat": 16.48333
      },
      "name": "Raybag",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.866669,
        "lat": 14.7
      },
      "name": "Rayadrug",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.75,
        "lat": 14.05
      },
      "name": "Rayachoti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.783333,
        "lat": 27.566669
      },
      "name": "Raya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.849998,
        "lat": 26.98333
      },
      "name": "Raxaul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.383331,
        "lat": 29.283331
      },
      "name": "Rawatsar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 24.933331
      },
      "name": "Rawatbhata",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.033333,
        "lat": 21.25
      },
      "name": "Raver",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.300003,
        "lat": 16.98333
      },
      "name": "Ratnagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.066673,
        "lat": 23.316669
      },
      "name": "Ratlam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 29.683331
      },
      "name": "Ratia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.566673,
        "lat": 25.58333
      },
      "name": "Rath",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.166672,
        "lat": 22.299999
      },
      "name": "Ratanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 28.08333
      },
      "name": "Ratangarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.849998,
        "lat": 25.85
      },
      "name": "Rasra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 11.46667
      },
      "name": "Rasipuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.633331,
        "lat": 23.566669
      },
      "name": "Rapar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.066673,
        "lat": 25.25
      },
      "name": "Ranipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.416672,
        "lat": 29.65
      },
      "name": "Ranikhet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.133331,
        "lat": 23.616671
      },
      "name": "Raniganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.616669,
        "lat": 14.61667
      },
      "name": "Ranibennur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.833328,
        "lat": 29.533331
      },
      "name": "Rania",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.633331,
        "lat": 26.466669
      },
      "name": "Rangia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.650002,
        "lat": 26.816669
      },
      "name": "Rangapara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.333328,
        "lat": 23.35
      },
      "name": "Ranchi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.740829,
        "lat": 21.68417
      },
      "name": "Ranavav",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.583328,
        "lat": 23.183331
      },
      "name": "Ranaghat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.333328,
        "lat": 21.4
      },
      "name": "Ramtek",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.783333,
        "lat": 24.16667
      },
      "name": "Rampur Hat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.23333,
        "lat": 30.25
      },
      "name": "Rampura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.433327,
        "lat": 24.466669
      },
      "name": "Rampura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.449997,
        "lat": 29.816669
      },
      "name": "Rampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.033333,
        "lat": 28.816669
      },
      "name": "Rampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.116669,
        "lat": 29.4
      },
      "name": "Ramnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.316673,
        "lat": 27.16667
      },
      "name": "Ramnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.033333,
        "lat": 25.283333
      },
      "name": "Ramnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.616669,
        "lat": 22.83333
      },
      "name": "Ramjibanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.183327,
        "lat": 27.25
      },
      "name": "Ramgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.51667,
        "lat": 23.633329
      },
      "name": "Ramgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.933327,
        "lat": 24.65
      },
      "name": "Ramganj Mandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.300003,
        "lat": 9.28333
      },
      "name": "Rameswaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 13.11667
      },
      "name": "Ramapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.833328,
        "lat": 9.38333
      },
      "name": "Ramanathapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 12.71667
      },
      "name": "Ramanagaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.01667,
        "lat": 16.85
      },
      "name": "Ramachandrapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.366669,
        "lat": 19.783331
      },
      "name": "Rajura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.433327,
        "lat": 21.049999
      },
      "name": "Rajula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.883331,
        "lat": 25.066669
      },
      "name": "Rajsamand",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.595001,
        "lat": 30.483061
      },
      "name": "Rajpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.349998,
        "lat": 22.299999
      },
      "name": "Rajpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.133331,
        "lat": 21.933331
      },
      "name": "Rajpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.5,
        "lat": 21.866671
      },
      "name": "Rajpipla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.033333,
        "lat": 21.1
      },
      "name": "Raj Nandgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.833328,
        "lat": 25.049999
      },
      "name": "Rajmahal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.783333,
        "lat": 22.299999
      },
      "name": "Rajkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 18.866671
      },
      "name": "Rajgurunagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.416672,
        "lat": 25.033331
      },
      "name": "Rajgir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 28.633329
      },
      "name": "Rajgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.633331,
        "lat": 27.23333
      },
      "name": "Rajgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.716667,
        "lat": 24.0
      },
      "name": "Rajgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.949997,
        "lat": 22.683331
      },
      "name": "Rajgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.300003,
        "lat": 33.383331
      },
      "name": "Rajauri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.566673,
        "lat": 9.45
      },
      "name": "Rajapalaiyam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.166672,
        "lat": 14.18333
      },
      "name": "Rajampet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.466667,
        "lat": 28.033331
      },
      "name": "Rajaldesar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.171387,
        "lat": 26.896111
      },
      "name": "Rajakhera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.783333,
        "lat": 16.98333
      },
      "name": "Rajahmundry",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.449173,
        "lat": 29.53583
      },
      "name": "Raisinghnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.800003,
        "lat": 23.33333
      },
      "name": "Raisen",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.099998,
        "lat": 30.316669
      },
      "name": "Raipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.01667,
        "lat": 26.049999
      },
      "name": "Raipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.633331,
        "lat": 21.23333
      },
      "name": "Raipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.599998,
        "lat": 30.65
      },
      "name": "Raikot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.433327,
        "lat": 18.25
      },
      "name": "Raigarh Fort",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.400002,
        "lat": 21.9
      },
      "name": "Raigarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.116669,
        "lat": 25.616671
      },
      "name": "Raiganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.366669,
        "lat": 16.200001
      },
      "name": "Raichur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.650002,
        "lat": 19.383329
      },
      "name": "Rahuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.199997,
        "lat": 17.6
      },
      "name": "Rahimatpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.366669,
        "lat": 23.783331
      },
      "name": "Rahatgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.666672,
        "lat": 23.549999
      },
      "name": "Raghunathpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.199997,
        "lat": 24.450001
      },
      "name": "Raghogarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.650002,
        "lat": 24.816669
      },
      "name": "Rafiganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.23333,
        "lat": 26.216669
      },
      "name": "Rae Bareli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.599998,
        "lat": 23.83333
      },
      "name": "Radhanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.099998,
        "lat": 16.466669
      },
      "name": "Rabkavi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.599998,
        "lat": 8.88333
      },
      "name": "Kollam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.550003,
        "lat": 25.85
      },
      "name": "Qasba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.391937,
        "lat": 31.81778
      },
      "name": "Qadian",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.550003,
        "lat": 13.45
      },
      "name": "Puttur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.216667,
        "lat": 12.76667
      },
      "name": "Puttur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.550003,
        "lat": 26.5
      },
      "name": "Pushkar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.583328,
        "lat": 19.9
      },
      "name": "Pusad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.783333,
        "lat": 26.466669
      },
      "name": "Purwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.366669,
        "lat": 23.33333
      },
      "name": "Puruliya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.466667,
        "lat": 25.783331
      },
      "name": "Purnia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.050003,
        "lat": 19.183331
      },
      "name": "Purna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.849998,
        "lat": 19.799999
      },
      "name": "Puri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.150002,
        "lat": 28.51667
      },
      "name": "Puranpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.716667,
        "lat": 26.48333
      },
      "name": "Pupri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.199997,
        "lat": 11.35
      },
      "name": "Punjai Puliyampatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 13.36667
      },
      "name": "Punganuru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.855347,
        "lat": 18.519569
      },
      "name": "Pune",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.550003,
        "lat": 29.75
      },
      "name": "Pundri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 22.23333
      },
      "name": "Punasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 9.0
      },
      "name": "Punalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.199997,
        "lat": 27.866671
      },
      "name": "Punahana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.899551,
        "lat": 33.87405
      },
      "name": "Pulwama",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.416672,
        "lat": 9.16667
      },
      "name": "Puliyangudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.23333,
        "lat": 14.41667
      },
      "name": "Pulivendla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.333328,
        "lat": 20.73333
      },
      "name": "Pulgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.849998,
        "lat": 26.23333
      },
      "name": "Pukhrayan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.816673,
        "lat": 10.38333
      },
      "name": "Pudukkottai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.550003,
        "lat": 14.73333
      },
      "name": "Proddatur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.783333,
        "lat": 24.033331
      },
      "name": "Pratapgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.75,
        "lat": 11.66667
      },
      "name": "Port Blair",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.374718,
        "lat": 26.67
      },
      "name": "Porsa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.609291,
        "lat": 21.642191
      },
      "name": "Porbandar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.107498,
        "lat": 13.04833
      },
      "name": "Poonamalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.566673,
        "lat": 16.066669
      },
      "name": "Ponnuru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.199997,
        "lat": 13.31667
      },
      "name": "Ponneri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.925232,
        "lat": 10.76695
      },
      "name": "Ponnani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.830002,
        "lat": 11.93
      },
      "name": "Puducherry",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.01667,
        "lat": 15.4
      },
      "name": "Ponda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.133331,
        "lat": 12.5
      },
      "name": "Polur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 10.66667
      },
      "name": "Pollachi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.816673,
        "lat": 19.700001
      },
      "name": "Polasara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.916672,
        "lat": 26.91667
      },
      "name": "Pokaran",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.216667,
        "lat": 29.58333
      },
      "name": "Pithoragarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.26667,
        "lat": 17.116671
      },
      "name": "Pithapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.416672,
        "lat": 25.33333
      },
      "name": "Piro",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.099167,
        "lat": 12.33972
      },
      "name": "Piriyapatna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.5,
        "lat": 9.86667
      },
      "name": "Piravam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.533333,
        "lat": 19.799999
      },
      "name": "Pipri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.529999,
        "lat": 26.826389
      },
      "name": "Pipraich",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.833328,
        "lat": 20.116671
      },
      "name": "Pipili",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.537781,
        "lat": 26.385559
      },
      "name": "Pipar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.917221,
        "lat": 30.79722
      },
      "name": "Pinjaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.066673,
        "lat": 24.799999
      },
      "name": "Pindwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.378059,
        "lat": 26.88389
      },
      "name": "Pinahat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.800003,
        "lat": 18.616671
      },
      "name": "Pimpri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.650002,
        "lat": 28.716669
      },
      "name": "Pilkhua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.800003,
        "lat": 28.633329
      },
      "name": "Pilibhit",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.083328,
        "lat": 29.450001
      },
      "name": "Pilibangan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.604103,
        "lat": 28.368401
      },
      "name": "Pilani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.199997,
        "lat": 27.633329
      },
      "name": "Pihani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.099998,
        "lat": 25.549999
      },
      "name": "Phulpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.23333,
        "lat": 26.866671
      },
      "name": "Phulera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.23333,
        "lat": 20.466669
      },
      "name": "Phulabani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.26667,
        "lat": 16.299999
      },
      "name": "Phirangipuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.784172,
        "lat": 31.029169
      },
      "name": "Phillaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.5,
        "lat": 25.66667
      },
      "name": "Phek",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.466667,
        "lat": 26.6
      },
      "name": "Phaphund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.433327,
        "lat": 17.98333
      },
      "name": "Phaltan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.366669,
        "lat": 27.133329
      },
      "name": "Phalodi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.816673,
        "lat": 29.183331
      },
      "name": "Phalauda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.76944,
        "lat": 31.217779
      },
      "name": "Phagwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.800003,
        "lat": 22.466669
      },
      "name": "Petlad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.583328,
        "lat": 11.26667
      },
      "name": "Perundurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.48333,
        "lat": 10.13333
      },
      "name": "Perumpavur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 11.15
      },
      "name": "Periyanayakkanpalaiyam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 10.11667
      },
      "name": "Periyakulam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.183327,
        "lat": 10.3
      },
      "name": "Peravurani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.716667,
        "lat": 12.93333
      },
      "name": "Peranampattu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.883331,
        "lat": 11.23333
      },
      "name": "Perambalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.583328,
        "lat": 14.08333
      },
      "name": "Penukonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.73333,
        "lat": 16.66667
      },
      "name": "Penugonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.900002,
        "lat": 12.13333
      },
      "name": "Pennagaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.23333,
        "lat": 11.4
      },
      "name": "Pennadam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.083328,
        "lat": 18.75
      },
      "name": "Pen",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.583328,
        "lat": 29.98333
      },
      "name": "Pehowa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.133331,
        "lat": 17.08333
      },
      "name": "Peddapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.366669,
        "lat": 18.616671
      },
      "name": "Peddapalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.166672,
        "lat": 16.26667
      },
      "name": "Pedana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.199997,
        "lat": 12.1
      },
      "name": "Payyannur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.099998,
        "lat": 28.066669
      },
      "name": "Pawayan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 14.1
      },
      "name": "Pavagada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 30.15
      },
      "name": "Pauri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.633331,
        "lat": 20.783331
      },
      "name": "Pauni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 20.450001
      },
      "name": "Patur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.316673,
        "lat": 10.43333
      },
      "name": "Pattukkottai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.857224,
        "lat": 31.28083
      },
      "name": "Patti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.150002,
        "lat": 20.716669
      },
      "name": "Patnagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.116669,
        "lat": 25.6
      },
      "name": "Patna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400284,
        "lat": 30.32667
      },
      "name": "Patiala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.449997,
        "lat": 19.25
      },
      "name": "Pathri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 23.9
      },
      "name": "Patharia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.433327,
        "lat": 23.66667
      },
      "name": "Pathardih",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.183327,
        "lat": 19.16667
      },
      "name": "Pathardi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.650002,
        "lat": 32.283329
      },
      "name": "Pathankot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.783333,
        "lat": 9.26667
      },
      "name": "Pathanamthitta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.466667,
        "lat": 22.566669
      },
      "name": "Pathalgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.783333,
        "lat": 28.316669
      },
      "name": "Pataudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.264999,
        "lat": 17.531389
      },
      "name": "Patancheru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.116669,
        "lat": 23.83333
      },
      "name": "Patan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.566673,
        "lat": 20.566669
      },
      "name": "Patamundai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.333328,
        "lat": 28.066669
      },
      "name": "Pasighat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.199997,
        "lat": 22.85
      },
      "name": "Pasan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.76667,
        "lat": 26.883329
      },
      "name": "Parvatsar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.433327,
        "lat": 18.783331
      },
      "name": "Parvatipuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.216667,
        "lat": 19.6
      },
      "name": "Partur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.116669,
        "lat": 20.883329
      },
      "name": "Parola",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.533333,
        "lat": 18.85
      },
      "name": "Parli Vaijnath",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.083328,
        "lat": 18.76667
      },
      "name": "Parlakimidi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 28.98333
      },
      "name": "Parichhatgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.949997,
        "lat": 20.51667
      },
      "name": "Pardi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.783333,
        "lat": 19.26667
      },
      "name": "Parbhani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.699997,
        "lat": 8.78333
      },
      "name": "Paravur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.76667,
        "lat": 22.200001
      },
      "name": "Parasia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.599998,
        "lat": 9.55
      },
      "name": "Paramagudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.616669,
        "lat": 20.316669
      },
      "name": "Paradip Garh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.349998,
        "lat": 11.95
      },
      "name": "Pappinisseri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.283333,
        "lat": 10.93333
      },
      "name": "Papanasam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.616669,
        "lat": 30.450001
      },
      "name": "Paonta Sahib",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.099998,
        "lat": 18.98333
      },
      "name": "Panvel",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.550003,
        "lat": 11.76667
      },
      "name": "Panruti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.199997,
        "lat": 24.716667
      },
      "name": "Panna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.968063,
        "lat": 29.388889
      },
      "name": "Panipat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.374443,
        "lat": 22.69417
      },
      "name": "Panihati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.283333,
        "lat": 23.08333
      },
      "name": "Pandua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.51667,
        "lat": 21.6
      },
      "name": "Pandhurna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.333328,
        "lat": 17.66667
      },
      "name": "Pandharpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.673332,
        "lat": 12.50056
      },
      "name": "Pandavapura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.833328,
        "lat": 15.48333
      },
      "name": "Panaji",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.98333,
        "lat": 23.299999
      },
      "name": "Panagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333336,
        "lat": 28.15
      },
      "name": "Palwal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.683327,
        "lat": 17.6
      },
      "name": "Paloncha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.533333,
        "lat": 10.46667
      },
      "name": "Palani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.75,
        "lat": 13.2
      },
      "name": "Palmaner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 11.93333
      },
      "name": "Pallippatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.933327,
        "lat": 12.91667
      },
      "name": "Pallikondai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.183609,
        "lat": 12.97611
      },
      "name": "Pallavaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.883331,
        "lat": 10.7
      },
      "name": "Pallappatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 10.98333
      },
      "name": "Palladam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.75,
        "lat": 18.6
      },
      "name": "Palkonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.833328,
        "lat": 21.51667
      },
      "name": "Palitana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.583328,
        "lat": 28.450001
      },
      "name": "Palia Kalan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.333336,
        "lat": 25.766666
      },
      "name": "Pali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.050003,
        "lat": 23.35
      },
      "name": "Pali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.650002,
        "lat": 10.78333
      },
      "name": "Palakkad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.75,
        "lat": 19.683331
      },
      "name": "Palghar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.23333,
        "lat": 25.01667
      },
      "name": "Palera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.416672,
        "lat": 18.76667
      },
      "name": "Palasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.433327,
        "lat": 24.16667
      },
      "name": "Palanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.73333,
        "lat": 16.533331
      },
      "name": "Palakollu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.083328,
        "lat": 12.3
      },
      "name": "Palakkodu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.849998,
        "lat": 24.633329
      },
      "name": "Pakaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.116669,
        "lat": 13.46667
      },
      "name": "Pakala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 19.48333
      },
      "name": "Paithan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.050003,
        "lat": 28.183331
      },
      "name": "Pahasu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.981941,
        "lat": 26.9025
      },
      "name": "Padrauna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.083328,
        "lat": 22.23333
      },
      "name": "Padra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333328,
        "lat": 8.23333
      },
      "name": "Padmanabhapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.616669,
        "lat": 29.683331
      },
      "name": "Padampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.066673,
        "lat": 20.98333
      },
      "name": "Padampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.650002,
        "lat": 27.51667
      },
      "name": "Pachperwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.349998,
        "lat": 20.66667
      },
      "name": "Pachora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.383331,
        "lat": 10.76667
      },
      "name": "Ottappalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.050003,
        "lat": 18.16667
      },
      "name": "Osmanabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.466667,
        "lat": 25.98333
      },
      "name": "Orai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.050003,
        "lat": 15.5
      },
      "name": "Ongole",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.060562,
        "lat": 22.46944
      },
      "name": "Okha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.933327,
        "lat": 20.1
      },
      "name": "Ojhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.98333,
        "lat": 24.41667
      },
      "name": "Obra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.849998,
        "lat": 16.783331
      },
      "name": "Nuzvid",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 29.15
      },
      "name": "Nurpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.116669,
        "lat": 27.23333
      },
      "name": "North Lakhimpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.72361,
        "lat": 26.201389
      },
      "name": "North Guwahati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.26667,
        "lat": 25.51667
      },
      "name": "Nongstoin",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.416672,
        "lat": 27.6
      },
      "name": "Nokha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.76667,
        "lat": 29.183331
      },
      "name": "Nohar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.533333,
        "lat": 22.15
      },
      "name": "Noamundi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 18.66667
      },
      "name": "Nizamabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.583328,
        "lat": 26.316669
      },
      "name": "Nirmali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.349998,
        "lat": 19.1
      },
      "name": "Nirmal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.383331,
        "lat": 16.4
      },
      "name": "Nipani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 27.73333
      },
      "name": "Neem ka Thana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.683327,
        "lat": 24.616671
      },
      "name": "Nimbahera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.01667,
        "lat": 20.066669
      },
      "name": "Nimaparha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.0,
        "lat": 26.149719
      },
      "name": "Nimaj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 29.83333
      },
      "name": "Nilokheri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.099998,
        "lat": 12.25
      },
      "name": "Nileshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.76667,
        "lat": 18.1
      },
      "name": "Nilanga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.866669,
        "lat": 10.16667
      },
      "name": "Nilakottai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.766937,
        "lat": 21.458059
      },
      "name": "Nilgiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.383331,
        "lat": 29.33333
      },
      "name": "Nihtaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.666672,
        "lat": 16.91667
      },
      "name": "Nidadavole",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.73333,
        "lat": 27.316669
      },
      "name": "Nichlaul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.083328,
        "lat": 8.4
      },
      "name": "Neyyattinkara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.23114,
        "lat": 28.61282
      },
      "name": "New Delhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.316673,
        "lat": 19.033331
      },
      "name": "Neral",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 21.466669
      },
      "name": "Nepa Nagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.966667,
        "lat": 14.43333
      },
      "name": "Nellore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.683327,
        "lat": 11.76667
      },
      "name": "Nellikkuppam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.389999,
        "lat": 13.10222
      },
      "name": "Nelamangala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.0,
        "lat": 8.6
      },
      "name": "Nedumangad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.900002,
        "lat": 13.9
      },
      "name": "Nayudupeta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.099998,
        "lat": 20.133329
      },
      "name": "Nayagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.133331,
        "lat": 31.116671
      },
      "name": "Nawashahr",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.26667,
        "lat": 27.85
      },
      "name": "Nawalgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.916672,
        "lat": 26.35
      },
      "name": "Niwai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.533333,
        "lat": 24.883329
      },
      "name": "Nawada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.633331,
        "lat": 28.549999
      },
      "name": "Nawabganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.216667,
        "lat": 26.933331
      },
      "name": "Nawabganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.133331,
        "lat": 26.866671
      },
      "name": "Nawabganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.0,
        "lat": 27.01667
      },
      "name": "Nawa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.366669,
        "lat": 15.56667
      },
      "name": "Navalgund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.366669,
        "lat": 23.41667
      },
      "name": "Navadwip",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.416672,
        "lat": 27.433331
      },
      "name": "Nautanwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.099998,
        "lat": 25.4
      },
      "name": "Naugachhia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.23333,
        "lat": 10.23333
      },
      "name": "Nattam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.816673,
        "lat": 24.933331
      },
      "name": "Nathdwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 22.683331
      },
      "name": "Nasrullahganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.333328,
        "lat": 25.049999
      },
      "name": "Nasriganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.449997,
        "lat": 18.83333
      },
      "name": "Naspur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.73333,
        "lat": 26.299999
      },
      "name": "Nasirabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.800003,
        "lat": 19.98333
      },
      "name": "Nasik",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.900002,
        "lat": 25.65
      },
      "name": "Narwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.116669,
        "lat": 29.616671
      },
      "name": "Narwana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.616669,
        "lat": 17.66667
      },
      "name": "Narsipatnam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.099998,
        "lat": 23.700001
      },
      "name": "Narsinghgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 22.950001
      },
      "name": "Narsimhapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.150002,
        "lat": 29.216669
      },
      "name": "Narnaund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.10833,
        "lat": 28.044439
      },
      "name": "Narnaul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 15.71667
      },
      "name": "Nargund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.816673,
        "lat": 15.58333
      },
      "name": "Naregal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.5,
        "lat": 16.73333
      },
      "name": "Narayanpet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.133331,
        "lat": 30.48333
      },
      "name": "Narayangarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.174171,
        "lat": 13.19556
      },
      "name": "Naravarikuppam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.383331,
        "lat": 28.200001
      },
      "name": "Naraura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.716667,
        "lat": 28.5
      },
      "name": "Narauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.066673,
        "lat": 16.25
      },
      "name": "Narasaraopet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.666672,
        "lat": 16.450001
      },
      "name": "Narasapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.050003,
        "lat": 18.41667
      },
      "name": "Narasannapeta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.48333,
        "lat": 25.183331
      },
      "name": "Naraini",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.199997,
        "lat": 26.783331
      },
      "name": "Naraina",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.550003,
        "lat": 27.966669
      },
      "name": "Napasar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.5,
        "lat": 27.866671
      },
      "name": "Nanpara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.682777,
        "lat": 12.11972
      },
      "name": "Nanjangud",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.066673,
        "lat": 28.683331
      },
      "name": "Nangloi Jat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.383331,
        "lat": 31.366671
      },
      "name": "Nangal Township",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.48333,
        "lat": 15.48333
      },
      "name": "Nandyal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.25,
        "lat": 21.366671
      },
      "name": "Nandurbar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.449997,
        "lat": 20.83333
      },
      "name": "Nandura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 15.86667
      },
      "name": "Nandikotkur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.300003,
        "lat": 16.783331
      },
      "name": "Nandigama",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.650002,
        "lat": 20.316669
      },
      "name": "Nandgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.415833,
        "lat": 29.7125
      },
      "name": "Nanauta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.333328,
        "lat": 27.183331
      },
      "name": "Namrup",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333328,
        "lat": 11.36667
      },
      "name": "Nambiyur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.165237,
        "lat": 11.22126
      },
      "name": "Namakkal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 11.46667
      },
      "name": "Namagiripettai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.816673,
        "lat": 24.299999
      },
      "name": "Nalhati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.26667,
        "lat": 17.049999
      },
      "name": "Nalgonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.300003,
        "lat": 17.816669
      },
      "name": "Naldurg",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 29.91667
      },
      "name": "Nakur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.216667,
        "lat": 26.683331
      },
      "name": "Naksalbari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.473328,
        "lat": 31.12583
      },
      "name": "Nakodar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.333328,
        "lat": 29.633329
      },
      "name": "Najibabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.849998,
        "lat": 25.76667
      },
      "name": "Nainwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.116669,
        "lat": 22.433331
      },
      "name": "Nainpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.446861,
        "lat": 29.39743
      },
      "name": "Naini Tal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.416939,
        "lat": 22.902781
      },
      "name": "Naihati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.333328,
        "lat": 27.283331
      },
      "name": "Nahorkatiya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 30.549999
      },
      "name": "Nahan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.099998,
        "lat": 21.15
      },
      "name": "Nagpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.599998,
        "lat": 24.566669
      },
      "name": "Nagod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.449997,
        "lat": 29.450001
      },
      "name": "Nagina",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433327,
        "lat": 8.16667
      },
      "name": "Nagercoil",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.416672,
        "lat": 23.450001
      },
      "name": "Nagda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.73333,
        "lat": 27.200001
      },
      "name": "Nagaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.324707,
        "lat": 16.4821
      },
      "name": "Nagar Karnul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.583328,
        "lat": 13.33333
      },
      "name": "Nagari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.099998,
        "lat": 27.433331
      },
      "name": "Nagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.833328,
        "lat": 10.76667
      },
      "name": "Nagappattinam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.7575,
        "lat": 12.81556
      },
      "name": "Nagamangala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.866669,
        "lat": 22.700001
      },
      "name": "Nadiad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.199997,
        "lat": 27.23333
      },
      "name": "Nadbai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.666672,
        "lat": 11.7
      },
      "name": "Nadapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.116669,
        "lat": 24.616671
      },
      "name": "Nabinagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.148613,
        "lat": 30.37472
      },
      "name": "Nabha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.649719,
        "lat": 12.30722
      },
      "name": "Mysore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.400002,
        "lat": 26.116671
      },
      "name": "Muzaffarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.683327,
        "lat": 29.466669
      },
      "name": "Muzaffarnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.583328,
        "lat": 9.96667
      },
      "name": "Muvattupula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.48333,
        "lat": 10.4
      },
      "name": "Muttupet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.083328,
        "lat": 30.450001
      },
      "name": "Mussoorie",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.449997,
        "lat": 10.93333
      },
      "name": "Musiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.449997,
        "lat": 22.51667
      },
      "name": "Mushabani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.400002,
        "lat": 23.85
      },
      "name": "Murwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.383331,
        "lat": 20.73333
      },
      "name": "Murtajapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.26667,
        "lat": 24.183331
      },
      "name": "Murshidabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.98333,
        "lat": 25.9
      },
      "name": "Murliganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.496391,
        "lat": 30.791941
      },
      "name": "Morinda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.400002,
        "lat": 19.25
      },
      "name": "Murbad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.5,
        "lat": 28.783331
      },
      "name": "Muradnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.066673,
        "lat": 10.1
      },
      "name": "Munnar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.466667,
        "lat": 25.383329
      },
      "name": "Munger",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.683327,
        "lat": 22.066669
      },
      "name": "Mungeli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.099998,
        "lat": 24.41667
      },
      "name": "Mungaoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.816673,
        "lat": 27.066669
      },
      "name": "Mundwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.73333,
        "lat": 22.85
      },
      "name": "Mundra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.033333,
        "lat": 14.96667
      },
      "name": "Mundgod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.900002,
        "lat": 15.21667
      },
      "name": "Mundargi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.25,
        "lat": 21.76667
      },
      "name": "Multai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.800003,
        "lat": 13.1
      },
      "name": "Mulki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.533333,
        "lat": 15.25
      },
      "name": "Mulgund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.400002,
        "lat": 13.16667
      },
      "name": "Mulbagal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.449997,
        "lat": 11.8
      },
      "name": "Mulappilangad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.666672,
        "lat": 20.066669
      },
      "name": "Mul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.51667,
        "lat": 30.48333
      },
      "name": "Muktsar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.366669,
        "lat": 18.700001
      },
      "name": "Mukher",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.615829,
        "lat": 31.95056
      },
      "name": "Mukerian",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.449997,
        "lat": 27.316669
      },
      "name": "Muhammadabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.383888,
        "lat": 26.03306
      },
      "name": "Muhammadabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.75,
        "lat": 25.633329
      },
      "name": "Muhammadabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.116669,
        "lat": 25.299999
      },
      "name": "Mughal Sarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.51667,
        "lat": 19.16667
      },
      "name": "Mudkhed",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.283333,
        "lat": 16.35
      },
      "name": "Mudhol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.433327,
        "lat": 16.01667
      },
      "name": "Mudgal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.133331,
        "lat": 16.33333
      },
      "name": "Muddebihal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.98333,
        "lat": 13.08333
      },
      "name": "Mudbidri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.292221,
        "lat": 26.09
      },
      "name": "Mubarakpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.916672,
        "lat": 26.65
      },
      "name": "Motihari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.833328,
        "lat": 22.9
      },
      "name": "Morwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.013062,
        "lat": 21.33917
      },
      "name": "Morsi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.0,
        "lat": 26.496941
      },
      "name": "Morena",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.833328,
        "lat": 22.816669
      },
      "name": "Morbi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.226112,
        "lat": 26.22611
      },
      "name": "Morar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.466667,
        "lat": 17.799999
      },
      "name": "Moram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 28.83333
      },
      "name": "Moradabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.099998,
        "lat": 26.75
      },
      "name": "Mon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.533333,
        "lat": 26.33333
      },
      "name": "Mokokchung",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.916672,
        "lat": 25.4
      },
      "name": "Mokama",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.76667,
        "lat": 24.5
      },
      "name": "Moirang",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.166672,
        "lat": 30.799999
      },
      "name": "Moga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.300003,
        "lat": 23.466669
      },
      "name": "Modasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.51667,
        "lat": 27.450001
      },
      "name": "Misrikh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.583328,
        "lat": 25.15
      },
      "name": "Mirzapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.583328,
        "lat": 16.866671
      },
      "name": "Mirialguda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 28.549999
      },
      "name": "Mirganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.650002,
        "lat": 28.033331
      },
      "name": "Miranpur Katra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 29.299999
      },
      "name": "Miranpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.26667,
        "lat": 13.26667
      },
      "name": "Minjur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.183327,
        "lat": 28.616671
      },
      "name": "Milak",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.981667,
        "lat": 26.284439
      },
      "name": "Mihona",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.783333,
        "lat": 17.633329
      },
      "name": "Mhasvad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.800003,
        "lat": 11.8
      },
      "name": "Mettur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 11.3
      },
      "name": "Mettupalayam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.033333,
        "lat": 26.65
      },
      "name": "Merta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.433327,
        "lat": 21.316669
      },
      "name": "Mendarda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.116669,
        "lat": 23.200001
      },
      "name": "Memari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.333328,
        "lat": 10.05
      },
      "name": "Melur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.111671,
        "lat": 26.975281
      },
      "name": "Mehndawal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 20.15
      },
      "name": "Mehekar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 28.98333
      },
      "name": "Meerut",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.333328,
        "lat": 22.433331
      },
      "name": "Medinipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 18.033331
      },
      "name": "Medak",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.666672,
        "lat": 11.1
      },
      "name": "Mayiladuthurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.883331,
        "lat": 24.616671
      },
      "name": "Mayang Imphal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.916672,
        "lat": 29.1
      },
      "name": "Mawana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.916672,
        "lat": 11.26667
      },
      "name": "Mavoor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.550003,
        "lat": 9.26667
      },
      "name": "Mavelikara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.25,
        "lat": 30.08333
      },
      "name": "Maur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.883331,
        "lat": 24.683331
      },
      "name": "Mauganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.116669,
        "lat": 25.683331
      },
      "name": "Maudaha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.916672,
        "lat": 25.700001
      },
      "name": "Mau Aimma",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.673058,
        "lat": 26.266939
      },
      "name": "Mau",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.550003,
        "lat": 25.950001
      },
      "name": "Mau",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 11.91667
      },
      "name": "Mattanur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.683334,
        "lat": 27.5
      },
      "name": "Mathura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.216667,
        "lat": 26.33333
      },
      "name": "Matabhanga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.033333,
        "lat": 25.35
      },
      "name": "Masaurhi Buzurg",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.800003,
        "lat": 15.4
      },
      "name": "Marmagao",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.283333,
        "lat": 15.73333
      },
      "name": "Markapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.333328,
        "lat": 26.66667
      },
      "name": "Mariani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.616669,
        "lat": 25.616671
      },
      "name": "Mariahu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.866669,
        "lat": 25.966669
      },
      "name": "Marhaura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.683327,
        "lat": 27.283331
      },
      "name": "Margherita",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.949997,
        "lat": 12.2
      },
      "name": "Marakkanam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 27.73333
      },
      "name": "Marahra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.808983,
        "lat": 15.59154
      },
      "name": "Mapuca",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.5,
        "lat": 19.299999
      },
      "name": "Manwat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.050003,
        "lat": 15.98333
      },
      "name": "Manvi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.666672,
        "lat": 18.65
      },
      "name": "Manthani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 29.98333
      },
      "name": "Mansa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.666672,
        "lat": 23.433331
      },
      "name": "Mansa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.949997,
        "lat": 27.299999
      },
      "name": "Manoharpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.433327,
        "lat": 10.66667
      },
      "name": "Mannargudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.466667,
        "lat": 10.98333
      },
      "name": "Mannarakkat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.449997,
        "lat": 20.25
      },
      "name": "Manmad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.866669,
        "lat": 25.533331
      },
      "name": "Mankachar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.23333,
        "lat": 19.15
      },
      "name": "Manjlegaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.383331,
        "lat": 25.533331
      },
      "name": "Manjhanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.116669,
        "lat": 11.11667
      },
      "name": "Manjeri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.633331,
        "lat": 25.35
      },
      "name": "Manihari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.166672,
        "lat": 25.98333
      },
      "name": "Maniar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.349998,
        "lat": 20.316669
      },
      "name": "Mangrul Pir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.51667,
        "lat": 25.33333
      },
      "name": "Mangrol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.116669,
        "lat": 21.116671
      },
      "name": "Mangrol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.866669,
        "lat": 29.799999
      },
      "name": "Manglaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.883331,
        "lat": 12.86667
      },
      "name": "Mangalore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.033333,
        "lat": 26.433331
      },
      "name": "Mangaldai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.550003,
        "lat": 16.433331
      },
      "name": "Mangalagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.883331,
        "lat": 25.65
      },
      "name": "Maner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.895828,
        "lat": 12.52417
      },
      "name": "Mandya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.366669,
        "lat": 22.83333
      },
      "name": "Mandvi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.300003,
        "lat": 21.25
      },
      "name": "Mandvi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.066673,
        "lat": 24.066669
      },
      "name": "Mandsaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.383331,
        "lat": 22.6
      },
      "name": "Mandla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 31.716669
      },
      "name": "Mandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.133331,
        "lat": 29.5
      },
      "name": "Mandawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.933327,
        "lat": 16.866671
      },
      "name": "Mandapeta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.116669,
        "lat": 9.28333
      },
      "name": "Mandapam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.099998,
        "lat": 25.200001
      },
      "name": "Mandalgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.566673,
        "lat": 25.450001
      },
      "name": "Mandal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.433327,
        "lat": 18.866671
      },
      "name": "Mancheral",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.083328,
        "lat": 22.23333
      },
      "name": "Manawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.133331,
        "lat": 21.5
      },
      "name": "Manavadar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.268707,
        "lat": 24.483709
      },
      "name": "Manasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 10.6
      },
      "name": "Manapparai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.48333,
        "lat": 9.7
      },
      "name": "Manamadurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.26667,
        "lat": 13.16667
      },
      "name": "Manali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.466667,
        "lat": 16.066669
      },
      "name": "Malvan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.937782,
        "lat": 13.0075
      },
      "name": "Malur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 26.283331
      },
      "name": "Malpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.716667,
        "lat": 13.35
      },
      "name": "Malpe",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.033333,
        "lat": 11.48333
      },
      "name": "Mallasamudram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.199997,
        "lat": 20.883329
      },
      "name": "Malkapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.900002,
        "lat": 18.35
      },
      "name": "Malkangiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.716667,
        "lat": 26.916668
      },
      "name": "Malihabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.883331,
        "lat": 30.51667
      },
      "name": "Maler Kotla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.533333,
        "lat": 20.549999
      },
      "name": "Malegaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.083328,
        "lat": 12.38333
      },
      "name": "Malavalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.48333,
        "lat": 30.216669
      },
      "name": "Malaut",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.066673,
        "lat": 11.06667
      },
      "name": "Malappuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.449997,
        "lat": 27.5
      },
      "name": "Makum",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.150002,
        "lat": 23.26667
      },
      "name": "Maksi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.716667,
        "lat": 27.049999
      },
      "name": "Makrana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.150002,
        "lat": 26.23333
      },
      "name": "Mairwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.01667,
        "lat": 27.23333
      },
      "name": "Mainpuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.816673,
        "lat": 26.566669
      },
      "name": "Mainaguri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.75,
        "lat": 24.26667
      },
      "name": "Maihar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933334,
        "lat": 27.049999
      },
      "name": "Mahwah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.933327,
        "lat": 22.816669
      },
      "name": "Mahudha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.466667,
        "lat": 27.66667
      },
      "name": "Maholi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.866669,
        "lat": 25.283331
      },
      "name": "Mahoba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.116669,
        "lat": 27.299999
      },
      "name": "Mahmudabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.98333,
        "lat": 22.183331
      },
      "name": "Mahishadal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.604172,
        "lat": 26.5
      },
      "name": "Mahgawan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 22.183331
      },
      "name": "Maheshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.150002,
        "lat": 28.283331
      },
      "name": "Mahendragarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.76667,
        "lat": 22.83333
      },
      "name": "Mahemdavad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.533333,
        "lat": 11.7
      },
      "name": "Mahe",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.98333,
        "lat": 16.73333
      },
      "name": "Mahbubnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.01667,
        "lat": 17.616671
      },
      "name": "Mahbubabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.099998,
        "lat": 21.1
      },
      "name": "Mahasamund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.566673,
        "lat": 27.133329
      },
      "name": "Maharajganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.48333,
        "lat": 26.116671
      },
      "name": "Maharajganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.300003,
        "lat": 28.98333
      },
      "name": "Maham",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.116669,
        "lat": 16.383329
      },
      "name": "Mahalingpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.416672,
        "lat": 18.08333
      },
      "name": "Mahad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.127777,
        "lat": 26.757219
      },
      "name": "Maghar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.23333,
        "lat": 12.96667
      },
      "name": "Magadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.900002,
        "lat": 12.51667
      },
      "name": "Madurantakam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 9.93333
      },
      "name": "Madurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.400002,
        "lat": 10.48333
      },
      "name": "Madukkur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.966667,
        "lat": 10.9
      },
      "name": "Madukkarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.278473,
        "lat": 13.08784
      },
      "name": "Chennai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.73333,
        "lat": 12.41667
      },
      "name": "Madikeri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.449997,
        "lat": 22.700001
      },
      "name": "Madhyamgram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.650002,
        "lat": 24.25
      },
      "name": "Madhupur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.209167,
        "lat": 13.66056
      },
      "name": "Madhugiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.083328,
        "lat": 26.366671
      },
      "name": "Madhubani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.783333,
        "lat": 25.91667
      },
      "name": "Madhipura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.949997,
        "lat": 15.3
      },
      "name": "Madgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.066673,
        "lat": 12.6
      },
      "name": "Maddur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.5,
        "lat": 13.55
      },
      "name": "Madanapalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.133331,
        "lat": 16.16667
      },
      "name": "Machilipatnam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.416672,
        "lat": 25.683331
      },
      "name": "Machhlishahr",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.198334,
        "lat": 30.914721
      },
      "name": "Machhiwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.433327,
        "lat": 16.48333
      },
      "name": "Macherla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.73333,
        "lat": 22.883329
      },
      "name": "Lunglei",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.616669,
        "lat": 23.133329
      },
      "name": "Lunavada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.849998,
        "lat": 30.9
      },
      "name": "Ludhiana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.916664,
        "lat": 26.85
      },
      "name": "Lucknow",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.083328,
        "lat": 25.183331
      },
      "name": "Luckeesarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.916672,
        "lat": 27.4
      },
      "name": "Losal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 28.75
      },
      "name": "Loni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.416672,
        "lat": 18.75
      },
      "name": "Lonavale",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.533333,
        "lat": 19.98333
      },
      "name": "Lonar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.683327,
        "lat": 23.433331
      },
      "name": "Lohardaga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.51667,
        "lat": 16.16667
      },
      "name": "Lingsugur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.800003,
        "lat": 22.566669
      },
      "name": "Limbdi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.400002,
        "lat": 24.049999
      },
      "name": "Leteri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.583328,
        "lat": 34.166672
      },
      "name": "Leh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.76667,
        "lat": 29.116671
      },
      "name": "Lawar Khas",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.683327,
        "lat": 30.216669
      },
      "name": "Laungowal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.583328,
        "lat": 18.4
      },
      "name": "Latur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.383331,
        "lat": 21.716669
      },
      "name": "Lathi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.5,
        "lat": 23.75
      },
      "name": "Latehar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.971672,
        "lat": 26.20389
      },
      "name": "Lar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.333328,
        "lat": 26.566669
      },
      "name": "Lalsot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.966667,
        "lat": 22.200001
      },
      "name": "Lalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 24.683331
      },
      "name": "Lalitpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.833328,
        "lat": 10.86667
      },
      "name": "Lalgudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.25,
        "lat": 24.41667
      },
      "name": "Lalgola",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.699997,
        "lat": 25.933331
      },
      "name": "Lalganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.183327,
        "lat": 25.866671
      },
      "name": "Lalganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.466667,
        "lat": 15.13333
      },
      "name": "Lakshmeshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.050003,
        "lat": 29.76667
      },
      "name": "Laksar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.666672,
        "lat": 23.66667
      },
      "name": "Lakhyabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.599998,
        "lat": 22.6
      },
      "name": "Lakhnadon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.76667,
        "lat": 27.950001
      },
      "name": "Lakhimpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.166672,
        "lat": 25.66667
      },
      "name": "Lakheri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.900002,
        "lat": 27.716669
      },
      "name": "Laharpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.945,
        "lat": 26.19833
      },
      "name": "Lahar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.044441,
        "lat": 29.99444
      },
      "name": "Ladwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.383331,
        "lat": 27.65
      },
      "name": "Ladnun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.033333,
        "lat": 27.816669
      },
      "name": "Lachhmangarh Sikar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.183327,
        "lat": 8.31667
      },
      "name": "Kuzhithurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.533333,
        "lat": 10.7
      },
      "name": "Koothanallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.981667,
        "lat": 21.623329
      },
      "name": "Kutiyana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.199997,
        "lat": 15.76667
      },
      "name": "Kushtagi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.599998,
        "lat": 11.56667
      },
      "name": "Kurinjippadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.433327,
        "lat": 18.08333
      },
      "name": "Kurduvadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.583328,
        "lat": 16.683331
      },
      "name": "Kurandvad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.366669,
        "lat": 12.75
      },
      "name": "Kuppam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.083328,
        "lat": 10.65
      },
      "name": "Kunnamkulam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.877724,
        "lat": 11.30459
      },
      "name": "Kunnamangalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.026672,
        "lat": 13.02222
      },
      "name": "Kunigal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.300003,
        "lat": 21.33333
      },
      "name": "Kundla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.25,
        "lat": 15.25
      },
      "name": "Kundgol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 28.700001
      },
      "name": "Kundarkhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.51667,
        "lat": 25.716669
      },
      "name": "Kunda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.400002,
        "lat": 14.41667
      },
      "name": "Kumta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.366669,
        "lat": 27.316669
      },
      "name": "Kumher",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.51667,
        "lat": 21.26667
      },
      "name": "Kumhari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.050003,
        "lat": 24.366671
      },
      "name": "Kumbhraj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.383331,
        "lat": 10.96667
      },
      "name": "Kumbakonam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.099998,
        "lat": 31.966669
      },
      "name": "Kulu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.849998,
        "lat": 23.73333
      },
      "name": "Kulti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.650002,
        "lat": 25.316669
      },
      "name": "Kulpahar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 10.91667
      },
      "name": "Kulittalai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.01667,
        "lat": 33.650002
      },
      "name": "Kulgam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.75,
        "lat": 22.200001
      },
      "name": "Kukshi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 17.48333
      },
      "name": "Kukatpalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.5,
        "lat": 23.716669
      },
      "name": "Kuju",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.383331,
        "lat": 14.9
      },
      "name": "Kudligi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.849998,
        "lat": 16.633329
      },
      "name": "Kudachi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.971939,
        "lat": 26.983891
      },
      "name": "Kuchera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.849998,
        "lat": 27.15
      },
      "name": "Kuchaman",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.166672,
        "lat": 22.26667
      },
      "name": "Kuchaiburi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.488327,
        "lat": 12.655
      },
      "name": "Krishnarajpet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.5,
        "lat": 23.4
      },
      "name": "Krishnanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.23333,
        "lat": 12.53333
      },
      "name": "Krishnagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.76667,
        "lat": 11.25
      },
      "name": "Calicut",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.73333,
        "lat": 17.01667
      },
      "name": "Kovvur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.98333,
        "lat": 14.48333
      },
      "name": "Kovur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.866669,
        "lat": 9.16667
      },
      "name": "Kovilpatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.216667,
        "lat": 14.81667
      },
      "name": "Kotturu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.51667,
        "lat": 9.58333
      },
      "name": "Kottayam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.633331,
        "lat": 17.549999
      },
      "name": "Kottagudem",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.199997,
        "lat": 27.716667
      },
      "name": "Kotputli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.966667,
        "lat": 23.200001
      },
      "name": "Kotma",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.533333,
        "lat": 29.75
      },
      "name": "Kotdwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.349998,
        "lat": 19.15
      },
      "name": "Kotaparh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.633331,
        "lat": 10.06667
      },
      "name": "Kotamangalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.883331,
        "lat": 11.43333
      },
      "name": "Kotagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.833328,
        "lat": 25.183331
      },
      "name": "Kota",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.033333,
        "lat": 22.299999
      },
      "name": "Kota",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 15.85
      },
      "name": "Kosigi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433334,
        "lat": 27.799999
      },
      "name": "Kosi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.949997,
        "lat": 21.48333
      },
      "name": "Kosamba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.041901,
        "lat": 24.116699
      },
      "name": "Korwai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.083328,
        "lat": 18.65
      },
      "name": "Koregaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.683327,
        "lat": 22.35
      },
      "name": "Korba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.716667,
        "lat": 18.816669
      },
      "name": "Koratla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.716667,
        "lat": 18.816669
      },
      "name": "Koraput",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.150002,
        "lat": 15.35
      },
      "name": "Koppal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.48333,
        "lat": 19.883329
      },
      "name": "Kopargaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.565826,
        "lat": 26.023331
      },
      "name": "Kopaganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.75,
        "lat": 16.200001
      },
      "name": "Konnur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.347504,
        "lat": 22.700001
      },
      "name": "Konnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.533333,
        "lat": 16.616671
      },
      "name": "Kondapalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.666672,
        "lat": 19.6
      },
      "name": "Kondagaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.150002,
        "lat": 25.98333
      },
      "name": "Konch",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.116669,
        "lat": 19.9
      },
      "name": "Konarka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.699997,
        "lat": 24.23333
      },
      "name": "Kolasib",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.116669,
        "lat": 12.15
      },
      "name": "Kollegal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.216667,
        "lat": 16.700001
      },
      "name": "Kolhapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.599998,
        "lat": 25.23333
      },
      "name": "Kolaras",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.133331,
        "lat": 13.13333
      },
      "name": "Kolar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.25,
        "lat": 8.16667
      },
      "name": "Colachel",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.27182,
        "lat": 26.39904
      },
      "name": "Kokrajhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.116669,
        "lat": 25.66667
      },
      "name": "Kohima",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.800003,
        "lat": 25.58333
      },
      "name": "Koelwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.216667,
        "lat": 10.21667
      },
      "name": "Kodungallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.199997,
        "lat": 16.883329
      },
      "name": "Kodoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.703056,
        "lat": 20.790279
      },
      "name": "Kodinar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.599998,
        "lat": 24.466669
      },
      "name": "Kodarma",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.966667,
        "lat": 16.98333
      },
      "name": "Kodar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.48333,
        "lat": 10.23333
      },
      "name": "Kodaikanal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.433327,
        "lat": 26.316669
      },
      "name": "Koch Bihar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.26667,
        "lat": 25.316669
      },
      "name": "Koath",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.349998,
        "lat": 10.3
      },
      "name": "Kizhake Chalakudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 28.866671
      },
      "name": "Kithor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.76667,
        "lat": 33.316669
      },
      "name": "Kishtwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.866669,
        "lat": 26.566669
      },
      "name": "Kishangarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.933327,
        "lat": 26.116671
      },
      "name": "Kishanganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.199997,
        "lat": 29.51667
      },
      "name": "Kiratpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.783333,
        "lat": 27.15
      },
      "name": "Kiraoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.199997,
        "lat": 19.633329
      },
      "name": "Kinwat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.5,
        "lat": 28.91667
      },
      "name": "Kichha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.283333,
        "lat": 28.200001
      },
      "name": "Khutar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.849998,
        "lat": 28.25
      },
      "name": "Khurja",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.616669,
        "lat": 20.183331
      },
      "name": "Khurda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.331902,
        "lat": 24.0436
      },
      "name": "Khurai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.283333,
        "lat": 23.08333
      },
      "name": "Khunti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.633331,
        "lat": 24.1
      },
      "name": "Khowai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.333328,
        "lat": 18.783331
      },
      "name": "Khopoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.849998,
        "lat": 22.16667
      },
      "name": "Khirkian",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 24.033331
      },
      "name": "Khilchipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 27.98333
      },
      "name": "Khetri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.583328,
        "lat": 21.66667
      },
      "name": "Khetia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.800003,
        "lat": 27.9
      },
      "name": "Kheri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.616669,
        "lat": 23.883329
      },
      "name": "Kheralu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 28.866671
      },
      "name": "Khekra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.050003,
        "lat": 24.033331
      },
      "name": "Khed Brahma",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.683327,
        "lat": 22.75
      },
      "name": "Kheda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.849998,
        "lat": 22.98333
      },
      "name": "Khatra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.966667,
        "lat": 28.91667
      },
      "name": "Khatima",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 22.6
      },
      "name": "Khategaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.716667,
        "lat": 29.283331
      },
      "name": "Khatauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.133331,
        "lat": 26.51667
      },
      "name": "Kharupatia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.116669,
        "lat": 21.966669
      },
      "name": "Kharsia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.849998,
        "lat": 28.883329
      },
      "name": "Kharkhauda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.599998,
        "lat": 21.816669
      },
      "name": "Khargon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.378059,
        "lat": 22.718611
      },
      "name": "Khardah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.647781,
        "lat": 30.74444
      },
      "name": "Kharar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.76667,
        "lat": 18.433331
      },
      "name": "Kharakvasla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.550003,
        "lat": 25.116671
      },
      "name": "Kharagpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.333328,
        "lat": 22.33333
      },
      "name": "Kharagpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.966667,
        "lat": 21.433331
      },
      "name": "Khapa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.223061,
        "lat": 30.704439
      },
      "name": "Khanna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.333328,
        "lat": 21.83333
      },
      "name": "Khandwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.5,
        "lat": 27.6
      },
      "name": "Khandela",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.51667,
        "lat": 15.63333
      },
      "name": "Khanapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.150002,
        "lat": 17.25
      },
      "name": "Khammam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 20.683331
      },
      "name": "Khamgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.616669,
        "lat": 22.299999
      },
      "name": "Khambhat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.668327,
        "lat": 22.20722
      },
      "name": "Khambhaliya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.883331,
        "lat": 23.216669
      },
      "name": "Khamaria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.073608,
        "lat": 26.775
      },
      "name": "Khalilabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.933334,
        "lat": 24.85
      },
      "name": "Khajuraho",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.816673,
        "lat": 26.950001
      },
      "name": "Khairagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.966667,
        "lat": 21.41667
      },
      "name": "Khairagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.75,
        "lat": 27.533331
      },
      "name": "Khairabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.833328,
        "lat": 27.950001
      },
      "name": "Khair",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.050003,
        "lat": 25.58333
      },
      "name": "Khagaul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.48333,
        "lat": 25.5
      },
      "name": "Khagaria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.866669,
        "lat": 18.566669
      },
      "name": "Khadki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.883331,
        "lat": 27.183331
      },
      "name": "Khada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.283333,
        "lat": 23.41667
      },
      "name": "Khachrod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.23333,
        "lat": 20.200001
      },
      "name": "Kesinga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.933327,
        "lat": 25.299999
      },
      "name": "Keshorai Patan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.25,
        "lat": 21.299999
      },
      "name": "Keshod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 16.01667
      },
      "name": "Kerur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.416672,
        "lat": 20.5
      },
      "name": "Kendraparha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.533333,
        "lat": 23.200001
      },
      "name": "Kenda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.216667,
        "lat": 28.816669
      },
      "name": "Kemri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.150002,
        "lat": 25.966669
      },
      "name": "Kekri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.5,
        "lat": 9.18333
      },
      "name": "Kayankulam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 8.56667
      },
      "name": "Kayalpattinam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.25,
        "lat": 22.01667
      },
      "name": "Kawardha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.98333,
        "lat": 14.91667
      },
      "name": "Kavali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.316673,
        "lat": 13.21667
      },
      "name": "Kattivakkam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.283333,
        "lat": 23.799999
      },
      "name": "Katras",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.133331,
        "lat": 12.98333
      },
      "name": "Katpadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.133331,
        "lat": 23.65
      },
      "name": "Katoya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 21.26667
      },
      "name": "Katol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.583328,
        "lat": 25.533331
      },
      "name": "Katihar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.51667,
        "lat": 32.366669
      },
      "name": "Kathua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.933327,
        "lat": 21.299999
      },
      "name": "Kathor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.550003,
        "lat": 22.5
      },
      "name": "Katghora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.783333,
        "lat": 23.450001
      },
      "name": "Katangi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.783333,
        "lat": 21.783331
      },
      "name": "Katangi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.599998,
        "lat": 22.133329
      },
      "name": "Kasrawad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.949997,
        "lat": 29.216669
      },
      "name": "Kashipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.650002,
        "lat": 27.816669
      },
      "name": "Kasganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.0,
        "lat": 12.5
      },
      "name": "Kasaragod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.133331,
        "lat": 14.8
      },
      "name": "Karwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.083328,
        "lat": 10.95
      },
      "name": "Karur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.499718,
        "lat": 31.440001
      },
      "name": "Kartarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.27729,
        "lat": 26.882509
      },
      "name": "Karsiyang",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.98333,
        "lat": 29.683331
      },
      "name": "Karnal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.199997,
        "lat": 18.41667
      },
      "name": "Karmala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.98333,
        "lat": 13.2
      },
      "name": "Karkal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.333328,
        "lat": 18.91667
      },
      "name": "Karjat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.150002,
        "lat": 18.433331
      },
      "name": "Karimnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.349998,
        "lat": 24.866671
      },
      "name": "Karimganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.941391,
        "lat": 27.00028
      },
      "name": "Karhal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.150002,
        "lat": 25.466669
      },
      "name": "Karera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.066673,
        "lat": 22.91667
      },
      "name": "Kareli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 26.5
      },
      "name": "Karauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.48333,
        "lat": 20.48333
      },
      "name": "Karanja",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.900002,
        "lat": 22.549999
      },
      "name": "Karamsad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.960091,
        "lat": 11.24058
      },
      "name": "Karamadai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 10.06667
      },
      "name": "Karaikkudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.833328,
        "lat": 10.91667
      },
      "name": "karaikal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.199997,
        "lat": 17.283331
      },
      "name": "Karad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.38472,
        "lat": 31.37944
      },
      "name": "Kapurthala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.066673,
        "lat": 25.41667
      },
      "name": "Kapren",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.066673,
        "lat": 23.01667
      },
      "name": "Kapadvanj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.633331,
        "lat": 29.066669
      },
      "name": "Kanth",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.916672,
        "lat": 20.48333
      },
      "name": "Kantabanji",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.800003,
        "lat": 27.799999
      },
      "name": "Kant",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.349998,
        "lat": 26.466667
      },
      "name": "Kanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.73333,
        "lat": 22.66667
      },
      "name": "Kannod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.566673,
        "lat": 8.08333
      },
      "name": "Kanniyakumari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.921997,
        "lat": 27.0546
      },
      "name": "Kannauj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.106323,
        "lat": 12.30814
      },
      "name": "Kannangad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.133331,
        "lat": 20.26667
      },
      "name": "Kannad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.493057,
        "lat": 20.27194
      },
      "name": "Kanker",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.316673,
        "lat": 23.433331
      },
      "name": "Kanke",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.699997,
        "lat": 16.26667
      },
      "name": "Kankauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.51667,
        "lat": 15.4
      },
      "name": "Kanigiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.566673,
        "lat": 11.0
      },
      "name": "Kangayam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.916672,
        "lat": 15.21667
      },
      "name": "Kandukur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.216667,
        "lat": 23.033331
      },
      "name": "Kandla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.033333,
        "lat": 23.950001
      },
      "name": "Kandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 29.316669
      },
      "name": "Kandhla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.716667,
        "lat": 12.83333
      },
      "name": "Kanchipuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.416672,
        "lat": 12.55
      },
      "name": "Kanakapura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 21.23333
      },
      "name": "Kamthi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.616669,
        "lat": 15.4
      },
      "name": "Kampli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 9.73333
      },
      "name": "Cumbum",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.374718,
        "lat": 22.67111
      },
      "name": "Kamarhati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.349998,
        "lat": 18.316669
      },
      "name": "Kamareddi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 27.65
      },
      "name": "Kaman",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.650002,
        "lat": 27.26667
      },
      "name": "Kamalganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.550003,
        "lat": 20.933331
      },
      "name": "Kamakhyanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.48333,
        "lat": 22.98333
      },
      "name": "Kalyani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.150002,
        "lat": 19.25
      },
      "name": "Kalyan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.716667,
        "lat": 9.15
      },
      "name": "Kalugumalai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.73333,
        "lat": 26.116671
      },
      "name": "Kalpi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.082222,
        "lat": 11.61056
      },
      "name": "Kalpetta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.449997,
        "lat": 22.6
      },
      "name": "Kalol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.366669,
        "lat": 23.216669
      },
      "name": "Kalna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.900002,
        "lat": 21.23333
      },
      "name": "Kalmeshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.48333,
        "lat": 8.66667
      },
      "name": "Kallidaikurichchi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.966667,
        "lat": 11.73333
      },
      "name": "Kallakkurichchi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 30.83444
      },
      "name": "Kalka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.316673,
        "lat": 25.633329
      },
      "name": "Kaliyaganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.48333,
        "lat": 27.066669
      },
      "name": "Kalimpang",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.966667,
        "lat": 15.18333
      },
      "name": "Kalghatgi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.383331,
        "lat": 22.216669
      },
      "name": "Kalavad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.949997,
        "lat": 29.85
      },
      "name": "Kalanwali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 28.83333
      },
      "name": "Kalanaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333328,
        "lat": 19.66667
      },
      "name": "Kalamnuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.949997,
        "lat": 19.049999
      },
      "name": "Kalamb",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.566673,
        "lat": 8.5
      },
      "name": "Kalakkadu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.199997,
        "lat": 27.9
      },
      "name": "Kakrala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.800003,
        "lat": 26.883333
      },
      "name": "Kakori",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.216667,
        "lat": 16.933331
      },
      "name": "Kakinada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.98333,
        "lat": 24.48333
      },
      "name": "Kakching",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.383331,
        "lat": 29.799999
      },
      "name": "Kaithal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.199997,
        "lat": 29.4
      },
      "name": "Kairana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.75,
        "lat": 23.383329
      },
      "name": "Kaimori",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.349998,
        "lat": 27.566669
      },
      "name": "Kaimganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.01667,
        "lat": 24.33333
      },
      "name": "Kailashahar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.616669,
        "lat": 26.316669
      },
      "name": "Kailaras",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.199997,
        "lat": 16.566669
      },
      "name": "Kaikalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.316673,
        "lat": 16.58333
      },
      "name": "Kagal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.013062,
        "lat": 13.55333
      },
      "name": "Kadur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.23333,
        "lat": 21.216669
      },
      "name": "Kadod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 14.11667
      },
      "name": "Kadiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.333328,
        "lat": 23.299999
      },
      "name": "Kadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.349998,
        "lat": 9.08333
      },
      "name": "Kadayanallur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.431938,
        "lat": 22.969999
      },
      "name": "Kanchrapara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.716667,
        "lat": 25.216669
      },
      "name": "Kachhwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.01667,
        "lat": 25.41667
      },
      "name": "Kabrai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.883331,
        "lat": 19.200001
      },
      "name": "Junnar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.933327,
        "lat": 19.866671
      },
      "name": "Junagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.466667,
        "lat": 21.51667
      },
      "name": "Junagadh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.51667,
        "lat": 24.433331
      },
      "name": "Jumri Tilaiya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.57917,
        "lat": 31.32556
      },
      "name": "Jalandhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.183327,
        "lat": 22.76667
      },
      "name": "Jugsalai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.216667,
        "lat": 26.75
      },
      "name": "Jorhat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.816673,
        "lat": 26.33333
      },
      "name": "Jora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 12.56667
      },
      "name": "Jolarpettai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.25,
        "lat": 26.41667
      },
      "name": "Jogbani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.283333,
        "lat": 22.716669
      },
      "name": "Jodiya Bandar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.029999,
        "lat": 26.286667
      },
      "name": "Jodhpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.033333,
        "lat": 21.883329
      },
      "name": "Jodhpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.699997,
        "lat": 19.616671
      },
      "name": "Jintur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.316673,
        "lat": 29.316669
      },
      "name": "Jind",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.933327,
        "lat": 25.433331
      },
      "name": "Jhusi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.401398,
        "lat": 28.130699
      },
      "name": "Jhunjhunun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.216667,
        "lat": 29.51667
      },
      "name": "Jhinjhana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.73333,
        "lat": 26.566669
      },
      "name": "Jhinjhak",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.033333,
        "lat": 21.85
      },
      "name": "Jharsuguda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.400002,
        "lat": 23.75
      },
      "name": "Jharia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.98333,
        "lat": 22.450001
      },
      "name": "Jhargram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 25.433331
      },
      "name": "Jhansi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.283333,
        "lat": 26.26667
      },
      "name": "Jhanjharpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.25,
        "lat": 29.35
      },
      "name": "Jhalu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.166672,
        "lat": 24.549999
      },
      "name": "Jhalrapatan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.966667,
        "lat": 23.366671
      },
      "name": "Jhalida",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.150002,
        "lat": 24.6
      },
      "name": "Jhalawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.656502,
        "lat": 28.6063
      },
      "name": "Jhajjar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.366669,
        "lat": 24.76667
      },
      "name": "Jha Jha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 22.76667
      },
      "name": "Jhabua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 28.133329
      },
      "name": "Jewar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.76667,
        "lat": 17.01667
      },
      "name": "Jevargi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.616669,
        "lat": 21.73333
      },
      "name": "Jetpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.583328,
        "lat": 18.85
      },
      "name": "Jaypur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.150002,
        "lat": 26.58333
      },
      "name": "Jaynagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.417778,
        "lat": 22.175831
      },
      "name": "Jaynagar-Majilpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.366669,
        "lat": 11.21667
      },
      "name": "Jayamkondacholapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.849998,
        "lat": 24.6
      },
      "name": "Jawad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.683327,
        "lat": 25.73333
      },
      "name": "Jaunpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.050003,
        "lat": 25.01667
      },
      "name": "Jatara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.699997,
        "lat": 20.16667
      },
      "name": "Jatani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.902779,
        "lat": 26.878611
      },
      "name": "Jaswantnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.816673,
        "lat": 29.283331
      },
      "name": "Jaspur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.650002,
        "lat": 24.51667
      },
      "name": "Jasidih",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.150002,
        "lat": 22.9
      },
      "name": "Jashpurnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.199997,
        "lat": 22.033331
      },
      "name": "Jasdan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.550003,
        "lat": 27.16667
      },
      "name": "Jarwal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.133331,
        "lat": 23.633329
      },
      "name": "Jaora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.849998,
        "lat": 29.33333
      },
      "name": "Jansath",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.066673,
        "lat": 24.466669
      },
      "name": "Jangipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.183327,
        "lat": 17.716669
      },
      "name": "Jangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.616669,
        "lat": 31.16667
      },
      "name": "Jandiala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.083328,
        "lat": 23.700001
      },
      "name": "Jamuria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.216667,
        "lat": 24.91667
      },
      "name": "Jamui",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.800003,
        "lat": 23.950001
      },
      "name": "Jamtara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.183327,
        "lat": 22.799999
      },
      "name": "Jamshedpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.066673,
        "lat": 22.466669
      },
      "name": "Jamnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.866669,
        "lat": 32.73333
      },
      "name": "Jammu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.400002,
        "lat": 14.83333
      },
      "name": "Jammalamadugu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.300003,
        "lat": 16.51667
      },
      "name": "Jamkhandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.800003,
        "lat": 22.049999
      },
      "name": "Jambusar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.5,
        "lat": 25.299999
      },
      "name": "Jamalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 22.200001
      },
      "name": "Jamai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.400002,
        "lat": 23.716669
      },
      "name": "Jamadoba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.73333,
        "lat": 26.51667
      },
      "name": "Jalpaiguri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.616669,
        "lat": 25.35
      },
      "name": "Jalor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.883331,
        "lat": 19.83333
      },
      "name": "Jalna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.534439,
        "lat": 21.048611
      },
      "name": "Jalgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 21.01667
      },
      "name": "Jalgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.216667,
        "lat": 21.816669
      },
      "name": "Jaleshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.316673,
        "lat": 27.48333
      },
      "name": "Jalesar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.336601,
        "lat": 26.1451
      },
      "name": "Jalaun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.73333,
        "lat": 26.316669
      },
      "name": "Jalalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.900002,
        "lat": 20.966669
      },
      "name": "Jalalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 27.866671
      },
      "name": "Jalali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.25,
        "lat": 30.616671
      },
      "name": "Jalalabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.438332,
        "lat": 29.61861
      },
      "name": "Jalalabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.666664,
        "lat": 27.716667
      },
      "name": "Jalalabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.333328,
        "lat": 20.85
      },
      "name": "Jajpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.883331,
        "lat": 30.466669
      },
      "name": "Jaito",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.936394,
        "lat": 26.20306
      },
      "name": "Jaitaran",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.566673,
        "lat": 16.799999
      },
      "name": "Jaisingpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.918076,
        "lat": 26.914684
      },
      "name": "Jaisalmer",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.533333,
        "lat": 26.25
      },
      "name": "Jais",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.816666,
        "lat": 26.916668
      },
      "name": "Jaipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.283333,
        "lat": 25.616671
      },
      "name": "Jahazpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.099998,
        "lat": 28.41667
      },
      "name": "Jahangirabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.98333,
        "lat": 25.216669
      },
      "name": "Jahanabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.933327,
        "lat": 18.799999
      },
      "name": "Jagtial",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.48333,
        "lat": 30.783331
      },
      "name": "Jagraon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.099998,
        "lat": 16.9
      },
      "name": "Jaggayyapeta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.416672,
        "lat": 25.48333
      },
      "name": "Jagdispur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.033333,
        "lat": 19.066669
      },
      "name": "Jagdalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.166672,
        "lat": 20.26667
      },
      "name": "Jagatsinghapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.349998,
        "lat": 14.53333
      },
      "name": "Jagalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.300003,
        "lat": 30.16667
      },
      "name": "Jagadhri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.950058,
        "lat": 23.166969
      },
      "name": "Jabalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.199997,
        "lat": 27.25
      },
      "name": "Itimadpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.75,
        "lat": 22.616671
      },
      "name": "Itarsi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.616669,
        "lat": 27.1
      },
      "name": "Itanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.199997,
        "lat": 26.26667
      },
      "name": "Islampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.199997,
        "lat": 25.15
      },
      "name": "Islampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.716667,
        "lat": 28.33333
      },
      "name": "Islamnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.066673,
        "lat": 11.01667
      },
      "name": "Irugur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.23333,
        "lat": 10.33333
      },
      "name": "Irinjalakuda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.150002,
        "lat": 25.0
      },
      "name": "Ingraj Bazar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.071114,
        "lat": 29.879999
      },
      "name": "Indri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.833298,
        "lat": 22.71792
      },
      "name": "Indore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.966667,
        "lat": 17.16667
      },
      "name": "Indi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.672401,
        "lat": 26.9352
      },
      "name": "Indergarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.25,
        "lat": 18.299999
      },
      "name": "Indapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.949997,
        "lat": 24.816669
      },
      "name": "Imphal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.133331,
        "lat": 15.96667
      },
      "name": "Ilkal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.550003,
        "lat": 19.700001
      },
      "name": "Igatpuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.849998,
        "lat": 11.58333
      },
      "name": "Idappadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.699997,
        "lat": 19.116671
      },
      "name": "Ichchapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.466667,
        "lat": 16.700001
      },
      "name": "Ichalkaranji",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.474442,
        "lat": 17.37528
      },
      "name": "Hyderabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.949997,
        "lat": 15.01667
      },
      "name": "Huvinabadgalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.01667,
        "lat": 24.533331
      },
      "name": "Husainabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.287781,
        "lat": 12.3075
      },
      "name": "Hunsur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.050003,
        "lat": 16.066669
      },
      "name": "Hungund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 16.23333
      },
      "name": "Hukeri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.402496,
        "lat": 22.895559
      },
      "name": "Hugli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.166672,
        "lat": 15.35
      },
      "name": "Hubli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.966667,
        "lat": 26.433331
      },
      "name": "Howli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.816673,
        "lat": 12.71667
      },
      "name": "Hosur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 15.26667
      },
      "name": "Hospet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.798332,
        "lat": 13.06694
      },
      "name": "Hoskote",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.917221,
        "lat": 31.532221
      },
      "name": "Hoshiarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.716667,
        "lat": 22.75
      },
      "name": "Hoshangabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.28611,
        "lat": 13.79806
      },
      "name": "Hosdurga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.666672,
        "lat": 14.25
      },
      "name": "Honnali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.449997,
        "lat": 14.28333
      },
      "name": "Honavar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.133331,
        "lat": 17.76667
      },
      "name": "Homnabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.243057,
        "lat": 12.78278
      },
      "name": "Hole Narsipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.183327,
        "lat": 14.03333
      },
      "name": "Holalkere",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.866669,
        "lat": 26.0
      },
      "name": "Hojai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.366669,
        "lat": 27.9
      },
      "name": "Hodal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.416672,
        "lat": 24.83333
      },
      "name": "Hisua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.716667,
        "lat": 29.16667
      },
      "name": "Hisar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.619171,
        "lat": 13.94556
      },
      "name": "Hiriyur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 14.46667
      },
      "name": "Hirekerur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.866669,
        "lat": 21.51667
      },
      "name": "Hirakud",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.75,
        "lat": 19.48333
      },
      "name": "Hinjilikatu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.150002,
        "lat": 19.716669
      },
      "name": "Hingoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.833328,
        "lat": 20.566669
      },
      "name": "Hinganghat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.493332,
        "lat": 13.82889
      },
      "name": "Hindupur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.566673,
        "lat": 23.9
      },
      "name": "Hindoria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.01667,
        "lat": 26.716669
      },
      "name": "Hindaun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.949997,
        "lat": 23.6
      },
      "name": "Himatnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.283333,
        "lat": 25.316669
      },
      "name": "Hilsa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.349998,
        "lat": 23.98333
      },
      "name": "Hazaribag",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.400002,
        "lat": 14.8
      },
      "name": "Haveri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.599998,
        "lat": 24.116671
      },
      "name": "Hatta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.050003,
        "lat": 27.6
      },
      "name": "Hathras",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.01667,
        "lat": 29.16667
      },
      "name": "Hastinapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.099442,
        "lat": 13.00056
      },
      "name": "Hassan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.351891,
        "lat": 26.74704
      },
      "name": "Hasimara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.283333,
        "lat": 28.716669
      },
      "name": "Hasanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.5,
        "lat": 12.06667
      },
      "name": "Harur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.73333,
        "lat": 22.1
      },
      "name": "Harsud",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.98333,
        "lat": 14.8
      },
      "name": "Harpanahalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.334702,
        "lat": 25.288401
      },
      "name": "Harpalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.900002,
        "lat": 23.700001
      },
      "name": "Harij",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 14.51667
      },
      "name": "Harihar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 29.966669
      },
      "name": "Haridwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.116669,
        "lat": 27.416668
      },
      "name": "Hardoi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.099998,
        "lat": 22.33333
      },
      "name": "Harda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.783333,
        "lat": 28.716669
      },
      "name": "Hapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.31028,
        "lat": 22.58917
      },
      "name": "Haora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.316673,
        "lat": 29.58333
      },
      "name": "Hanumangarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.966667,
        "lat": 29.1
      },
      "name": "Hansi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.133331,
        "lat": 14.76667
      },
      "name": "Hangal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.183327,
        "lat": 25.383329
      },
      "name": "Handia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.51667,
        "lat": 31.683331
      },
      "name": "Hamirpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.150002,
        "lat": 25.950001
      },
      "name": "Hamirpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.183327,
        "lat": 23.01667
      },
      "name": "Halvad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.466667,
        "lat": 22.5
      },
      "name": "Halol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.76667,
        "lat": 15.33333
      },
      "name": "Haliyal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.419441,
        "lat": 22.94972
      },
      "name": "Halisahar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.51667,
        "lat": 29.216669
      },
      "name": "Haldwani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.283333,
        "lat": 29.299999
      },
      "name": "Haldaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.533333,
        "lat": 26.25
      },
      "name": "Hajo",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.216667,
        "lat": 25.683331
      },
      "name": "Hajipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.566673,
        "lat": 24.683331
      },
      "name": "Hailakandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.033333,
        "lat": 25.183331
      },
      "name": "Haflong",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.666672,
        "lat": 19.5
      },
      "name": "Hadgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.627502,
        "lat": 22.83444
      },
      "name": "Habra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.179169,
        "lat": 26.22361
      },
      "name": "Gwalior",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.75,
        "lat": 23.5
      },
      "name": "Guskhara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.0411,
        "lat": 10.5943
      },
      "name": "Guruvayur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.416672,
        "lat": 30.716669
      },
      "name": "Guru Har Sahai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.178802,
        "lat": 25.614799
      },
      "name": "Gursarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.716667,
        "lat": 27.116671
      },
      "name": "Gursahaiganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.400002,
        "lat": 16.866671
      },
      "name": "Gurmatkal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.033333,
        "lat": 28.466667
      },
      "name": "Gurgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.816673,
        "lat": 19.08333
      },
      "name": "Gunupur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.449997,
        "lat": 16.299999
      },
      "name": "Guntur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.383331,
        "lat": 15.16667
      },
      "name": "Guntakal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.433327,
        "lat": 28.25
      },
      "name": "Gunnaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.683327,
        "lat": 11.8
      },
      "name": "Gundlupet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.316673,
        "lat": 24.65
      },
      "name": "Guna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.150002,
        "lat": 13.4
      },
      "name": "Gummidipundi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.550003,
        "lat": 23.049999
      },
      "name": "Gumla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.816673,
        "lat": 23.783331
      },
      "name": "Gumia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 16.049999
      },
      "name": "Guledagudda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.833328,
        "lat": 17.33333
      },
      "name": "Gulbarga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.783333,
        "lat": 28.6
      },
      "name": "Gulaothi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.666672,
        "lat": 25.9
      },
      "name": "Gulabpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.063889,
        "lat": 12.8425
      },
      "name": "Guduvancheri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.849998,
        "lat": 14.13333
      },
      "name": "Gudur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.866669,
        "lat": 12.95
      },
      "name": "Gudiyatham",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.98333,
        "lat": 16.450001
      },
      "name": "Gudivada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 9.68333
      },
      "name": "Gudalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.944443,
        "lat": 13.31056
      },
      "name": "Gubbi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.02565,
        "lat": 26.699841
      },
      "name": "Goyerkata",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.466667,
        "lat": 27.5
      },
      "name": "Govardhan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.683327,
        "lat": 29.450001
      },
      "name": "Gorakhpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.373894,
        "lat": 26.754999
      },
      "name": "Gorakhpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.449997,
        "lat": 11.46667
      },
      "name": "Gobichettipalayam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.433327,
        "lat": 26.466669
      },
      "name": "Gopalganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.199997,
        "lat": 21.450001
      },
      "name": "Gondia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.800003,
        "lat": 21.966669
      },
      "name": "Gondal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.933327,
        "lat": 27.133329
      },
      "name": "Gonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.166672,
        "lat": 23.866671
      },
      "name": "Gomoh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.466667,
        "lat": 28.08333
      },
      "name": "Gola Gokarannath",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.966667,
        "lat": 26.51667
      },
      "name": "Golaghat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.316673,
        "lat": 14.55
      },
      "name": "Gokarna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.833328,
        "lat": 16.16667
      },
      "name": "Gokak",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.699997,
        "lat": 29.133329
      },
      "name": "Gohana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.444717,
        "lat": 26.426109
      },
      "name": "Gohad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.633331,
        "lat": 22.75
      },
      "name": "Godhra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.216667,
        "lat": 24.83333
      },
      "name": "Godda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.066673,
        "lat": 22.633329
      },
      "name": "Gobindpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.758614,
        "lat": 22.87472
      },
      "name": "Gobardanga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.616669,
        "lat": 26.16667
      },
      "name": "Goalpara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.300003,
        "lat": 24.183331
      },
      "name": "Giridih",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.416672,
        "lat": 12.25
      },
      "name": "Gingee",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.666672,
        "lat": 30.200001
      },
      "name": "Giddarbaha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.916672,
        "lat": 15.35
      },
      "name": "Giddalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.133331,
        "lat": 19.933331
      },
      "name": "Ghugus",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.633331,
        "lat": 19.716669
      },
      "name": "Ghoti Budrukh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.54361,
        "lat": 26.10833
      },
      "name": "Ghosi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.566673,
        "lat": 25.58333
      },
      "name": "Ghazipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433327,
        "lat": 28.66667
      },
      "name": "Ghaziabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.48333,
        "lat": 22.6
      },
      "name": "Ghatsila",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.316673,
        "lat": 20.133329
      },
      "name": "Ghatanji",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.166672,
        "lat": 26.16667
      },
      "name": "Ghatampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.716667,
        "lat": 22.66667
      },
      "name": "Ghatal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.971672,
        "lat": 29.5375
      },
      "name": "Gharaunda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.75,
        "lat": 19.26667
      },
      "name": "Gevrai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.0,
        "lat": 24.783333
      },
      "name": "Gaya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.961578,
        "lat": 26.083521
      },
      "name": "Gauripur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.51667,
        "lat": 13.61111
      },
      "name": "Gauribidanur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.750954,
        "lat": 26.186171
      },
      "name": "Guwahati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.816673,
        "lat": 24.183331
      },
      "name": "Garwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.400002,
        "lat": 22.633329
      },
      "name": "Garui",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.583328,
        "lat": 21.533331
      },
      "name": "Gariadhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.133331,
        "lat": 31.216669
      },
      "name": "Garhshankar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.099998,
        "lat": 28.799999
      },
      "name": "Garhmuktesar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.150002,
        "lat": 23.76667
      },
      "name": "Garhakota",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.800003,
        "lat": 16.533331
      },
      "name": "Gannavaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.616669,
        "lat": 27.33333
      },
      "name": "Gangtok",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.666672,
        "lat": 13.65
      },
      "name": "Gangolli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.25,
        "lat": 29.76667
      },
      "name": "Gangoh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.533333,
        "lat": 15.43333
      },
      "name": "Gangawati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.51667,
        "lat": 25.4
      },
      "name": "Gangarampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.716667,
        "lat": 26.48333
      },
      "name": "Gangapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.26667,
        "lat": 25.216669
      },
      "name": "Gangapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.01667,
        "lat": 19.683331
      },
      "name": "Gangapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.883331,
        "lat": 29.91667
      },
      "name": "Ganganagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.75,
        "lat": 18.950001
      },
      "name": "Gangakher",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.683327,
        "lat": 23.216669
      },
      "name": "Gandhinagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.98333,
        "lat": 20.816669
      },
      "name": "Gandevi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.783333,
        "lat": 34.23333
      },
      "name": "Gandarbal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.23333,
        "lat": 28.85
      },
      "name": "Gajraula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.98333,
        "lat": 15.73333
      },
      "name": "Gajendragarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.800003,
        "lat": 16.23333
      },
      "name": "Gadwal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.349998,
        "lat": 16.23333
      },
      "name": "Gadhinglaj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.566673,
        "lat": 21.966669
      },
      "name": "Gadhada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.783333,
        "lat": 22.91667
      },
      "name": "Gadarwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.616669,
        "lat": 15.41667
      },
      "name": "Gadag",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.183327,
        "lat": 22.50444
      },
      "name": "Fort Gloster",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.25,
        "lat": 26.299999
      },
      "name": "Forbesganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 27.799999
      },
      "name": "Firozpur Jhirka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 30.91667
      },
      "name": "Firozpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 27.15
      },
      "name": "Firozabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.849998,
        "lat": 11.18333
      },
      "name": "Ferokh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.033333,
        "lat": 30.4
      },
      "name": "Fazilka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.316673,
        "lat": 25.51667
      },
      "name": "Fatwa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.666664,
        "lat": 27.1
      },
      "name": "Fatehpur Sikri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.949997,
        "lat": 27.98333
      },
      "name": "Fatehpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.216667,
        "lat": 27.16667
      },
      "name": "Fatehpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.800003,
        "lat": 25.933331
      },
      "name": "Fatehpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.955338,
        "lat": 31.86207
      },
      "name": "Fatehgarh Churian",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.300003,
        "lat": 28.466669
      },
      "name": "Fatehganj West",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.449997,
        "lat": 29.51667
      },
      "name": "Fatehabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.316673,
        "lat": 27.01667
      },
      "name": "Fatehabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.201111,
        "lat": 17.07778
      },
      "name": "Farrukhnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.566673,
        "lat": 27.4
      },
      "name": "Farrukhabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.550003,
        "lat": 28.216669
      },
      "name": "Faridpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.75,
        "lat": 30.66667
      },
      "name": "Faridkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.316666,
        "lat": 28.433332
      },
      "name": "Faridabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.900002,
        "lat": 24.816669
      },
      "name": "Farakka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.205452,
        "lat": 26.52084
      },
      "name": "Falakata",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.849998,
        "lat": 21.16667
      },
      "name": "Faizpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.133331,
        "lat": 26.783331
      },
      "name": "Faizabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.023903,
        "lat": 26.776899
      },
      "name": "Etawah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.533333,
        "lat": 14.63333
      },
      "name": "Erraguntla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.73333,
        "lat": 11.35
      },
      "name": "Erode",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.783333,
        "lat": 9.7
      },
      "name": "Erattupetta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.333328,
        "lat": 20.91667
      },
      "name": "Erandol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.48333,
        "lat": 15.73333
      },
      "name": "Emmiganuru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.099998,
        "lat": 16.700001
      },
      "name": "Eluru",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.283333,
        "lat": 10.06667
      },
      "name": "Elur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.650002,
        "lat": 29.450001
      },
      "name": "Ellenabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.866669,
        "lat": 17.549999
      },
      "name": "Elamanchili",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.533333,
        "lat": 21.9
      },
      "name": "Egra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 68.967781,
        "lat": 22.239441
      },
      "name": "Dwarka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.316673,
        "lat": 23.48333
      },
      "name": "Durgapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.300003,
        "lat": 20.0
      },
      "name": "Durgapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.283333,
        "lat": 21.183331
      },
      "name": "Durg",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.716667,
        "lat": 23.83333
      },
      "name": "Dungarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.949997,
        "lat": 27.73333
      },
      "name": "Dundwaraganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.150002,
        "lat": 25.549999
      },
      "name": "Dumraon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.51667,
        "lat": 26.566669
      },
      "name": "Dumra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.25,
        "lat": 24.26667
      },
      "name": "Dumka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.566673,
        "lat": 27.566669
      },
      "name": "Dum Duma",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.416939,
        "lat": 22.622219
      },
      "name": "Dam Dam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.316673,
        "lat": 27.366671
      },
      "name": "Duliagaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.166672,
        "lat": 23.75
      },
      "name": "Dugda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.383331,
        "lat": 23.799999
      },
      "name": "Dubrajpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.166672,
        "lat": 17.450001
      },
      "name": "Dornakal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.01667,
        "lat": 30.816669
      },
      "name": "Doraha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.73333,
        "lat": 21.200001
      },
      "name": "Dongargarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.566673,
        "lat": 21.33333
      },
      "name": "Dondaicha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.083328,
        "lat": 19.216669
      },
      "name": "Dombivli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.54306,
        "lat": 13.29194
      },
      "name": "Dod Ballapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 33.133331
      },
      "name": "Doda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.982239,
        "lat": 20.714052
      },
      "name": "Diu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.166672,
        "lat": 24.25
      },
      "name": "Disa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.433327,
        "lat": 25.83333
      },
      "name": "Diphu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.466667,
        "lat": 26.133329
      },
      "name": "Dinhata",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.083328,
        "lat": 22.950001
      },
      "name": "Dindori",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.949997,
        "lat": 10.35
      },
      "name": "Dindigul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.466667,
        "lat": 32.150002
      },
      "name": "Dinanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.73333,
        "lat": 25.9
      },
      "name": "Dimapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.716667,
        "lat": 20.116671
      },
      "name": "Digras",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.599998,
        "lat": 18.549999
      },
      "name": "Diglur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.0,
        "lat": 25.73333
      },
      "name": "Dighwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 95.633331,
        "lat": 27.383329
      },
      "name": "Digboi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333328,
        "lat": 27.466669
      },
      "name": "Dig",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.566673,
        "lat": 27.4
      },
      "name": "Didwana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.949997,
        "lat": 15.6
      },
      "name": "Dicholi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.900002,
        "lat": 27.48333
      },
      "name": "Dibrugarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.25,
        "lat": 28.216667
      },
      "name": "Dibai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.184723,
        "lat": 22.191669
      },
      "name": "Diamond Harbour",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.866669,
        "lat": 30.366671
      },
      "name": "Dhuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.014503,
        "lat": 26.585751
      },
      "name": "Dhupgari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.966667,
        "lat": 24.683331
      },
      "name": "Dhulian",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.783333,
        "lat": 20.9
      },
      "name": "Dhule",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 89.966667,
        "lat": 26.033331
      },
      "name": "Dhuburi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.416672,
        "lat": 22.566669
      },
      "name": "Dhrol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.466667,
        "lat": 22.98333
      },
      "name": "Dhrangadhra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.449997,
        "lat": 21.73333
      },
      "name": "Dhoraji",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.883331,
        "lat": 15.41667
      },
      "name": "Dhone",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.466667,
        "lat": 22.716669
      },
      "name": "Dholka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.466667,
        "lat": 26.466669
      },
      "name": "Dhing",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.599998,
        "lat": 20.66667
      },
      "name": "Dhenkanal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.5,
        "lat": 26.700001
      },
      "name": "Dhekiajuli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.083328,
        "lat": 28.0
      },
      "name": "Dhaurahra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.900002,
        "lat": 26.700001
      },
      "name": "Dhaulpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.116669,
        "lat": 18.816669
      },
      "name": "Dharur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.783333,
        "lat": 28.216667
      },
      "name": "Dharuhera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.321327,
        "lat": 32.24194
      },
      "name": "Dharmsala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.716667,
        "lat": 14.43333
      },
      "name": "Dharmavaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 12.13333
      },
      "name": "Dharmapuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.166672,
        "lat": 24.366671
      },
      "name": "Dharmanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.433327,
        "lat": 11.78333
      },
      "name": "Dharmadam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.849998,
        "lat": 18.9
      },
      "name": "Dharmabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.319168,
        "lat": 31.95417
      },
      "name": "Dhariwal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.01667,
        "lat": 21.33333
      },
      "name": "Dhari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.51667,
        "lat": 10.73333
      },
      "name": "Dharapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.26667,
        "lat": 21.01667
      },
      "name": "Dharangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.183327,
        "lat": 20.533331
      },
      "name": "Dharampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.300003,
        "lat": 22.6
      },
      "name": "Dhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.01667,
        "lat": 24.51667
      },
      "name": "Dhanera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.98333,
        "lat": 22.366671
      },
      "name": "Dhandhuka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.449997,
        "lat": 23.799999
      },
      "name": "Dhanbad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.25,
        "lat": 28.966669
      },
      "name": "Dhanaura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 30.283331
      },
      "name": "Dhanaula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.549721,
        "lat": 20.70722
      },
      "name": "Dhamtari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.51667,
        "lat": 29.316669
      },
      "name": "Dhampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.466667,
        "lat": 22.216669
      },
      "name": "Dhamnod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.166672,
        "lat": 26.683331
      },
      "name": "Dhaka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.066673,
        "lat": 22.966669
      },
      "name": "Dewas",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.383331,
        "lat": 25.75
      },
      "name": "Devli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 25.533331
      },
      "name": "Devgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 22.700001
      },
      "name": "Devgadh Bariya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.933327,
        "lat": 16.700001
      },
      "name": "Devarkonda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699173,
        "lat": 13.2325
      },
      "name": "Devanhalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.816673,
        "lat": 9.95
      },
      "name": "Devakottai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.033333,
        "lat": 20.01667
      },
      "name": "Deulgaon Raja",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.349998,
        "lat": 27.799999
      },
      "name": "Deshnoke",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.550003,
        "lat": 22.85
      },
      "name": "Depalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.01667,
        "lat": 23.4
      },
      "name": "Deori Khas",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.787216,
        "lat": 26.504721
      },
      "name": "Deoria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.48333,
        "lat": 28.633329
      },
      "name": "Deoranian",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.48333,
        "lat": 20.66667
      },
      "name": "Deoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.833328,
        "lat": 19.950001
      },
      "name": "Deolali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.73333,
        "lat": 21.533331
      },
      "name": "Deogarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.683327,
        "lat": 29.700001
      },
      "name": "Deoband",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.800003,
        "lat": 12.53333
      },
      "name": "Denkanikota",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.216667,
        "lat": 28.666668
      },
      "name": "Delhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.183327,
        "lat": 24.866671
      },
      "name": "Dehri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.033333,
        "lat": 30.316669
      },
      "name": "Dehra Dun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.333336,
        "lat": 26.883333
      },
      "name": "Dausa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 18.466669
      },
      "name": "Daund",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.400002,
        "lat": 25.033331
      },
      "name": "Daudnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 20.76667
      },
      "name": "Dattapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.466667,
        "lat": 25.66667
      },
      "name": "Datia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.400002,
        "lat": 28.033331
      },
      "name": "Dataganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.659721,
        "lat": 31.818331
      },
      "name": "Dasua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.533333,
        "lat": 28.683331
      },
      "name": "Dasna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.333328,
        "lat": 20.933331
      },
      "name": "Daryapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.76667,
        "lat": 20.316669
      },
      "name": "Darwha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.26667,
        "lat": 27.033331
      },
      "name": "Darjiling",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.900002,
        "lat": 26.16667
      },
      "name": "Darbhanga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.616669,
        "lat": 15.26667
      },
      "name": "Dandeli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.050003,
        "lat": 25.633329
      },
      "name": "Danapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.449997,
        "lat": 23.83333
      },
      "name": "Damoh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.51667,
        "lat": 21.700001
      },
      "name": "Damnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.849998,
        "lat": 20.41667
      },
      "name": "Daman",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.066673,
        "lat": 24.033331
      },
      "name": "Daltenganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.833328,
        "lat": 25.66667
      },
      "name": "Dalsingh Sarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.849998,
        "lat": 25.85
      },
      "name": "Dalkola",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.150002,
        "lat": 22.75
      },
      "name": "Dakor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.26667,
        "lat": 22.83333
      },
      "name": "Dahod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.816673,
        "lat": 23.16667
      },
      "name": "Dahegam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.73333,
        "lat": 19.966669
      },
      "name": "Dahanu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 28.566669
      },
      "name": "Dadri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.73333,
        "lat": 29.950001
      },
      "name": "Dabwali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.333328,
        "lat": 25.9
      },
      "name": "Dabra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.876106,
        "lat": 26.002501
      },
      "name": "Daboh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.433327,
        "lat": 22.183331
      },
      "name": "Dabhoi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.879272,
        "lat": 20.46497
      },
      "name": "Cuttack",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.099998,
        "lat": 15.25
      },
      "name": "Curchorem",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.98333,
        "lat": 15.16667
      },
      "name": "Cuncolim",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.116669,
        "lat": 15.56667
      },
      "name": "Cumbum",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.816673,
        "lat": 14.46667
      },
      "name": "Cuddapah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.75,
        "lat": 11.75
      },
      "name": "Cuddalore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.699997,
        "lat": 13.63333
      },
      "name": "Coondapoor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.699997,
        "lat": 27.133329
      },
      "name": "Colonelganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.216667,
        "lat": 25.26667
      },
      "name": "Colgong",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.755302,
        "lat": 15.5439
      },
      "name": "Calangute",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.966667,
        "lat": 11.0
      },
      "name": "Coimbatore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.260223,
        "lat": 9.93988
      },
      "name": "Cochin",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.066673,
        "lat": 30.26667
      },
      "name": "Clement Town",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.949997,
        "lat": 28.299999
      },
      "name": "Churu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.666672,
        "lat": 24.33333
      },
      "name": "Churachandpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.900002,
        "lat": 25.133329
      },
      "name": "Chunar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.183327,
        "lat": 22.41667
      },
      "name": "Chotila",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.300003,
        "lat": 21.25
      },
      "name": "Chopda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.949997,
        "lat": 17.83333
      },
      "name": "Chodavaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.76667,
        "lat": 17.450001
      },
      "name": "Chodavaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.75,
        "lat": 10.7
      },
      "name": "Chittur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.633331,
        "lat": 24.883329
      },
      "name": "Chittaurgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.866669,
        "lat": 23.866671
      },
      "name": "Chittaranjan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 14.23333
      },
      "name": "Chitradurga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.083328,
        "lat": 17.116671
      },
      "name": "Chitapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.645599,
        "lat": 28.240101
      },
      "name": "Chidawa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.349998,
        "lat": 15.81667
      },
      "name": "Chirala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.566673,
        "lat": 18.299999
      },
      "name": "Chipurupalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.51667,
        "lat": 17.533331
      },
      "name": "Chiplun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.066673,
        "lat": 13.4
      },
      "name": "Chintamani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.900002,
        "lat": 11.65
      },
      "name": "Chinna Salem",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.383331,
        "lat": 9.83333
      },
      "name": "Chinnamanur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433327,
        "lat": 17.466669
      },
      "name": "Chincholi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.508331,
        "lat": 26.282221
      },
      "name": "Chillupar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.166672,
        "lat": 16.08333
      },
      "name": "Chilakalurupet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 16.433331
      },
      "name": "Chikodi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.62278,
        "lat": 13.41722
      },
      "name": "Chiknayakanhalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.783333,
        "lat": 13.31667
      },
      "name": "Chikmagalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.25,
        "lat": 20.35
      },
      "name": "Chikhli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.724167,
        "lat": 13.43417
      },
      "name": "Chik Ballapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.699997,
        "lat": 11.4
      },
      "name": "Chidambaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.683327,
        "lat": 21.466669
      },
      "name": "Chicholi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.699997,
        "lat": 24.383329
      },
      "name": "Chhoti Sadri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.01667,
        "lat": 22.316669
      },
      "name": "Chhota Udepur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.933327,
        "lat": 22.066669
      },
      "name": "Chhindwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.497902,
        "lat": 27.1483
      },
      "name": "Chhibramau",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.599998,
        "lat": 24.9
      },
      "name": "Chhatarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.01667,
        "lat": 26.216669
      },
      "name": "Chhatapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.5,
        "lat": 27.716667
      },
      "name": "Chhata",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.416672,
        "lat": 27.933331
      },
      "name": "Chharra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.183327,
        "lat": 29.216669
      },
      "name": "Chhaprauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.400002,
        "lat": 27.816669
      },
      "name": "Chhapar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.76667,
        "lat": 23.299999
      },
      "name": "Chhala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.833328,
        "lat": 24.66667
      },
      "name": "Chhabra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.066673,
        "lat": 10.9
      },
      "name": "Chettipalaiyam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.240829,
        "lat": 13.07
      },
      "name": "Chetput",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.616669,
        "lat": 11.16667
      },
      "name": "Chennimalai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.633331,
        "lat": 9.33333
      },
      "name": "Chengannur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.800003,
        "lat": 12.3
      },
      "name": "Chengam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.98333,
        "lat": 12.7
      },
      "name": "Chengalpattu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.050003,
        "lat": 10.53333
      },
      "name": "Chavakkad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.949997,
        "lat": 26.6
      },
      "name": "Chaksu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.98333,
        "lat": 19.35
      },
      "name": "Chatrapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.866669,
        "lat": 24.216669
      },
      "name": "Chatra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.166672,
        "lat": 23.633329
      },
      "name": "Chas",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.583328,
        "lat": 29.549999
      },
      "name": "Charthawal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.26667,
        "lat": 28.6
      },
      "name": "Charkhi Dadri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.75,
        "lat": 25.4
      },
      "name": "Charkhari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.466667,
        "lat": 26.26667
      },
      "name": "Chapar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.39167,
        "lat": 12.90444
      },
      "name": "Channarayapatna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.216667,
        "lat": 12.65
      },
      "name": "Channapatna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.933327,
        "lat": 14.03333
      },
      "name": "Channagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.550003,
        "lat": 9.46667
      },
      "name": "Changanacheri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.25,
        "lat": 20.33333
      },
      "name": "Chandvad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.74556,
        "lat": 21.241671
      },
      "name": "Chandur Bazar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.966667,
        "lat": 20.816669
      },
      "name": "Chandur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.183327,
        "lat": 19.73333
      },
      "name": "Chandur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.300003,
        "lat": 19.950001
      },
      "name": "Chandrapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.51667,
        "lat": 22.73333
      },
      "name": "Chandrakona",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 29.15
      },
      "name": "Chandpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.793297,
        "lat": 30.734301
      },
      "name": "Chandigarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.133331,
        "lat": 24.716669
      },
      "name": "Chanderi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.76667,
        "lat": 28.450001
      },
      "name": "Chandausi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.26667,
        "lat": 25.26667
      },
      "name": "Chandauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.37722,
        "lat": 22.869169
      },
      "name": "Chandannagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.116669,
        "lat": 23.716669
      },
      "name": "Chanasma",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 11.91667
      },
      "name": "Chamrajnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.650002,
        "lat": 22.049999
      },
      "name": "Champa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.133331,
        "lat": 32.566669
      },
      "name": "Chamba",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.933327,
        "lat": 16.116671
      },
      "name": "Challapalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.650002,
        "lat": 14.31667
      },
      "name": "Challakere",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.01667,
        "lat": 20.466669
      },
      "name": "Chalisgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.166672,
        "lat": 21.41667
      },
      "name": "Chalala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.633331,
        "lat": 22.700001
      },
      "name": "Chakradharpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.933327,
        "lat": 22.65
      },
      "name": "Chaklasi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.050003,
        "lat": 26.41667
      },
      "name": "Chakia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.849998,
        "lat": 18.75
      },
      "name": "Chakan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.816673,
        "lat": 22.566669
      },
      "name": "Chaibasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.671387,
        "lat": 22.31889
      },
      "name": "Canning",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.357628,
        "lat": 11.86752
      },
      "name": "Cannanore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.36972,
        "lat": 22.569719
      },
      "name": "Kolkata",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.48333,
        "lat": 14.68333
      },
      "name": "Byadgi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.98333,
        "lat": 25.58333
      },
      "name": "Buxar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.866669,
        "lat": 21.5
      },
      "name": "Burla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.533333,
        "lat": 23.216669
      },
      "name": "Burhar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.23333,
        "lat": 21.299999
      },
      "name": "Burhanpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.583328,
        "lat": 23.183331
      },
      "name": "Bundu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.64167,
        "lat": 25.441669
      },
      "name": "Bundi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.183327,
        "lat": 20.533331
      },
      "name": "Buldana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.849998,
        "lat": 28.4
      },
      "name": "Bulandshahr",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.566673,
        "lat": 29.933331
      },
      "name": "Budhlada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.466667,
        "lat": 29.283331
      },
      "name": "Budhana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.116669,
        "lat": 28.049999
      },
      "name": "Budaun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.916672,
        "lat": 21.816669
      },
      "name": "Brajarajnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.783333,
        "lat": 19.316669
      },
      "name": "Brahmapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.666672,
        "lat": 22.16667
      },
      "name": "Botad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.900002,
        "lat": 22.41667
      },
      "name": "Borsad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.849998,
        "lat": 19.23333
      },
      "name": "Borivli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.556763,
        "lat": 26.47822
      },
      "name": "Bongaigaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.847939,
        "lat": 19.01441
      },
      "name": "Mumbai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.716667,
        "lat": 23.66667
      },
      "name": "Bolpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.966667,
        "lat": 23.783331
      },
      "name": "Bokaro",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 93.783333,
        "lat": 26.01667
      },
      "name": "Bokajan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.75,
        "lat": 19.799999
      },
      "name": "Boisar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.349998,
        "lat": 10.01667
      },
      "name": "Bodinayakkanur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.98333,
        "lat": 24.700001
      },
      "name": "Bodh Gaya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.900002,
        "lat": 18.66667
      },
      "name": "Bodhan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.366669,
        "lat": 18.566669
      },
      "name": "Bobbili",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.0,
        "lat": 27.5
      },
      "name": "Biswan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.083328,
        "lat": 28.25
      },
      "name": "Bissau",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.316673,
        "lat": 23.08333
      },
      "name": "Bishnupur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.933327,
        "lat": 28.316669
      },
      "name": "Bisauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.800003,
        "lat": 28.299999
      },
      "name": "Bisalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.966667,
        "lat": 13.61667
      },
      "name": "Birur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.01667,
        "lat": 26.51667
      },
      "name": "Birpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.76667,
        "lat": 22.4
      },
      "name": "Birmitrapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.800003,
        "lat": 21.033331
      },
      "name": "Binika",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.599998,
        "lat": 26.033331
      },
      "name": "Bindki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.203102,
        "lat": 24.185499
      },
      "name": "Etawa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.868889,
        "lat": 26.12306
      },
      "name": "Belthara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.916672,
        "lat": 28.133329
      },
      "name": "Bilsi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.949997,
        "lat": 28.25
      },
      "name": "Bilsanda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.083328,
        "lat": 26.85
      },
      "name": "Bilhaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.033333,
        "lat": 27.183331
      },
      "name": "Bilgram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.616669,
        "lat": 16.35
      },
      "name": "Bilgi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.26667,
        "lat": 28.883329
      },
      "name": "Bilaspur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.150002,
        "lat": 22.08333
      },
      "name": "Bilaspur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.234749,
        "lat": 26.231951
      },
      "name": "Bilasipara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.800003,
        "lat": 28.633329
      },
      "name": "Bilari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.705559,
        "lat": 26.179171
      },
      "name": "Bilara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.25,
        "lat": 25.200001
      },
      "name": "Bikramganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.300003,
        "lat": 28.01667
      },
      "name": "Bikaner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.133331,
        "lat": 29.366671
      },
      "name": "Bijnor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.099998,
        "lat": 33.799999
      },
      "name": "Bijbiara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.5,
        "lat": 24.633329
      },
      "name": "Bijawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.699997,
        "lat": 16.83333
      },
      "name": "Bijapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.51667,
        "lat": 25.183331
      },
      "name": "Bihar Sharif",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.98333,
        "lat": 25.73333
      },
      "name": "Bihariganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.508797,
        "lat": 26.8022
      },
      "name": "Bidhuna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 17.9
      },
      "name": "Bidar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 23.866671
      },
      "name": "Biaora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.633331,
        "lat": 11.46667
      },
      "name": "Bhuvanagiri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.76667,
        "lat": 21.049999
      },
      "name": "Bhusawal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.666672,
        "lat": 18.466669
      },
      "name": "Bhum",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.666672,
        "lat": 23.26667
      },
      "name": "Bhuj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.599998,
        "lat": 16.9
      },
      "name": "Bhudgaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.833328,
        "lat": 20.23333
      },
      "name": "Bhubaneshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.833328,
        "lat": 20.883329
      },
      "name": "Bhuban",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.849998,
        "lat": 18.16667
      },
      "name": "Bhor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.400002,
        "lat": 23.26667
      },
      "name": "Bhopal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.888893,
        "lat": 17.51083
      },
      "name": "Bhongir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.183327,
        "lat": 27.25
      },
      "name": "Bhongaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.6325,
        "lat": 31.549999
      },
      "name": "Bhogpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.133331,
        "lat": 28.783331
      },
      "name": "Bhiwani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.066673,
        "lat": 19.299999
      },
      "name": "Bhiwandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 25.799999
      },
      "name": "Bhitarwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.25,
        "lat": 25.0
      },
      "name": "Bhinmal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.933327,
        "lat": 27.716669
      },
      "name": "Bhinga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.183327,
        "lat": 24.5
      },
      "name": "Bhindar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.78833,
        "lat": 26.564171
      },
      "name": "Bhind",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.433327,
        "lat": 17.883329
      },
      "name": "Bhimunipatnam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.533333,
        "lat": 16.533331
      },
      "name": "Bhimavaram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.633331,
        "lat": 25.35
      },
      "name": "Bhilwara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.433327,
        "lat": 21.216669
      },
      "name": "Bhilai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.533333,
        "lat": 30.066669
      },
      "name": "Bhikhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.949997,
        "lat": 21.866671
      },
      "name": "Bhikangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.25,
        "lat": 21.85
      },
      "name": "Bhayavadar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.166672,
        "lat": 19.9
      },
      "name": "Bhawanipatna",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.035004,
        "lat": 30.26667
      },
      "name": "Bhawanigarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.833328,
        "lat": 24.41667
      },
      "name": "Bhawaniganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.150002,
        "lat": 21.76667
      },
      "name": "Bhavnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.683327,
        "lat": 11.45
      },
      "name": "Bhavani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.783333,
        "lat": 16.1
      },
      "name": "Bhattiprolu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.40889,
        "lat": 22.871389
      },
      "name": "Bhatpara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.566673,
        "lat": 13.96667
      },
      "name": "Bhatkal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.949997,
        "lat": 30.200001
      },
      "name": "Bhatinda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.933327,
        "lat": 21.73333
      },
      "name": "Bhatapara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.033333,
        "lat": 27.033331
      },
      "name": "Bhasawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.5,
        "lat": 25.549999
      },
      "name": "Bharwari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.966667,
        "lat": 21.700001
      },
      "name": "Bharuch",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.2248,
        "lat": 26.757099
      },
      "name": "Bharthana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.48333,
        "lat": 27.216667
      },
      "name": "Bharatpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 69.773613,
        "lat": 21.92639
      },
      "name": "Bhanvad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.916672,
        "lat": 21.1
      },
      "name": "Bhanpuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.746902,
        "lat": 24.513
      },
      "name": "Bhanpura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.583328,
        "lat": 19.933331
      },
      "name": "Bhanjanagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.75,
        "lat": 25.73333
      },
      "name": "Bhander",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.650002,
        "lat": 21.16667
      },
      "name": "Bhandara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.216667,
        "lat": 18.033331
      },
      "name": "Bhalki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.966667,
        "lat": 19.1
      },
      "name": "Bhaisa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.6325,
        "lat": 21.646669
      },
      "name": "Bhainsdehi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.0,
        "lat": 25.25
      },
      "name": "Bhagalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.350563,
        "lat": 22.82444
      },
      "name": "Bhadreswar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.716667,
        "lat": 13.86667
      },
      "name": "Bhadravati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.519997,
        "lat": 21.05278
      },
      "name": "Bhadrakh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.883331,
        "lat": 17.66667
      },
      "name": "Bhadrachalam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.166672,
        "lat": 29.116671
      },
      "name": "Bhadra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.566673,
        "lat": 25.41667
      },
      "name": "Bhadohi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.316673,
        "lat": 30.48333
      },
      "name": "Bhadaur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.316673,
        "lat": 28.283331
      },
      "name": "Bhadasar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.349998,
        "lat": 23.283331
      },
      "name": "Bhachau",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.616669,
        "lat": 25.049999
      },
      "name": "Bhabua",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.816673,
        "lat": 11.18333
      },
      "name": "Beypore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.300499,
        "lat": 27.218399
      },
      "name": "Bewar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.896111,
        "lat": 21.915279
      },
      "name": "Betul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.5,
        "lat": 26.799999
      },
      "name": "Bettiah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.166672,
        "lat": 15.46667
      },
      "name": "Betamcherla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.583328,
        "lat": 28.700001
      },
      "name": "Beri Khas",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433327,
        "lat": 23.633329
      },
      "name": "Berasia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.383331,
        "lat": 24.049999
      },
      "name": "Beohari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.533333,
        "lat": 21.700001
      },
      "name": "Bemetara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.866669,
        "lat": 13.16667
      },
      "name": "Belur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.400002,
        "lat": 26.450001
      },
      "name": "Belsand",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.451393,
        "lat": 23.252781
      },
      "name": "Belonia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 15.15
      },
      "name": "Bellary",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.5,
        "lat": 15.86667
      },
      "name": "Belgaum",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.25,
        "lat": 23.933331
      },
      "name": "Beldanga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.98333,
        "lat": 25.933331
      },
      "name": "Bela",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.283333,
        "lat": 27.883333
      },
      "name": "Behror",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.616669,
        "lat": 30.16667
      },
      "name": "Behat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.133331,
        "lat": 25.41667
      },
      "name": "Begusarai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.0,
        "lat": 24.98333
      },
      "name": "Begun",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.333328,
        "lat": 23.6
      },
      "name": "Begamganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.050003,
        "lat": 22.5
      },
      "name": "Bedi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.316673,
        "lat": 26.1
      },
      "name": "Beawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.116669,
        "lat": 29.15
      },
      "name": "Bazpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 26.9
      },
      "name": "Bayana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.033333,
        "lat": 28.799999
      },
      "name": "Bawana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.316673,
        "lat": 20.83333
      },
      "name": "Bauda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.202782,
        "lat": 31.818609
      },
      "name": "Batala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.583328,
        "lat": 27.15
      },
      "name": "Baswa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.738609,
        "lat": 21.135281
      },
      "name": "Basudebpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.716667,
        "lat": 26.799999
      },
      "name": "Basti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 23.85
      },
      "name": "Basoda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.650002,
        "lat": 27.16667
      },
      "name": "Basni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.166672,
        "lat": 19.316669
      },
      "name": "Basmat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.398613,
        "lat": 30.691669
      },
      "name": "Basi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.845596,
        "lat": 30.5888
      },
      "name": "Basi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.033333,
        "lat": 26.833332
      },
      "name": "Basi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.966667,
        "lat": 16.58333
      },
      "name": "Basavana Bagevadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 17.866671
      },
      "name": "Basavakalyan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.900002,
        "lat": 22.033331
      },
      "name": "Barwani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.916672,
        "lat": 29.383329
      },
      "name": "Barwala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.98333,
        "lat": 25.48333
      },
      "name": "Baruni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.439171,
        "lat": 22.34972
      },
      "name": "Baruipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.699997,
        "lat": 18.23333
      },
      "name": "Barsi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.0,
        "lat": 26.316669
      },
      "name": "Barpeta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.583328,
        "lat": 21.200001
      },
      "name": "Barpali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.550003,
        "lat": 30.383329
      },
      "name": "Barnala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.383331,
        "lat": 25.75
      },
      "name": "Barmer",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.883331,
        "lat": 24.16667
      },
      "name": "Barki Saria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.48333,
        "lat": 23.616671
      },
      "name": "Barka Kana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.366669,
        "lat": 23.616671
      },
      "name": "Barjala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.466667,
        "lat": 24.41667
      },
      "name": "Bari Sadri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.599998,
        "lat": 26.65
      },
      "name": "Bari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.033333,
        "lat": 25.283331
      },
      "name": "Barhiya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.716667,
        "lat": 25.48333
      },
      "name": "Barh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.866669,
        "lat": 22.98333
      },
      "name": "Bargi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.616669,
        "lat": 21.33333
      },
      "name": "Bargarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.416672,
        "lat": 28.35
      },
      "name": "Bareilly",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.116669,
        "lat": 21.116671
      },
      "name": "Bardoli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.849998,
        "lat": 23.25
      },
      "name": "Barddhaman",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.73333,
        "lat": 25.216669
      },
      "name": "Bar Bigha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.26667,
        "lat": 29.1
      },
      "name": "Baraut",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.583328,
        "lat": 26.4
      },
      "name": "Barauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.51667,
        "lat": 22.716669
      },
      "name": "Barasat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.36528,
        "lat": 22.64333
      },
      "name": "Baranagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.51667,
        "lat": 25.1
      },
      "name": "Baran",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.349998,
        "lat": 34.200001
      },
      "name": "Baramula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.583328,
        "lat": 18.15
      },
      "name": "Baramati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.371941,
        "lat": 22.761391
      },
      "name": "Barakpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.466667,
        "lat": 15.9
      },
      "name": "Bapatla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.71833,
        "lat": 30.555559
      },
      "name": "Banur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.033333,
        "lat": 12.9
      },
      "name": "Bantval",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.068893,
        "lat": 21.486389
      },
      "name": "Bantva",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.449997,
        "lat": 23.549999
      },
      "name": "Banswara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.883331,
        "lat": 18.383329
      },
      "name": "Banswada",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.933327,
        "lat": 27.183331
      },
      "name": "Bansi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.216667,
        "lat": 25.883329
      },
      "name": "Bansdih",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.399437,
        "lat": 22.971939
      },
      "name": "Bansbaria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.86306,
        "lat": 12.33083
      },
      "name": "Bannur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.183327,
        "lat": 25.883329
      },
      "name": "Banmankhi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.066673,
        "lat": 23.25
      },
      "name": "Bankura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.533333,
        "lat": 20.383329
      },
      "name": "Banki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.916672,
        "lat": 24.883329
      },
      "name": "Banka",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.216667,
        "lat": 26.9
      },
      "name": "Bangarmau",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.199997,
        "lat": 12.96667
      },
      "name": "Bangarapet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.816673,
        "lat": 23.066669
      },
      "name": "Bangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.23333,
        "lat": 15.31667
      },
      "name": "Banganapalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.603287,
        "lat": 12.97623
      },
      "name": "Bangalore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.992218,
        "lat": 31.186939
      },
      "name": "Banga",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.650002,
        "lat": 34.416672
      },
      "name": "Bandipura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 27.049999
      },
      "name": "Bandikui",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.333328,
        "lat": 25.48333
      },
      "name": "Banda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.962601,
        "lat": 24.0448
      },
      "name": "Banda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.349998,
        "lat": 29.466669
      },
      "name": "Banat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.183327,
        "lat": 19.783331
      },
      "name": "Banapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.150002,
        "lat": 24.9
      },
      "name": "Bamor Kalan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.76667,
        "lat": 25.216669
      },
      "name": "Balurghat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.099998,
        "lat": 20.16667
      },
      "name": "Balugaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.183327,
        "lat": 27.433331
      },
      "name": "Balrampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.23333,
        "lat": 25.83333
      },
      "name": "Balotra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.166672,
        "lat": 21.66667
      },
      "name": "Baloda Bazar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.20472,
        "lat": 20.73
      },
      "name": "Balod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.340279,
        "lat": 22.646111
      },
      "name": "Bali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.349998,
        "lat": 19.83333
      },
      "name": "Ballalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.283333,
        "lat": 25.183331
      },
      "name": "Bali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.931671,
        "lat": 21.494169
      },
      "name": "Balasore",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.216667,
        "lat": 23.116671
      },
      "name": "Balarampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.76667,
        "lat": 20.66667
      },
      "name": "Balapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.48333,
        "lat": 20.716669
      },
      "name": "Balangir",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.183327,
        "lat": 21.799999
      },
      "name": "Balaghat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.316673,
        "lat": 31.066669
      },
      "name": "Balachor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.51667,
        "lat": 25.466669
      },
      "name": "Bakhtiyarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.17028,
        "lat": 22.47472
      },
      "name": "Baj Baj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.283333,
        "lat": 26.75
      },
      "name": "Bairagnia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.633331,
        "lat": 13.86667
      },
      "name": "Baindur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.866669,
        "lat": 15.81667
      },
      "name": "Bail Hongal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.550003,
        "lat": 22.1
      },
      "name": "Baihar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.324722,
        "lat": 22.785
      },
      "name": "Baidyabati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.599998,
        "lat": 27.58333
      },
      "name": "Bahraich",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.616669,
        "lat": 28.4
      },
      "name": "Bahjoi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.5,
        "lat": 28.783331
      },
      "name": "Baheri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.25,
        "lat": 24.1
      },
      "name": "Baharampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 28.683331
      },
      "name": "Bahadurgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.816673,
        "lat": 26.26667
      },
      "name": "Bahadurganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.597504,
        "lat": 26.870001
      },
      "name": "Bah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.650002,
        "lat": 23.316669
      },
      "name": "Bagula",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.216667,
        "lat": 28.950001
      },
      "name": "Baghpat",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.316673,
        "lat": 26.700001
      },
      "name": "Baghdogra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.099998,
        "lat": 30.683331
      },
      "name": "Bagha Purana",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.79306,
        "lat": 13.78472
      },
      "name": "Bagepalli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.949997,
        "lat": 21.48333
      },
      "name": "Bagasra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.500504,
        "lat": 28.187401
      },
      "name": "Bagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.699997,
        "lat": 16.183331
      },
      "name": "Bagalkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.083328,
        "lat": 27.1
      },
      "name": "Bagaha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.050003,
        "lat": 14.75
      },
      "name": "Badvel",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.785828,
        "lat": 22.741671
      },
      "name": "Baduria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.216667,
        "lat": 23.01667
      },
      "name": "Badnawar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.26667,
        "lat": 19.15
      },
      "name": "Badlapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.676826,
        "lat": 15.91495
      },
      "name": "Badami",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.583328,
        "lat": 11.6
      },
      "name": "Badagara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.400002,
        "lat": 22.116671
      },
      "name": "Bada Barabil",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.216667,
        "lat": 28.933331
      },
      "name": "Bachhraon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.400002,
        "lat": 28.26667
      },
      "name": "Babrala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.300003,
        "lat": 21.85
      },
      "name": "Babra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.466667,
        "lat": 25.25
      },
      "name": "Babina",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.716667,
        "lat": 25.549999
      },
      "name": "Baberu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.933327,
        "lat": 22.700001
      },
      "name": "Babai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.186111,
        "lat": 26.059999
      },
      "name": "Azamgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.199997,
        "lat": 26.799999
      },
      "name": "Ayodhya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.550003,
        "lat": 10.45
      },
      "name": "Ayakudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.918083,
        "lat": 16.021481
      },
      "name": "Avanigadda",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 11.2
      },
      "name": "Avinashi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.101669,
        "lat": 13.11556
      },
      "name": "Avadi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.5,
        "lat": 18.25
      },
      "name": "Ausa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.366669,
        "lat": 24.75
      },
      "name": "Aurangabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.333328,
        "lat": 19.883329
      },
      "name": "Aurangabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.51667,
        "lat": 26.466669
      },
      "name": "Auraiya",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.433327,
        "lat": 18.25
      },
      "name": "Aurad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.616669,
        "lat": 11.6
      },
      "name": "Attur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.833328,
        "lat": 8.68333
      },
      "name": "Attingal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.283333,
        "lat": 28.033331
      },
      "name": "Atrauli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.583328,
        "lat": 15.88333
      },
      "name": "Atmakur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.400002,
        "lat": 10.35
      },
      "name": "Adirampattinam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.066673,
        "lat": 16.73333
      },
      "name": "Athni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.616669,
        "lat": 20.533331
      },
      "name": "Athagarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.566673,
        "lat": 25.283331
      },
      "name": "Atarra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.333328,
        "lat": 25.73333
      },
      "name": "Asind",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.650002,
        "lat": 19.6
      },
      "name": "Asika",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.283333,
        "lat": 19.366671
      },
      "name": "Asifabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.716667,
        "lat": 23.01667
      },
      "name": "Ashta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.400002,
        "lat": 16.950001
      },
      "name": "Ashta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.716667,
        "lat": 24.566669
      },
      "name": "Ashoknagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.98333,
        "lat": 23.683331
      },
      "name": "Asansol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.599998,
        "lat": 29.51667
      },
      "name": "Asandh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.23333,
        "lat": 20.98333
      },
      "name": "Arvi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.099998,
        "lat": 9.51667
      },
      "name": "Aruppukkottai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 8.56667
      },
      "name": "Arumuganeri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.349998,
        "lat": 9.86667
      },
      "name": "Arukutti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.256111,
        "lat": 13.31389
      },
      "name": "Arsikere",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.416672,
        "lat": 24.383329
      },
      "name": "Aron",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.056938,
        "lat": 12.765
      },
      "name": "Arkalgud",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.083328,
        "lat": 11.13333
      },
      "name": "Ariyalur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.333328,
        "lat": 12.9
      },
      "name": "Arcot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.51667,
        "lat": 26.15
      },
      "name": "Araria",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.98333,
        "lat": 10.16667
      },
      "name": "Arantangi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.283333,
        "lat": 12.66667
      },
      "name": "Arani",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.183327,
        "lat": 18.66667
      },
      "name": "Arangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.966667,
        "lat": 21.200001
      },
      "name": "Arang",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.783333,
        "lat": 22.883329
      },
      "name": "Arambagh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.666672,
        "lat": 13.1
      },
      "name": "Arakkonam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 84.666672,
        "lat": 25.566669
      },
      "name": "Ara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.150002,
        "lat": 28.283331
      },
      "name": "Aonla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.26667,
        "lat": 28.366671
      },
      "name": "Anupshahr",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.683327,
        "lat": 23.1
      },
      "name": "Anuppur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.208611,
        "lat": 29.191111
      },
      "name": "Anupgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.300003,
        "lat": 25.15
      },
      "name": "Anta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.316673,
        "lat": 20.033331
      },
      "name": "Anshing",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.133331,
        "lat": 11.23333
      },
      "name": "Annur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.433327,
        "lat": 15.43333
      },
      "name": "Annigeri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.0,
        "lat": 21.6
      },
      "name": "Ankleshwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.01667,
        "lat": 23.133329
      },
      "name": "Anjar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.309441,
        "lat": 21.163059
      },
      "name": "Anjangaon",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.050003,
        "lat": 22.033331
      },
      "name": "Anjad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 85.099998,
        "lat": 20.85
      },
      "name": "Angul",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.400002,
        "lat": 10.2
      },
      "name": "Angamali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.699997,
        "lat": 12.7
      },
      "name": "Anekal",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.077217,
        "lat": 17.813061
      },
      "name": "Andol",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.599998,
        "lat": 11.58333
      },
      "name": "Anthiyur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.633331,
        "lat": 9.98333
      },
      "name": "Andippatti",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.150002,
        "lat": 33.73333
      },
      "name": "Anantnag",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.599998,
        "lat": 14.68333
      },
      "name": "Anantapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.5,
        "lat": 31.25
      },
      "name": "Anandpur Sahib",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.933327,
        "lat": 22.566669
      },
      "name": "Anand",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.01667,
        "lat": 17.683331
      },
      "name": "Anakapalle",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 10.58333
      },
      "name": "Anaimalai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.900002,
        "lat": 18.41667
      },
      "name": "Amudalavalasa",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.008331,
        "lat": 22.58
      },
      "name": "Amta",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.849998,
        "lat": 21.299999
      },
      "name": "Amroli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.466667,
        "lat": 28.91667
      },
      "name": "Amroha",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.865562,
        "lat": 31.63306
      },
      "name": "Amritsar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.23333,
        "lat": 21.616671
      },
      "name": "Amreli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.75,
        "lat": 20.933331
      },
      "name": "Amravati",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.900002,
        "lat": 21.98333
      },
      "name": "Amod",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.01667,
        "lat": 20.283331
      },
      "name": "Amli",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 87.333328,
        "lat": 22.83333
      },
      "name": "Amlagora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.116669,
        "lat": 21.933331
      },
      "name": "Amla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.933327,
        "lat": 25.299999
      },
      "name": "Amet",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.699997,
        "lat": 12.78333
      },
      "name": "Ambur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.199997,
        "lat": 23.116671
      },
      "name": "Ambikapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.162216,
        "lat": 13.09833
      },
      "name": "Ambattur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.466667,
        "lat": 8.7
      },
      "name": "Ambasamudram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.78083,
        "lat": 30.37833
      },
      "name": "Ambala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.383331,
        "lat": 18.73333
      },
      "name": "Ambajogai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.226112,
        "lat": 26.7075
      },
      "name": "Ambah",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.800003,
        "lat": 19.616671
      },
      "name": "Ambad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.900002,
        "lat": 25.033331
      },
      "name": "Amarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.98333,
        "lat": 24.316669
      },
      "name": "Amarpatan",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.166672,
        "lat": 19.200001
      },
      "name": "Amarnath",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.066673,
        "lat": 21.049999
      },
      "name": "Amalner",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.01667,
        "lat": 16.58333
      },
      "name": "Amalapuram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.599998,
        "lat": 27.566669
      },
      "name": "Alwar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.550003,
        "lat": 23.76667
      },
      "name": "Alot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 94.76667,
        "lat": 28.16667
      },
      "name": "Along",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.73333,
        "lat": 15.43333
      },
      "name": "Alnavar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.666672,
        "lat": 29.616671
      },
      "name": "Almora",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.326401,
        "lat": 9.49004
      },
      "name": "Alleppey",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.849998,
        "lat": 25.450001
      },
      "name": "Allahabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.150002,
        "lat": 28.799999
      },
      "name": "Alipur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.083328,
        "lat": 27.883329
      },
      "name": "Aligarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.183327,
        "lat": 27.5
      },
      "name": "Aliganj",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.879173,
        "lat": 18.641109
      },
      "name": "Alibag",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.5,
        "lat": 8.86667
      },
      "name": "Alangulam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.75,
        "lat": 12.6
      },
      "name": "Alangayam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.206108,
        "lat": 13.0025
      },
      "name": "Alandur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 73.900002,
        "lat": 18.66667
      },
      "name": "Alandi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 17.566669
      },
      "name": "Aland",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.058609,
        "lat": 21.09639
      },
      "name": "Akot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.0,
        "lat": 20.73333
      },
      "name": "Akola",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.566673,
        "lat": 24.41667
      },
      "name": "Aklera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 81.383331,
        "lat": 16.6
      },
      "name": "Akividu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.550003,
        "lat": 26.41667
      },
      "name": "Akbarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.949997,
        "lat": 26.383329
      },
      "name": "Akbarpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 82.433327,
        "lat": 22.01667
      },
      "name": "Akaltara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.216667,
        "lat": 17.533331
      },
      "name": "Akalkot",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.199997,
        "lat": 16.116671
      },
      "name": "Ajra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.758888,
        "lat": 31.842501
      },
      "name": "Ajnala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.633331,
        "lat": 26.450001
      },
      "name": "Ajmer",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 92.716667,
        "lat": 23.73333
      },
      "name": "Aizawl",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 83.01667,
        "lat": 25.01667
      },
      "name": "Ahraura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.933327,
        "lat": 18.700001
      },
      "name": "Ahmadpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.73333,
        "lat": 19.08333
      },
      "name": "Ahmadnagar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.616669,
        "lat": 23.033333
      },
      "name": "Ahmadabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.01667,
        "lat": 27.183332
      },
      "name": "Agra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 91.275002,
        "lat": 23.83639
      },
      "name": "Agartala",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.01667,
        "lat": 23.700001
      },
      "name": "Agar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.349998,
        "lat": 17.200001
      },
      "name": "Afzalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.683327,
        "lat": 29.4
      },
      "name": "Afzalgarh",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 76.73333,
        "lat": 9.16667
      },
      "name": "Adur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 86.666672,
        "lat": 23.5
      },
      "name": "Adra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.283333,
        "lat": 15.63333
      },
      "name": "Adoni",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.533333,
        "lat": 19.66667
      },
      "name": "Adilabad",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 79.98333,
        "lat": 15.81667
      },
      "name": "Addanki",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.76667,
        "lat": 27.183331
      },
      "name": "Achhnera",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 77.508614,
        "lat": 21.257219
      },
      "name": "Achalpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.783333,
        "lat": 24.48333
      },
      "name": "Abu Road",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 72.699997,
        "lat": 24.6
      },
      "name": "Abu",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 74.183327,
        "lat": 30.15
      },
      "name": "Abohar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 90.666672,
        "lat": 26.33333
      },
      "name": "Abhayapuri",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.883331,
        "lat": 29.25
      },
      "name": "Rikaze",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 98.517357,
        "lat": 39.743179
      },
      "name": "Suzhou",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 77.240562,
        "lat": 38.416672
      },
      "name": "Shache",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 97.23333,
        "lat": 31.16667
      },
      "name": "Qamdo",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 92.0,
        "lat": 31.5
      },
      "name": "Nagqu",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 91.099998,
        "lat": 29.65
      },
      "name": "Lhasa",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 97.73333,
        "lat": 39.833328
      },
      "name": "Laojunmiao",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 75.979721,
        "lat": 39.45472
      },
      "name": "Kashi",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 98.300003,
        "lat": 39.816669
      },
      "name": "Jiayuguan",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 79.926941,
        "lat": 37.09972
      },
      "name": "Hotan",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 90.71875,
        "lat": 29.961781
      },
      "name": "Deqen",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 73.508881,
        "lat": 4.1748
      },
      "name": "Male",
      "country": "MV"
    },
    {
      "coord": {
        "lon": 83.76667,
        "lat": 27.98333
      },
      "name": "Waling",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 82.297256,
        "lat": 28.130989
      },
      "name": "Tulsipur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 81.133331,
        "lat": 28.5
      },
      "name": "Tikapur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 83.5467,
        "lat": 27.86731
      },
      "name": "Tansen",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 86.208702,
        "lat": 26.65411
      },
      "name": "Siraha",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 86.75,
        "lat": 26.533331
      },
      "name": "Rajbiraj",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 83.98333,
        "lat": 28.233334
      },
      "name": "Pokhara",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.333336,
        "lat": 27.666668
      },
      "name": "Patan",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.512398,
        "lat": 27.581381
      },
      "name": "Panaoti",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.558113,
        "lat": 26.856791
      },
      "name": "Malangwa",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 80.333328,
        "lat": 28.91667
      },
      "name": "Mahendranagar",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 86.495148,
        "lat": 26.72958
      },
      "name": "Lahan",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.283333,
        "lat": 27.666668
      },
      "name": "Kirtipur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 87.203903,
        "lat": 27.374689
      },
      "name": "Khandbari",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.316666,
        "lat": 27.716667
      },
      "name": "Kathmandu",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.906464,
        "lat": 26.718281
      },
      "name": "Janakpur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.800812,
        "lat": 26.64711
      },
      "name": "Jaleswar",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 87.283333,
        "lat": 26.66667
      },
      "name": "Ithari",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 87.928238,
        "lat": 26.90943
      },
      "name": "Ilam",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.032188,
        "lat": 27.428391
      },
      "name": "Hitura",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 81.333328,
        "lat": 28.23333
      },
      "name": "Gulariya",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.26667,
        "lat": 26.76667
      },
      "name": "Gaur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 87.283546,
        "lat": 26.812481
      },
      "name": "Dharan Bazar",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 87.333328,
        "lat": 26.98333
      },
      "name": "Dhankuta",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 80.596107,
        "lat": 28.70792
      },
      "name": "Dhangarhi",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 80.52874,
        "lat": 29.841209
      },
      "name": "Darchula",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 81.710114,
        "lat": 28.844339
      },
      "name": "Dailekh",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 80.580589,
        "lat": 29.29842
      },
      "name": "Dadeldhura",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 83.448357,
        "lat": 27.70055
      },
      "name": "Butwal",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 84.87735,
        "lat": 27.010429
      },
      "name": "Birganj",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 87.283371,
        "lat": 26.483101
      },
      "name": "Biratnagar",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 84.433334,
        "lat": 27.683332
      },
      "name": "Bharatpur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 83.449997,
        "lat": 27.5
      },
      "name": "Bhairahawa",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 88.09436,
        "lat": 26.544041
      },
      "name": "Bhadrapur",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 85.521378,
        "lat": 27.629789
      },
      "name": "Banepa",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 83.58976,
        "lat": 28.271891
      },
      "name": "Baglung",
      "country": "NP"
    },
    {
      "coord": {
        "lon": 94.883331,
        "lat": 20.466669
      },
      "name": "Yenangyaung",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.650002,
        "lat": 17.033331
      },
      "name": "Nyaungdon",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.150002,
        "lat": 20.433331
      },
      "name": "Yamethin",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.183327,
        "lat": 16.6
      },
      "name": "Wakema",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.933327,
        "lat": 16.716669
      },
      "name": "Twante",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.433327,
        "lat": 18.933331
      },
      "name": "Taungoo",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.527779,
        "lat": 16.76194
      },
      "name": "Thongwa",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.183327,
        "lat": 19.316669
      },
      "name": "Thayetmyo",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.371391,
        "lat": 16.920561
      },
      "name": "Thaton",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.800003,
        "lat": 17.65
      },
      "name": "Tharyarwady",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.583328,
        "lat": 17.299999
      },
      "name": "Thanatpin",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.303329,
        "lat": 17.211941
      },
      "name": "Thanatpin",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 98.199997,
        "lat": 14.08333
      },
      "name": "Dawei",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.033333,
        "lat": 20.783331
      },
      "name": "Taunggyi",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.550003,
        "lat": 20.01667
      },
      "name": "Taungdwingyi",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.237778,
        "lat": 16.772221
      },
      "name": "Syriam",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 92.900002,
        "lat": 20.15
      },
      "name": "Sittwe",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.699997,
        "lat": 22.566669
      },
      "name": "Shwebo",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.979652,
        "lat": 21.8787
      },
      "name": "Sagaing",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.156113,
        "lat": 16.805281
      },
      "name": "Rangoon",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.433327,
        "lat": 18.48333
      },
      "name": "Pyu",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.216667,
        "lat": 19.73333
      },
      "name": "Pyinmana",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.216667,
        "lat": 18.816669
      },
      "name": "Pyay",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.683327,
        "lat": 16.283331
      },
      "name": "Pyapon",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.479721,
        "lat": 17.33667
      },
      "name": "Bago",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.5,
        "lat": 18.48333
      },
      "name": "Paungde",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.099998,
        "lat": 21.33333
      },
      "name": "Pakokku",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.73333,
        "lat": 17.950001
      },
      "name": "Nyaunglebin",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.400002,
        "lat": 25.383329
      },
      "name": "Myitkyina",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.383331,
        "lat": 21.466669
      },
      "name": "Myingyan",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.316673,
        "lat": 18.283331
      },
      "name": "Myanaung",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.716393,
        "lat": 16.25778
      },
      "name": "Mudon",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.26667,
        "lat": 16.383329
      },
      "name": "Mawlamyinegyunn",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.625557,
        "lat": 16.49139
      },
      "name": "Mawlamyine",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.133331,
        "lat": 22.116671
      },
      "name": "Monywa",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.5,
        "lat": 22.91667
      },
      "name": "Mogok",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 94.883331,
        "lat": 20.183331
      },
      "name": "Minbu",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 98.599998,
        "lat": 12.43333
      },
      "name": "Myeik",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.866669,
        "lat": 20.866671
      },
      "name": "Meiktila",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.466667,
        "lat": 22.033331
      },
      "name": "Maymyo",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 94.416672,
        "lat": 23.633329
      },
      "name": "Mawlaik",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.650002,
        "lat": 16.73333
      },
      "name": "Maubin",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.611107,
        "lat": 16.531389
      },
      "name": "Martaban",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.083588,
        "lat": 21.97473
      },
      "name": "Mandalay",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 94.916672,
        "lat": 20.15
      },
      "name": "Magway",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.209442,
        "lat": 19.67417
      },
      "name": "Loikaw",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.75,
        "lat": 17.783331
      },
      "name": "Letpandan",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.75,
        "lat": 22.933331
      },
      "name": "Lashio",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.133331,
        "lat": 21.6
      },
      "name": "Kyaukse",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.01667,
        "lat": 17.299999
      },
      "name": "Kyaikto",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.73333,
        "lat": 16.433331
      },
      "name": "Kyaiklat",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.567497,
        "lat": 16.08
      },
      "name": "Kyaikkami",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.563057,
        "lat": 16.90556
      },
      "name": "Kayan",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 96.001671,
        "lat": 16.70528
      },
      "name": "Kanbe",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.466667,
        "lat": 17.633329
      },
      "name": "Hinthada",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 94.816673,
        "lat": 20.883329
      },
      "name": "Chauk",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.400002,
        "lat": 16.283331
      },
      "name": "Bogale",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 97.23333,
        "lat": 24.26667
      },
      "name": "Bhamo",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 94.73333,
        "lat": 16.783331
      },
      "name": "Pathein",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 95.216667,
        "lat": 19.366671
      },
      "name": "Myaydo",
      "country": "MM"
    },
    {
      "coord": {
        "lon": 73.390831,
        "lat": 30.550831
      },
      "name": "Bahawalnagar",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 92.057198,
        "lat": 22.079599
      },
      "name": "Satkania",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 91.979767,
        "lat": 21.453239
      },
      "name": "Coxs Bazar",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.56723,
        "lat": 22.81348
      },
      "name": "Khulna",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.650002,
        "lat": 22.683331
      },
      "name": "Bhola",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.371109,
        "lat": 22.701941
      },
      "name": "Barisal",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.21315,
        "lat": 23.16869
      },
      "name": "Jessore",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.25,
        "lat": 24.0
      },
      "name": "Pabna",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.916672,
        "lat": 24.25
      },
      "name": "Tangail",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 89.366669,
        "lat": 24.85
      },
      "name": "Bogra",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.363503,
        "lat": 25.860399
      },
      "name": "Pirgaaj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 88.271019,
        "lat": 24.59112
      },
      "name": "Nawabganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.207222,
        "lat": 23.17528
      },
      "name": "Madaripur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.017509,
        "lat": 25.01881
      },
      "name": "Sherpur",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 90.76667,
        "lat": 24.433331
      },
      "name": "Kishorganj",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 72.013062,
        "lat": 33.99667
      },
      "name": "Nowshera Cantonment",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 87.753609,
        "lat": 21.77861
      },
      "name": "Contai",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.109749,
        "lat": 22.060459
      },
      "name": "Haldia",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.01889,
        "lat": 22.948891
      },
      "name": "Srirampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.220284,
        "lat": 22.640829
      },
      "name": "Dumjor",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.298058,
        "lat": 22.627501
      },
      "name": "Bankra",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.34861,
        "lat": 22.632219
      },
      "name": "Chakapara",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.237778,
        "lat": 22.59222
      },
      "name": "Mahiari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.173058,
        "lat": 22.586941
      },
      "name": "Dhulagari",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.138062,
        "lat": 22.54389
      },
      "name": "Panchla",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.215279,
        "lat": 22.508329
      },
      "name": "Nangi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.151672,
        "lat": 22.465281
      },
      "name": "Pujali",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.078888,
        "lat": 22.10833
      },
      "name": "Monoharpur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 88.509171,
        "lat": 22.288059
      },
      "name": "Nabagram",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.748283,
        "lat": 30.67539
      },
      "name": "Ahmadpur Sial",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.031937,
        "lat": 27.341669
      },
      "name": "New Badah",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.867592,
        "lat": 25.131109
      },
      "name": "Tando Ghulam Ali",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 68.468826,
        "lat": 27.2127
      },
      "name": "Setharja Old",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 74.711113,
        "lat": 34.07917
      },
      "name": "Soyibug",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.127502,
        "lat": 17.469721
      },
      "name": "Singapur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 78.68528,
        "lat": 17.44944
      },
      "name": "Ghatkesar",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 71.991661,
        "lat": 34.061859
      },
      "name": "Risalpur",
      "country": "PK"
    },
    {
      "coord": {
        "lon": 91.844002,
        "lat": 22.840799
      },
      "name": "Manikchari",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 77.801666,
        "lat": 13.29361
      },
      "name": "Vijayapura",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 75.717499,
        "lat": 31.432779
      },
      "name": "Adampur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.157501,
        "lat": 13.03194
      },
      "name": "Porur",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.209167,
        "lat": 12.9725
      },
      "name": "Madipakkam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.247223,
        "lat": 12.97139
      },
      "name": "Perungudi",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 80.046669,
        "lat": 12.8525
      },
      "name": "Madambakkam",
      "country": "IN"
    },
    {
      "coord": {
        "lon": 70.707779,
        "lat": 34.125832
      },
      "name": "Markaz-e Woluswali-ye Achin",
      "country": "AF"
    },
    {
      "coord": {
        "lon": 90.060898,
        "lat": 22.486099
      },
      "name": "Bhandaria",
      "country": "BD"
    },
    {
      "coord": {
        "lon": 66.551529,
        "lat": 56.5042
      },
      "name": "Zavodoukovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 84.949303,
        "lat": 53.707401
      },
      "name": "Zarinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.325401,
        "lat": 56.811001
      },
      "name": "Zarechnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.693611,
        "lat": 53.254169
      },
      "name": "Yuzhnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.253601,
        "lat": 54.441799
      },
      "name": "Yuzhnouralsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 84.886108,
        "lat": 55.723061
      },
      "name": "Yurga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 92.17028,
        "lat": 58.449718
      },
      "name": "Yeniseysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.320831,
        "lat": 54.754719
      },
      "name": "Yemanzhelinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.612499,
        "lat": 56.857498
      },
      "name": "Yekaterinburg",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.426498,
        "lat": 55.8736
      },
      "name": "Yashkino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 78.580002,
        "lat": 52.927299
      },
      "name": "Yarovoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 66.300583,
        "lat": 56.65358
      },
      "name": "Yalutorovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 64.0,
        "lat": 67.5
      },
      "name": "Vorkuta",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.950001,
        "lat": 67.583328
      },
      "name": "Vorgashor",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.553329,
        "lat": 58.045559
      },
      "name": "Verkhnyaya Salda",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.58083,
        "lat": 56.966671
      },
      "name": "Verkhnyaya Pyshma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.23056,
        "lat": 56.056671
      },
      "name": "Verkhniy Ufaley",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 89.833893,
        "lat": 55.303612
      },
      "name": "Uzhur",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 94.586113,
        "lat": 56.114719
      },
      "name": "Zelenogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 64.775833,
        "lat": 60.124722
      },
      "name": "Uray",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 65.527222,
        "lat": 57.152222
      },
      "name": "Tyumen",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.696049,
        "lat": 58.04575
      },
      "name": "Turinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.577301,
        "lat": 54.0979
      },
      "name": "Troitsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.616302,
        "lat": 55.276901
      },
      "name": "Topki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 84.966667,
        "lat": 56.5
      },
      "name": "Tomsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 84.385834,
        "lat": 55.235279
      },
      "name": "Toguchin",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 68.26667,
        "lat": 58.200001
      },
      "name": "Tobolsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 98.004402,
        "lat": 55.9342
      },
      "name": "Tayshet",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.61972,
        "lat": 56.060001
      },
      "name": "Tayga",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 65.272583,
        "lat": 58.042542
      },
      "name": "Tavda",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 75.982841,
        "lat": 55.21904
      },
      "name": "Tatarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.889397,
        "lat": 52.765701
      },
      "name": "Tashtagol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 77.785004,
        "lat": 64.922501
      },
      "name": "Tarko-Sale",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 74.370956,
        "lat": 56.89436
      },
      "name": "Tara",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 88.397202,
        "lat": 69.486504
      },
      "name": "Talnakh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.567703,
        "lat": 53.818298
      },
      "name": "Talmenka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.021301,
        "lat": 56.880402
      },
      "name": "Talitsa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.73254,
        "lat": 57.010948
      },
      "name": "Talitsa",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.819172,
        "lat": 56.495281
      },
      "name": "Sysert",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.3116,
        "lat": 53.7841
      },
      "name": "Suzun",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 73.416672,
        "lat": 61.25
      },
      "name": "Surgut",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 62.029598,
        "lat": 56.909401
      },
      "name": "Sukhoy Log",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 77.588898,
        "lat": 60.733299
      },
      "name": "Strezhevoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.466621,
        "lat": 56.989208
      },
      "name": "Sredneuralsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.584171,
        "lat": 61.361389
      },
      "name": "Sovetskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 93.358887,
        "lat": 56.1325
      },
      "name": "Sosnovoborsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 78.644897,
        "lat": 52.997799
      },
      "name": "Slavgorod",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 91.935562,
        "lat": 53.325001
      },
      "name": "Shushenskoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.296108,
        "lat": 55.226109
      },
      "name": "Shumikha",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 89.200829,
        "lat": 55.540279
      },
      "name": "Sharypovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.633499,
        "lat": 56.085201
      },
      "name": "Shadrinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.578701,
        "lat": 59.60334
      },
      "name": "Serov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 91.399719,
        "lat": 53.087502
      },
      "name": "Sayanogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 66.601936,
        "lat": 66.529999
      },
      "name": "Salekhard",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 81.25,
        "lat": 51.5
      },
      "name": "Rubtsovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.404282,
        "lat": 57.370049
      },
      "name": "Rezh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.676922,
        "lat": 57.09013
      },
      "name": "Reftinskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.638496,
        "lat": 54.915901
      },
      "name": "Promyshlennaya",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.719002,
        "lat": 53.905899
      },
      "name": "Prokopyevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 73.333328,
        "lat": 61.23333
      },
      "name": "Poykovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.245903,
        "lat": 54.6012
      },
      "name": "Polysayevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.187778,
        "lat": 56.442219
      },
      "name": "Polevskoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.81361,
        "lat": 54.369141
      },
      "name": "Plast",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.359802,
        "lat": 53.623901
      },
      "name": "Osinniki",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 73.400002,
        "lat": 55.0
      },
      "name": "Omsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.716599,
        "lat": 54.987202
      },
      "name": "Ob",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 65.393608,
        "lat": 62.14056
      },
      "name": "Nyagan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 75.450668,
        "lat": 63.19936
      },
      "name": "Noyabrsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 76.633331,
        "lat": 66.083328
      },
      "name": "Novyy Urengoy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.623894,
        "lat": 53.309719
      },
      "name": "Novosilikatnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.934441,
        "lat": 55.041111
      },
      "name": "Novosibirsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.109901,
        "lat": 53.755699
      },
      "name": "Novokuznetsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.936302,
        "lat": 53.391701
      },
      "name": "Novoaltaysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 88.202698,
        "lat": 69.3535
      },
      "name": "Norilsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.7202,
        "lat": 58.07756
      },
      "name": "Nizhnyaya Salda",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 76.553101,
        "lat": 60.934399
      },
      "name": "Nizhnevartovsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 99.027603,
        "lat": 54.9076
      },
      "name": "Nizhneudinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.211201,
        "lat": 57.4953
      },
      "name": "Nevyansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 72.603493,
        "lat": 61.099789
      },
      "name": "Nefteyugansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 90.391388,
        "lat": 56.00639
      },
      "name": "Nazarovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 72.51667,
        "lat": 65.533333
      },
      "name": "Nadym",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.801399,
        "lat": 53.709
      },
      "name": "Myski",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 91.6875,
        "lat": 53.710281
      },
      "name": "Minusinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.10833,
        "lat": 55.044998
      },
      "name": "Miass",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 88.06028,
        "lat": 53.694172
      },
      "name": "Mezhdurechensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 76.113602,
        "lat": 61.029598
      },
      "name": "Megion",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.911392,
        "lat": 52.019718
      },
      "name": "Mayma",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.747223,
        "lat": 56.21389
      },
      "name": "Mariinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.376404,
        "lat": 54.4589
      },
      "name": "Linevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 92.48278,
        "lat": 58.235828
      },
      "name": "Lesosibirsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.173698,
        "lat": 54.6567
      },
      "name": "Leninsk-Kuznetskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 66.418327,
        "lat": 66.657219
      },
      "name": "Labytnangi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 94.449997,
        "lat": 51.700001
      },
      "name": "Kyzyl",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.552799,
        "lat": 55.714001
      },
      "name": "Kyshtym",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 78.321808,
        "lat": 55.447529
      },
      "name": "Kuybyshev",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 64.431938,
        "lat": 54.910278
      },
      "name": "Kurtamysh",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 65.333328,
        "lat": 55.450001
      },
      "name": "Kurgan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 77.29805,
        "lat": 54.366348
      },
      "name": "Kupino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 78.938499,
        "lat": 52.566002
      },
      "name": "Kulunda",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 92.791672,
        "lat": 56.00972
      },
      "name": "Krasnoyarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.040699,
        "lat": 58.3638
      },
      "name": "Krasnouralsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.208599,
        "lat": 59.766602
      },
      "name": "Krasnoturinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.990898,
        "lat": 54.9198
      },
      "name": "Krasnoobsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.3969,
        "lat": 54.8913
      },
      "name": "Korkino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.679199,
        "lat": 55.131001
      },
      "name": "Kopeysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.33194,
        "lat": 61.313332
      },
      "name": "Yugorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.90889,
        "lat": 58.313061
      },
      "name": "Kolpashevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 99.184441,
        "lat": 58.688061
      },
      "name": "Kodinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.202003,
        "lat": 55.021801
      },
      "name": "Kochenevo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.662102,
        "lat": 53.990002
      },
      "name": "Kiselevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.059719,
        "lat": 57.429722
      },
      "name": "Kirovgrad",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 69.001938,
        "lat": 61.004169
      },
      "name": "Khanty-Mansiysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.083328,
        "lat": 55.333328
      },
      "name": "Kemerovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.050003,
        "lat": 55.533329
      },
      "name": "Kedrovka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.743889,
        "lat": 69.378609
      },
      "name": "Kayyerkan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 62.584099,
        "lat": 56.289001
      },
      "name": "Kataysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.7616,
        "lat": 55.8909
      },
      "name": "Kasli",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.646671,
        "lat": 53.052219
      },
      "name": "Kartaly",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.008499,
        "lat": 59.7654
      },
      "name": "Karpinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 78.04026,
        "lat": 53.73772
      },
      "name": "Karasuk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.215698,
        "lat": 55.480801
      },
      "name": "Karabash",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 95.717499,
        "lat": 56.201672
      },
      "name": "Kansk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 62.711109,
        "lat": 56.842781
      },
      "name": "Kamyshlov",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.932899,
        "lat": 56.418499
      },
      "name": "Kamensk-Uralskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 81.3423,
        "lat": 53.788399
      },
      "name": "Kamen-na-Obi",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 87.245697,
        "lat": 53.534698
      },
      "name": "Kaltan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 74.575111,
        "lat": 55.05286
      },
      "name": "Kalachinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.420559,
        "lat": 60.691109
      },
      "name": "Ivdel",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.304497,
        "lat": 54.6366
      },
      "name": "Iskitim",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 69.49015,
        "lat": 56.112808
      },
      "name": "Ishim",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 63.070999,
        "lat": 57.670521
      },
      "name": "Irbit",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 96.065002,
        "lat": 56.235828
      },
      "name": "Ilanskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.933327,
        "lat": 54.283329
      },
      "name": "Guryevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 81.46611,
        "lat": 50.994171
      },
      "name": "Gornyak",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.955002,
        "lat": 51.956108
      },
      "name": "Gorno-Altaysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.17778,
        "lat": 69.40583
      },
      "name": "Dudinka",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 92.361938,
        "lat": 55.959438
      },
      "name": "Divnogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.087898,
        "lat": 56.703999
      },
      "name": "Degtyarsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 99.634201,
        "lat": 56.081501
      },
      "name": "Chunskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 91.284172,
        "lat": 53.823608
      },
      "name": "Chernogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.380997,
        "lat": 54.222198
      },
      "name": "Cherepanovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.429722,
        "lat": 55.154442
      },
      "name": "Chelyabinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.3633,
        "lat": 54.974899
      },
      "name": "Chebarkul",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 65.720177,
        "lat": 57.040958
      },
      "name": "Borovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 94.898331,
        "lat": 55.910561
      },
      "name": "Borodino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 84.398064,
        "lat": 55.671669
      },
      "name": "Bolotnoye",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 89.534172,
        "lat": 56.207779
      },
      "name": "Bogotol",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 62.049438,
        "lat": 56.780281
      },
      "name": "Bogdanovich",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 85.207222,
        "lat": 52.536388
      },
      "name": "Biysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.801899,
        "lat": 56.908298
      },
      "name": "Berezovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.199997,
        "lat": 55.599998
      },
      "name": "Berezovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.096703,
        "lat": 54.7551
      },
      "name": "Berdsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 66.672218,
        "lat": 63.711941
      },
      "name": "Beloyarskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.2976,
        "lat": 54.4165
      },
      "name": "Belovo",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.763611,
        "lat": 53.360561
      },
      "name": "Barnaul",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 78.356972,
        "lat": 55.35709
      },
      "name": "Barabinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.145203,
        "lat": 56.997898
      },
      "name": "Asino",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.45776,
        "lat": 57.00993
      },
      "name": "Asbest",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.868649,
        "lat": 57.355499
      },
      "name": "Artemovskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.836899,
        "lat": 56.697701
      },
      "name": "Aramil",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 86.028503,
        "lat": 56.081001
      },
      "name": "Anzhero-Sudzhensk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 82.782204,
        "lat": 52.492599
      },
      "name": "Aleysk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 61.69627,
        "lat": 57.851582
      },
      "name": "Alapayevsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 83.106003,
        "lat": 54.852299
      },
      "name": "Akademgorodok",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 90.499298,
        "lat": 56.269402
      },
      "name": "Achinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 90.092781,
        "lat": 52.654999
      },
      "name": "Abaza",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 91.429169,
        "lat": 53.715561
      },
      "name": "Abakan",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 68.900002,
        "lat": 40.98333
      },
      "name": "Zafar",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 70.815559,
        "lat": 40.375832
      },
      "name": "Yaypan",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.047096,
        "lat": 41.112019
      },
      "name": "Yangiyul",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.822502,
        "lat": 40.275002
      },
      "name": "Yangiyer",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.960953,
        "lat": 40.025391
      },
      "name": "Yangirabot",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.73333,
        "lat": 41.187222
      },
      "name": "Yangiqorgon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 70.094063,
        "lat": 41.11919
      },
      "name": "Yangiobod",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 64.514999,
        "lat": 40.030281
      },
      "name": "Wobkent",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.923309,
        "lat": 41.08073
      },
      "name": "Uychi",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.633331,
        "lat": 41.549999
      },
      "name": "Urganch",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.494438,
        "lat": 40.126942
      },
      "name": "Dashtobod",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 72.079147,
        "lat": 41.113708
      },
      "name": "Uchqurghon Shahri",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.362534,
        "lat": 41.032101
      },
      "name": "Tuytepa",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.51162,
        "lat": 40.99984
      },
      "name": "Turagurghon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.767776,
        "lat": 40.477219
      },
      "name": "Toshloq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.21627,
        "lat": 41.264648
      },
      "name": "Tashkent",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.572144,
        "lat": 40.923389
      },
      "name": "Toshbuloq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.661667,
        "lat": 40.843609
      },
      "name": "Sirdaryo",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.302502,
        "lat": 41.65583
      },
      "name": "Showot",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 64.501389,
        "lat": 40.119999
      },
      "name": "Shofirkon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.381668,
        "lat": 41.372219
      },
      "name": "Salor",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.345558,
        "lat": 41.535
      },
      "name": "Qushkupir",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 70.942497,
        "lat": 40.52861
      },
      "name": "Qoqon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.350563,
        "lat": 40.897221
      },
      "name": "Piskent",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 66.236938,
        "lat": 40.007778
      },
      "name": "Payshanba",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.676392,
        "lat": 41.294441
      },
      "name": "Parkent",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.108887,
        "lat": 40.873611
      },
      "name": "Pop",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.954437,
        "lat": 40.315281
      },
      "name": "Paxtakor",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.598328,
        "lat": 40.844719
      },
      "name": "Olmaliq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.638329,
        "lat": 40.906391
      },
      "name": "Ohangaron",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.688606,
        "lat": 40.56139
      },
      "name": "Nurota",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 61.01667,
        "lat": 41.549999
      },
      "name": "Novyy Turtkul",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 65.379173,
        "lat": 40.084438
      },
      "name": "Navoiy",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.672569,
        "lat": 40.998299
      },
      "name": "Namangan",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.724716,
        "lat": 40.471111
      },
      "name": "Margilon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.059719,
        "lat": 42.115559
      },
      "name": "Manghit",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 72.238678,
        "lat": 40.641529
      },
      "name": "Asaka",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.974442,
        "lat": 40.302219
      },
      "name": "Quvasoy",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 72.761772,
        "lat": 40.731918
      },
      "name": "Qurghontepa",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.76722,
        "lat": 40.435829
      },
      "name": "Kirgili",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.464996,
        "lat": 41.389721
      },
      "name": "Qibray",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 72.56002,
        "lat": 40.668861
      },
      "name": "Khujaobod",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.363892,
        "lat": 41.37833
      },
      "name": "Khiwa",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 72.116669,
        "lat": 40.916672
      },
      "name": "Haqqulobod",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.550827,
        "lat": 41.256111
      },
      "name": "Kosonsoy",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 67.842216,
        "lat": 40.115829
      },
      "name": "Jizzax",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.700829,
        "lat": 41.55389
      },
      "name": "Iskandar",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 61.074169,
        "lat": 41.319439
      },
      "name": "Hazorasp",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.391941,
        "lat": 41.844719
      },
      "name": "Gurlan",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.784172,
        "lat": 40.489719
      },
      "name": "Guliston",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 64.683327,
        "lat": 40.099998
      },
      "name": "Ghijduwon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.770828,
        "lat": 41.55806
      },
      "name": "Gazalkent",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.172218,
        "lat": 40.661942
      },
      "name": "Gagarin",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.784317,
        "lat": 40.384209
      },
      "name": "Fargona",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.035828,
        "lat": 40.524719
      },
      "name": "Dustlik",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.228699,
        "lat": 41.009361
      },
      "name": "Chust Shahri",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.582222,
        "lat": 41.468891
      },
      "name": "Chirchiq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 68.769722,
        "lat": 40.93639
      },
      "name": "Chinoz",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.85527,
        "lat": 41.066559
      },
      "name": "Chortoq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.198608,
        "lat": 40.810829
      },
      "name": "Buka",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 70.610283,
        "lat": 40.435829
      },
      "name": "Beshariq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 60.752499,
        "lat": 41.691109
      },
      "name": "Beruniy",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.334167,
        "lat": 41.209721
      },
      "name": "Bektemir",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 69.269722,
        "lat": 40.220829
      },
      "name": "Bekobod",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 70.143608,
        "lat": 41.01667
      },
      "name": "Angren",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 72.344238,
        "lat": 40.782059
      },
      "name": "Andijon",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 71.474167,
        "lat": 40.391941
      },
      "name": "Oltiariq",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 61.403599,
        "lat": 41.187462
      },
      "name": "Gazojak",
      "country": "TM"
    },
    {
      "coord": {
        "lon": 69.503983,
        "lat": 40.167042
      },
      "name": "Proletar",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 69.627922,
        "lat": 40.285271
      },
      "name": "Khujand",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 70.442574,
        "lat": 40.28434
      },
      "name": "Konibodom",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 70.625259,
        "lat": 40.12648
      },
      "name": "Isfara",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 92.066673,
        "lat": 49.98111
      },
      "name": "Ulaangom",
      "country": "MN"
    },
    {
      "coord": {
        "lon": 89.962502,
        "lat": 48.96833
      },
      "name": "OElgiy",
      "country": "MN"
    },
    {
      "coord": {
        "lon": 91.641937,
        "lat": 48.005562
      },
      "name": "Hovd",
      "country": "MN"
    },
    {
      "coord": {
        "lon": 84.271942,
        "lat": 49.738609
      },
      "name": "Zyryanovsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 64.078056,
        "lat": 45.487782
      },
      "name": "Zhosaly",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 67.76667,
        "lat": 47.783329
      },
      "name": "Zhezqazghan",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 61.200562,
        "lat": 52.19083
      },
      "name": "Zhetiqara",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.75,
        "lat": 43.566669
      },
      "name": "Zhangatas",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 62.156109,
        "lat": 45.853611
      },
      "name": "Ayteke Bi",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 71.366669,
        "lat": 42.900002
      },
      "name": "Taraz",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 84.866669,
        "lat": 47.466671
      },
      "name": "Zaysan",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 67.248062,
        "lat": 43.915001
      },
      "name": "Zhangaqorghan",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 70.333328,
        "lat": 42.533329
      },
      "name": "Turar Ryskulov",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 77.982224,
        "lat": 45.242222
      },
      "name": "Ush-Tyube",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 68.25,
        "lat": 43.333328
      },
      "name": "Turkestan",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 72.948334,
        "lat": 50.05444
      },
      "name": "Temirtau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 78.823891,
        "lat": 44.830002
      },
      "name": "Tekeli",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 65.552498,
        "lat": 44.772781
      },
      "name": "Tasboget",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 77.23278,
        "lat": 43.30444
      },
      "name": "Talghar",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 78.373894,
        "lat": 45.01556
      },
      "name": "Taldyqorghan",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 77.916672,
        "lat": 45.0
      },
      "name": "Taldyqorghan",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.599998,
        "lat": 42.299999
      },
      "name": "Shymkent",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 73.761391,
        "lat": 43.598331
      },
      "name": "Shu",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 81.905563,
        "lat": 50.632778
      },
      "name": "Shemonaikha",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 70.199997,
        "lat": 52.933334
      },
      "name": "Shchuchinsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 80.227501,
        "lat": 50.41111
      },
      "name": "Semey",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.166672,
        "lat": 41.450001
      },
      "name": "Saryaghash",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 79.91861,
        "lat": 45.41
      },
      "name": "Sarkand",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 72.850563,
        "lat": 49.779999
      },
      "name": "Sorang",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 63.12056,
        "lat": 52.959438
      },
      "name": "Rudnyy",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 65.509171,
        "lat": 44.852779
      },
      "name": "Qyzylorda",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 63.583328,
        "lat": 53.166672
      },
      "name": "Qostanay",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 70.466667,
        "lat": 43.166672
      },
      "name": "Karatau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 77.083328,
        "lat": 43.883331
      },
      "name": "Qapshaghay",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.162781,
        "lat": 54.875278
      },
      "name": "Petropavlovsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 52.299999
      },
      "name": "Pavlodar",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 80.0,
        "lat": 44.162781
      },
      "name": "Zharkent",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 82.610283,
        "lat": 49.978889
      },
      "name": "Ust-Kamenogorsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 71.5,
        "lat": 43.0
      },
      "name": "Sarykemer",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 73.178612,
        "lat": 42.87278
      },
      "name": "Merke",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 70.416939,
        "lat": 52.629169
      },
      "name": "Makinsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 62.49361,
        "lat": 52.536942
      },
      "name": "Lisakovsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 63.316669,
        "lat": 45.616669
      },
      "name": "Baykonyr",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 83.513329,
        "lat": 50.355
      },
      "name": "Ridder",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.883926,
        "lat": 42.18301
      },
      "name": "Lenger",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.388336,
        "lat": 53.2775
      },
      "name": "Kokshetau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 68.509399,
        "lat": 43.520611
      },
      "name": "Kentau",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 77.452454,
        "lat": 43.355202
      },
      "name": "Esik",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 81.576111,
        "lat": 49.33139
      },
      "name": "Georgievka",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 76.916672,
        "lat": 52.033329
      },
      "name": "Aqsu",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 77.022217,
        "lat": 43.42778
      },
      "name": "Energeticheskiy",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 75.366669,
        "lat": 51.666672
      },
      "name": "Ekibastuz",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 66.75,
        "lat": 44.166672
      },
      "name": "Shieli",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 67.96917,
        "lat": 41.254719
      },
      "name": "Shardara",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 76.85778,
        "lat": 43.360279
      },
      "name": "Burunday",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.833328,
        "lat": 42.416672
      },
      "name": "Aksu",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 74.995003,
        "lat": 46.848061
      },
      "name": "Balqash",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 80.439171,
        "lat": 47.97139
      },
      "name": "Ayagoz",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 68.333328,
        "lat": 51.799999
      },
      "name": "Atbasar",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 68.794991,
        "lat": 42.425228
      },
      "name": "Arys",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 66.911392,
        "lat": 50.248611
      },
      "name": "Arkalyk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 61.666672,
        "lat": 46.799999
      },
      "name": "Aral",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 71.445976,
        "lat": 51.180099
      },
      "name": "Astana",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 76.949997,
        "lat": 43.25
      },
      "name": "Almaty",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.601112,
        "lat": 53.2925
      },
      "name": "Akkol",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 72.853889,
        "lat": 49.631111
      },
      "name": "Abay",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 72.072922,
        "lat": 40.522041
      },
      "name": "Quva",
      "country": "UZ"
    },
    {
      "coord": {
        "lon": 76.186127,
        "lat": 42.455681
      },
      "name": "Balykchy",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 75.301582,
        "lat": 42.841721
      },
      "name": "Tokmok",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 72.217079,
        "lat": 41.346119
      },
      "name": "Tash-Kumyr",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 72.241943,
        "lat": 42.522221
      },
      "name": "Talas",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 78.005577,
        "lat": 42.3414
      },
      "name": "Pokrovka",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 73.300682,
        "lat": 40.769939
      },
      "name": "Uzgen",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 72.808258,
        "lat": 40.51506
      },
      "name": "Osh",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 75.991112,
        "lat": 41.428661
      },
      "name": "Naryn",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 72.12793,
        "lat": 40.25684
      },
      "name": "Kyzyl-Kyya",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 72.866661,
        "lat": 40.704601
      },
      "name": "Kara Suu",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 78.393623,
        "lat": 42.490681
      },
      "name": "Karakol",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 73.848129,
        "lat": 42.814232
      },
      "name": "Kara-Balta",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 74.850769,
        "lat": 42.89106
      },
      "name": "Kant",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 73.0,
        "lat": 40.933331
      },
      "name": "Jalal-Abad",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 77.082253,
        "lat": 42.649441
      },
      "name": "Cholpon-Ata",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 74.589996,
        "lat": 42.869999
      },
      "name": "Bishkek",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 72.745857,
        "lat": 41.037601
      },
      "name": "Bazar-Korgon",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 75.810577,
        "lat": 41.17017
      },
      "name": "At-Bashi",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 87.600456,
        "lat": 43.800961
      },
      "name": "Urunchi",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 89.166672,
        "lat": 42.933331
      },
      "name": "Turpan",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 86.033333,
        "lat": 44.299999
      },
      "name": "Shihezi",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 82.936394,
        "lat": 41.727779
      },
      "name": "Kuqa",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 86.146942,
        "lat": 41.75972
      },
      "name": "Korla",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 93.449997,
        "lat": 42.799999
      },
      "name": "Hami",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 87.316673,
        "lat": 44.01667
      },
      "name": "Changji",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 85.183327,
        "lat": 45.633331
      },
      "name": "Baijiantan",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 81.263611,
        "lat": 40.51556
      },
      "name": "Aral",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 88.116669,
        "lat": 47.866669
      },
      "name": "Altay",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 80.264442,
        "lat": 41.123058
      },
      "name": "Aksu",
      "country": "CN"
    },
    {
      "coord": {
        "lon": 60.731392,
        "lat": 56.084999
      },
      "name": "Snezhinsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 71.88694,
        "lat": 52.354439
      },
      "name": "Stepnogorsk",
      "country": "KZ"
    },
    {
      "coord": {
        "lon": 69.694809,
        "lat": 40.234169
      },
      "name": "Chkalov",
      "country": "TJ"
    },
    {
      "coord": {
        "lon": 60.702782,
        "lat": 55.755562
      },
      "name": "Ozersk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 93.531937,
        "lat": 56.25111
      },
      "name": "Zheleznogorsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 60.083889,
        "lat": 57.243889
      },
      "name": "Novouralsk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 84.886391,
        "lat": 56.600559
      },
      "name": "Seversk",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 72.940201,
        "lat": 41.870789
      },
      "name": "Toktogul",
      "country": "KG"
    },
    {
      "coord": {
        "lon": 76.502609,
        "lat": 64.433998
      },
      "name": "Gubkinskiy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 77.474998,
        "lat": 62.096111
      },
      "name": "Raduzhnyy",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 74.52301,
        "lat": 63.789768
      },
      "name": "Muravlenko",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 72.155457,
        "lat": 61.61945
      },
      "name": "Lyantor",
      "country": "RU"
    },
    {
      "coord": {
        "lon": 70.216667,
        "lat": -49.349998
      },
      "name": "Port-aux-Francais",
      "country": "TF"
    },
    {
      "coord": {
        "lon": 104.866669,
        "lat": 21.700001
      },
      "name": "Yen Bai",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 107.084259,
        "lat": 10.34599
      },
      "name": "Vung Tau",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.596672,
        "lat": 21.309999
      },
      "name": "Vinh Yen",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.966667,
        "lat": 10.25
      },
      "name": "Vinh Long",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.666672,
        "lat": 18.66667
      },
      "name": "Vinh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.430832,
        "lat": 21.301941
      },
      "name": "Viet Tri",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.783333,
        "lat": 21.033331
      },
      "name": "Uong Bi",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 109.300003,
        "lat": 13.08333
      },
      "name": "Tuy Hoa",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.218063,
        "lat": 21.82333
      },
      "name": "Tuyen Quang",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.345284,
        "lat": 9.93472
      },
      "name": "Tra Vinh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.650002,
        "lat": 10.96667
      },
      "name": "Thu Dau Mot",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.666672,
        "lat": 10.75
      },
      "name": "Thanh pho Ho Chi Minh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.76667,
        "lat": 19.799999
      },
      "name": "Thanh Hoa",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.84417,
        "lat": 21.592779
      },
      "name": "Thai Nguyen",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.333328,
        "lat": 20.450001
      },
      "name": "Thai Binh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.099998,
        "lat": 11.3
      },
      "name": "Tay Ninh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.416672,
        "lat": 10.53333
      },
      "name": "Tan An",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.48333,
        "lat": 15.56667
      },
      "name": "Tam Ky",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.504997,
        "lat": 21.137779
      },
      "name": "Son Tay",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 103.900002,
        "lat": 21.316669
      },
      "name": "Son La",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 109.216667,
        "lat": 13.45
      },
      "name": "Song Cau",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.980003,
        "lat": 9.60333
      },
      "name": "Soc Trang",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 103.844147,
        "lat": 22.340231
      },
      "name": "Sa Pa",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.76667,
        "lat": 10.3
      },
      "name": "Sa Dec",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.083328,
        "lat": 10.01667
      },
      "name": "Rach Gia",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 109.23333,
        "lat": 13.76667
      },
      "name": "Quy Nhon",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.800003,
        "lat": 15.11667
      },
      "name": "Quang Ngai",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.0,
        "lat": 13.98333
      },
      "name": "Pleiku",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.913887,
        "lat": 20.541109
      },
      "name": "Phu Ly",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.133331,
        "lat": 11.28333
      },
      "name": "Phu Khuong",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.099998,
        "lat": 10.93333
      },
      "name": "Phan Thiet",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.98333,
        "lat": 11.56667
      },
      "name": "Phan Rang-Thap Cham",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.974998,
        "lat": 20.253889
      },
      "name": "Ninh Binh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 109.183327,
        "lat": 12.25
      },
      "name": "Nha Trang",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.166672,
        "lat": 20.41667
      },
      "name": "Nam Dinh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.349998,
        "lat": 10.35
      },
      "name": "My Tho",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.416672,
        "lat": 10.38333
      },
      "name": "Long Xuyen",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 103.949997,
        "lat": 22.48333
      },
      "name": "Lao Cai",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.73333,
        "lat": 21.83333
      },
      "name": "Lang Son",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 107.783333,
        "lat": 10.66667
      },
      "name": "Lagi",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.0,
        "lat": 14.35
      },
      "name": "Kon Tum",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.066673,
        "lat": 20.65
      },
      "name": "Hung Yen",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 107.599998,
        "lat": 16.466669
      },
      "name": "Hue",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 107.080002,
        "lat": 20.951111
      },
      "name": "Ha Long",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.334999,
        "lat": 15.87944
      },
      "name": "Hoi An",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.338333,
        "lat": 20.81333
      },
      "name": "Hoa Binh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.900002,
        "lat": 18.33333
      },
      "name": "Ha Tinh",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 104.48333,
        "lat": 10.38333
      },
      "name": "Ha Tien",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.841171,
        "lat": 21.0245
      },
      "name": "Ha Noi",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.68222,
        "lat": 20.85611
      },
      "name": "Haiphong",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.316673,
        "lat": 20.933331
      },
      "name": "Hai Duong",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 104.98333,
        "lat": 22.83333
      },
      "name": "Ha Giang",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 105.777222,
        "lat": 20.9725
      },
      "name": "Ha Dong",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.916672,
        "lat": 11.53333
      },
      "name": "Dong Xoai",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.599998,
        "lat": 17.48333
      },
      "name": "Dong Hoi",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 107.100311,
        "lat": 16.81625
      },
      "name": "Dong Ha",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 103.01667,
        "lat": 21.383329
      },
      "name": "Dien Bien Phu",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.220833,
        "lat": 16.06778
      },
      "name": "Turan",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 108.441933,
        "lat": 11.94646
      },
      "name": "Da Lat",
      "country": "VN"
    },
    {
      "coord": {
        "lon": 106.466667,
        "lat": 10.96667
      },
}