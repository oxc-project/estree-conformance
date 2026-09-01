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
            "start": 66,
            "end": 74
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
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 66
            },
            "start": 58,
            "end": 66
          }
        ],
        "start": 55,
        "end": 74
      },
      "directive": null,
      "start": 55,
      "end": 75
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
            "start": 76,
            "end": 79
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 93,
            "end": 101
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
              "start": 79,
              "end": 81
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
                "start": 85,
                "end": 87
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "start": 79,
            "end": 93
          }
        ],
        "start": 76,
        "end": 101
      },
      "directive": null,
      "start": 76,
      "end": 102
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
            "start": 103,
            "end": 106
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 119,
            "end": 127
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
              "start": 106,
              "end": 108
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 113
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "start": 106,
            "end": 119
          }
        ],
        "start": 103,
        "end": 127
      },
      "directive": null,
      "start": 103,
      "end": 128
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
            "start": 129,
            "end": 132
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 145,
            "end": 153
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 134
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 140
              },
              "start": 132,
              "end": 140
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 145
            },
            "start": 132,
            "end": 145
          }
        ],
        "start": 129,
        "end": 153
      },
      "directive": null,
      "start": 129,
      "end": 154
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
            "start": 155,
            "end": 158
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 177,
            "end": 185
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 160
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 165
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "start": 163,
                "end": 171
              },
              "start": 158,
              "end": 171
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 176
            },
            "start": 158,
            "end": 176
          }
        ],
        "start": 155,
        "end": 185
      },
      "directive": null,
      "start": 155,
      "end": 186
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
            "start": 187,
            "end": 190
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 214,
            "end": 222
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
                "start": 198,
                "end": 200
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
                  "start": 204,
                  "end": 206
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 212
                },
                "start": 204,
                "end": 212
              },
              "start": 198,
              "end": 212
            },
            "prefix": true,
            "start": 190,
            "end": 213
          }
        ],
        "start": 187,
        "end": 222
      },
      "directive": null,
      "start": 187,
      "end": 223
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
            "start": 224,
            "end": 227
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 255,
            "end": 263
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 227,
              "end": 228
            },
            "operator": "+",
            "right": {
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
                  "start": 239,
                  "end": 241
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
                    "start": 245,
                    "end": 247
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 253
                  },
                  "start": 245,
                  "end": 253
                },
                "start": 239,
                "end": 253
              },
              "prefix": true,
              "start": 231,
              "end": 254
            },
            "start": 227,
            "end": 254
          }
        ],
        "start": 224,
        "end": 263
      },
      "directive": null,
      "start": 224,
      "end": 264
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
            "start": 266,
            "end": 269
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 277,
            "end": 280
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 288,
            "end": 296
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
              "start": 269,
              "end": 271
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 277
            },
            "start": 269,
            "end": 277
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 282
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 288
            },
            "start": 280,
            "end": 288
          }
        ],
        "start": 266,
        "end": 296
      },
      "directive": null,
      "start": 266,
      "end": 297
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
            "start": 298,
            "end": 301
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 315,
            "end": 318
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 332,
            "end": 340
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
              "start": 301,
              "end": 303
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
                "start": 307,
                "end": 309
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 315
              },
              "start": 307,
              "end": 315
            },
            "start": 301,
            "end": 315
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 320
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
                "start": 324,
                "end": 326
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 332
              },
              "start": 324,
              "end": 332
            },
            "start": 318,
            "end": 332
          }
        ],
        "start": 298,
        "end": 340
      },
      "directive": null,
      "start": 298,
      "end": 341
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
            "start": 342,
            "end": 345
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 358,
            "end": 361
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 374,
            "end": 382
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
              "start": 345,
              "end": 347
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 352
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 358
              },
              "start": 350,
              "end": 358
            },
            "start": 345,
            "end": 358
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 363
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 368
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              },
              "start": 366,
              "end": 374
            },
            "start": 361,
            "end": 374
          }
        ],
        "start": 342,
        "end": 382
      },
      "directive": null,
      "start": 342,
      "end": 383
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
            "start": 384,
            "end": 387
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 400,
            "end": 403
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 416,
            "end": 424
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 389
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 395
              },
              "start": 387,
              "end": 395
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 400
            },
            "start": 387,
            "end": 400
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 405
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 411
              },
              "start": 403,
              "end": 411
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 416
            },
            "start": 403,
            "end": 416
          }
        ],
        "start": 384,
        "end": 424
      },
      "directive": null,
      "start": 384,
      "end": 425
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
            "start": 426,
            "end": 429
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 447,
            "end": 450
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 468,
            "end": 476
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 431
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 436
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 442
                },
                "start": 434,
                "end": 442
              },
              "start": 429,
              "end": 442
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 447
            },
            "start": 429,
            "end": 447
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 452
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 455,
                  "end": 457
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 463
                },
                "start": 455,
                "end": 463
              },
              "start": 450,
              "end": 463
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 468
            },
            "start": 450,
            "end": 468
          }
        ],
        "start": 426,
        "end": 476
      },
      "directive": null,
      "start": 426,
      "end": 477
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
            "start": 478,
            "end": 481
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 505,
            "end": 508
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 532,
            "end": 540
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
                "start": 489,
                "end": 491
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
                  "start": 495,
                  "end": 497
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 503
                },
                "start": 495,
                "end": 503
              },
              "start": 489,
              "end": 503
            },
            "prefix": true,
            "start": 481,
            "end": 504
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
                "start": 516,
                "end": 518
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
                  "start": 522,
                  "end": 524
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 530
                },
                "start": 522,
                "end": 530
              },
              "start": 516,
              "end": 530
            },
            "prefix": true,
            "start": 508,
            "end": 531
          }
        ],
        "start": 478,
        "end": 540
      },
      "directive": null,
      "start": 478,
      "end": 541
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
            "start": 543,
            "end": 546
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 554,
            "end": 570
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true,
            "start": 578,
            "end": 583
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
              "start": 546,
              "end": 548
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 554
            },
            "start": 546,
            "end": 554
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 572
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 578
            },
            "start": 570,
            "end": 578
          }
        ],
        "start": 543,
        "end": 583
      },
      "directive": null,
      "start": 543,
      "end": 584
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
            "start": 585,
            "end": 588
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 602,
            "end": 618
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true,
            "start": 632,
            "end": 637
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
              "start": 588,
              "end": 590
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
                "start": 594,
                "end": 596
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 602
              },
              "start": 594,
              "end": 602
            },
            "start": 588,
            "end": 602
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 620
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
                "start": 624,
                "end": 626
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 632
              },
              "start": 624,
              "end": 632
            },
            "start": 618,
            "end": 632
          }
        ],
        "start": 585,
        "end": 637
      },
      "directive": null,
      "start": 585,
      "end": 638
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
            "start": 639,
            "end": 642
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 655,
            "end": 671
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true,
            "start": 684,
            "end": 689
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
              "start": 642,
              "end": 644
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 649
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 655
              },
              "start": 647,
              "end": 655
            },
            "start": 642,
            "end": 655
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 673
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 678
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 684
              },
              "start": 676,
              "end": 684
            },
            "start": 671,
            "end": 684
          }
        ],
        "start": 639,
        "end": 689
      },
      "directive": null,
      "start": 639,
      "end": 690
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
            "start": 691,
            "end": 694
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 707,
            "end": 723
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true,
            "start": 736,
            "end": 741
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 696
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 702
              },
              "start": 694,
              "end": 702
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 707
            },
            "start": 694,
            "end": 707
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 725
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 731
              },
              "start": 723,
              "end": 731
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 736
            },
            "start": 723,
            "end": 736
          }
        ],
        "start": 691,
        "end": 741
      },
      "directive": null,
      "start": 691,
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
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 743,
            "end": 746
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 764,
            "end": 780
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true,
            "start": 798,
            "end": 803
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 748
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 751,
                  "end": 753
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 759
                },
                "start": 751,
                "end": 759
              },
              "start": 746,
              "end": 759
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 764
            },
            "start": 746,
            "end": 764
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 782
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 787
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 793
                },
                "start": 785,
                "end": 793
              },
              "start": 780,
              "end": 793
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 798
            },
            "start": 780,
            "end": 798
          }
        ],
        "start": 743,
        "end": 803
      },
      "directive": null,
      "start": 743,
      "end": 804
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
            "start": 805,
            "end": 808
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 832,
            "end": 848
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " !!",
              "cooked": " !!"
            },
            "tail": true,
            "start": 871,
            "end": 876
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
                "start": 816,
                "end": 818
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
                  "start": 822,
                  "end": 824
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 828,
                  "end": 830
                },
                "start": 822,
                "end": 830
              },
              "start": 816,
              "end": 830
            },
            "prefix": true,
            "start": 808,
            "end": 831
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
                "start": 856,
                "end": 858
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
                  "start": 862,
                  "end": 864
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 868,
                  "end": 870
                },
                "start": 862,
                "end": 870
              },
              "start": 856,
              "end": 870
            },
            "prefix": true,
            "start": 848,
            "end": 871
          }
        ],
        "start": 805,
        "end": 876
      },
      "directive": null,
      "start": 805,
      "end": 877
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 877
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
    "type": "Identifier",
    "value": "t2",
    "start": 64,
    "end": 66
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 82,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 91,
    "end": 93
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 117,
    "end": 119
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 119,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 135,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 143,
    "end": 145
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 166,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 174,
    "end": 176
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 187,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 224,
    "end": 227
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 255,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 272,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 275,
    "end": 277
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 283,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 286,
    "end": 288
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 288,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 304,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 310,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 313,
    "end": 315
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 327,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 330,
    "end": 332
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 353,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 356,
    "end": 358
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 369,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 372,
    "end": 374
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 374,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 398,
    "end": 400
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 414,
    "end": 416
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 416,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 426,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 437,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 445,
    "end": 447
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 458,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 466,
    "end": 468
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 468,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 478,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 492,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 498,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 505,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 519,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 525,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "t1",
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
    "type": "Identifier",
    "value": "t2",
    "start": 552,
    "end": 554
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 554,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 573,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 576,
    "end": 578
  },
  {
    "type": "Template",
    "value": "} !!`",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 585,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 591,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 597,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 600,
    "end": 602
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 602,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 621,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 630,
    "end": 632
  },
  {
    "type": "Template",
    "value": "} !!`",
    "start": 632,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 650,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 653,
    "end": 655
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 655,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 679,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 682,
    "end": 684
  },
  {
    "type": "Template",
    "value": "} !!`",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 691,
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
    "value": "**",
    "start": 697,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 705,
    "end": 707
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 707,
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
    "value": "**",
    "start": 726,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 734,
    "end": 736
  },
  {
    "type": "Template",
    "value": "} !!`",
    "start": 736,
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
    "value": "`${",
    "start": 743,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 754,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 757,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 762,
    "end": 764
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 764,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 788,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 796,
    "end": 798
  },
  {
    "type": "Template",
    "value": "} !!`",
    "start": 798,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 805,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 819,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 825,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 832,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 848,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 856,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 859,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 865,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Template",
    "value": "} !!`",
    "start": 871,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  }
]
```
