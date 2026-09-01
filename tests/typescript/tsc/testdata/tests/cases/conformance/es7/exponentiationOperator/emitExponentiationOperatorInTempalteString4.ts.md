__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 9,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 22,
            "end": 24
          },
          "definite": false,
          "start": 17,
          "end": 24
        }
      ],
      "declare": false,
      "start": 13,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 31
        }
      ],
      "declare": false,
      "start": 26,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 55,
            "end": 58
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 67,
            "end": 75
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 67
              },
              "prefix": true,
              "start": 64,
              "end": 67
            },
            "start": 58,
            "end": 67
          }
        ],
        "start": 55,
        "end": 75
      },
      "directive": null,
      "start": 55,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 77,
            "end": 80
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 96,
            "end": 104
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 84
                },
                "prefix": true,
                "start": 81,
                "end": 84
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 91
              },
              "start": 80,
              "end": 91
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 96
            },
            "start": 80,
            "end": 96
          }
        ],
        "start": 77,
        "end": 104
      },
      "directive": null,
      "start": 77,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 106,
            "end": 109
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 127,
            "end": 135
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 115
                  },
                  "start": 111,
                  "end": 115
                },
                "prefix": true,
                "start": 110,
                "end": 115
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 122
              },
              "start": 109,
              "end": 122
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 127
            },
            "start": 109,
            "end": 127
          }
        ],
        "start": 106,
        "end": 135
      },
      "directive": null,
      "start": 106,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 137,
            "end": 140
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 158,
            "end": 166
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "start": 142,
                  "end": 146
                },
                "prefix": true,
                "start": 141,
                "end": 146
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 153
              },
              "start": 140,
              "end": 153
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 158
            },
            "start": 140,
            "end": 158
          }
        ],
        "start": 137,
        "end": 166
      },
      "directive": null,
      "start": 137,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 168,
            "end": 171
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 191,
            "end": 199
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 175
              },
              "prefix": true,
              "start": 172,
              "end": 175
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 182
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 190
                },
                "start": 186,
                "end": 190
              },
              "start": 180,
              "end": 190
            },
            "start": 171,
            "end": 190
          }
        ],
        "start": 168,
        "end": 199
      },
      "directive": null,
      "start": 168,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 201,
            "end": 204
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 228,
            "end": 236
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 214
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 220
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 226
                },
                "start": 218,
                "end": 226
              },
              "start": 212,
              "end": 226
            },
            "prefix": true,
            "start": 204,
            "end": 227
          }
        ],
        "start": 201,
        "end": 236
      },
      "directive": null,
      "start": 201,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 278,
            "end": 281
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 290,
            "end": 306
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 315,
            "end": 317
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 283
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 290
              },
              "prefix": true,
              "start": 287,
              "end": 290
            },
            "start": 281,
            "end": 290
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 308
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 315
              },
              "prefix": true,
              "start": 312,
              "end": 315
            },
            "start": 306,
            "end": 315
          }
        ],
        "start": 278,
        "end": 317
      },
      "directive": null,
      "start": 278,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 319,
            "end": 322
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 338,
            "end": 354
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 370,
            "end": 372
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 326
                },
                "prefix": true,
                "start": 323,
                "end": 326
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 333
              },
              "start": 322,
              "end": 333
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 338
            },
            "start": 322,
            "end": 338
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 358
                },
                "prefix": true,
                "start": 355,
                "end": 358
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 365
              },
              "start": 354,
              "end": 365
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 370
            },
            "start": 354,
            "end": 370
          }
        ],
        "start": 319,
        "end": 372
      },
      "directive": null,
      "start": 319,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 374,
            "end": 377
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 395,
            "end": 411
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 431,
            "end": 433
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 383
                  },
                  "start": 379,
                  "end": 383
                },
                "prefix": true,
                "start": 378,
                "end": 383
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 390
              },
              "start": 377,
              "end": 390
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 395
            },
            "start": 377,
            "end": 395
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 413
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 423
                  },
                  "start": 419,
                  "end": 423
                },
                "prefix": true,
                "start": 418,
                "end": 423
              },
              "operator": "**",
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 431
                },
                "prefix": true,
                "start": 427,
                "end": 431
              },
              "start": 417,
              "end": 431
            },
            "start": 411,
            "end": 431
          }
        ],
        "start": 374,
        "end": 433
      },
      "directive": null,
      "start": 374,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 435,
            "end": 438
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 456,
            "end": 472
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 494,
            "end": 496
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 442
                  },
                  "start": 440,
                  "end": 444
                },
                "prefix": true,
                "start": 439,
                "end": 444
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 451
              },
              "start": 438,
              "end": 451
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "start": 438,
            "end": 456
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 482
                  },
                  "start": 480,
                  "end": 484
                },
                "prefix": true,
                "start": 479,
                "end": 484
              },
              "operator": "**",
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 494
                },
                "prefix": true,
                "start": 490,
                "end": 494
              },
              "start": 478,
              "end": 494
            },
            "start": 472,
            "end": 494
          }
        ],
        "start": 435,
        "end": 496
      },
      "directive": null,
      "start": 435,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 498,
            "end": 501
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 521,
            "end": 537
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 557,
            "end": 559
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 505
              },
              "prefix": true,
              "start": 502,
              "end": 505
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 512
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 520
                },
                "start": 516,
                "end": 520
              },
              "start": 510,
              "end": 520
            },
            "start": 501,
            "end": 520
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 541
              },
              "prefix": true,
              "start": 538,
              "end": 541
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 548
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 556
                },
                "start": 552,
                "end": 556
              },
              "start": 546,
              "end": 556
            },
            "start": 537,
            "end": 556
          }
        ],
        "start": 498,
        "end": 559
      },
      "directive": null,
      "start": 498,
      "end": 560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 561,
            "end": 564
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 587,
            "end": 603
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 626,
            "end": 628
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 574
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 580
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 586
                },
                "start": 578,
                "end": 586
              },
              "start": 572,
              "end": 586
            },
            "prefix": true,
            "start": 564,
            "end": 587
          },
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 613
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 619
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 625
                },
                "start": 617,
                "end": 625
              },
              "start": 611,
              "end": 625
            },
            "prefix": true,
            "start": 603,
            "end": 626
          }
        ],
        "start": 561,
        "end": 628
      },
      "directive": null,
      "start": 561,
      "end": 629
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 652,
            "end": 661
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 677,
            "end": 679
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 665
                },
                "prefix": true,
                "start": 662,
                "end": 665
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 672
              },
              "start": 661,
              "end": 672
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 677
            },
            "start": 661,
            "end": 677
          }
        ],
        "start": 652,
        "end": 679
      },
      "directive": null,
      "start": 652,
      "end": 680
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 681,
            "end": 690
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 708,
            "end": 710
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 696
                  },
                  "start": 692,
                  "end": 696
                },
                "prefix": true,
                "start": 691,
                "end": 696
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 703
              },
              "start": 690,
              "end": 703
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 708
            },
            "start": 690,
            "end": 708
          }
        ],
        "start": 681,
        "end": 710
      },
      "directive": null,
      "start": 681,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 712,
            "end": 721
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 739,
            "end": 741
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 725
                  },
                  "start": 723,
                  "end": 727
                },
                "prefix": true,
                "start": 722,
                "end": 727
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 734
              },
              "start": 721,
              "end": 734
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 739
            },
            "start": 721,
            "end": 739
          }
        ],
        "start": 712,
        "end": 741
      },
      "directive": null,
      "start": 712,
      "end": 742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 743,
            "end": 752
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 772,
            "end": 774
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 756
              },
              "prefix": true,
              "start": 753,
              "end": 756
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 763
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 771
                },
                "start": 767,
                "end": 771
              },
              "start": 761,
              "end": 771
            },
            "start": 752,
            "end": 771
          }
        ],
        "start": 743,
        "end": 774
      },
      "directive": null,
      "start": 743,
      "end": 775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 776,
            "end": 785
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 808,
            "end": 810
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 795
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 799,
                  "end": 801
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 807
                },
                "start": 799,
                "end": 807
              },
              "start": 793,
              "end": 807
            },
            "prefix": true,
            "start": 785,
            "end": 808
          }
        ],
        "start": 776,
        "end": 810
      },
      "directive": null,
      "start": 776,
      "end": 811
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 811
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 65,
    "end": 67
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 111,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 125,
    "end": 127
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 148,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 156,
    "end": 158
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 158,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 186,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 188,
    "end": 190
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 201,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 228,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 288,
    "end": 290
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 290,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 313,
    "end": 315
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 336,
    "end": 338
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 338,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 360,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 368,
    "end": 370
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 374,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 385,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 393,
    "end": 395
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 395,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 429,
    "end": 431
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 446,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 454,
    "end": 456
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 456,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 492,
    "end": 494
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 507,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 516,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 518,
    "end": 520
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 521,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 543,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 554,
    "end": 556
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 561,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 575,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 587,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 614,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 620,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 652,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 667,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 675,
    "end": 677
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 681,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 692,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 698,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 706,
    "end": 708
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 712,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 729,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 732,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 737,
    "end": 739
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 743,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 758,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 764,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 767,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 769,
    "end": 771
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 776,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 796,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 802,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  }
]
```
