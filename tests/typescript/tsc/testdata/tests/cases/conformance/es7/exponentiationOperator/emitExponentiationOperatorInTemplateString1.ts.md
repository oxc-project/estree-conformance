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
            "start": 74,
            "end": 77
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 85,
            "end": 87
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
              "start": 77,
              "end": 79
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 85
            },
            "start": 77,
            "end": 85
          }
        ],
        "start": 74,
        "end": 87
      },
      "directive": null,
      "start": 74,
      "end": 88
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
            "start": 89,
            "end": 92
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 106,
            "end": 108
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
              "start": 92,
              "end": 94
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
                "start": 98,
                "end": 100
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "start": 92,
            "end": 106
          }
        ],
        "start": 89,
        "end": 108
      },
      "directive": null,
      "start": 89,
      "end": 109
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
            "start": 110,
            "end": 113
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 126,
            "end": 128
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
              "start": 113,
              "end": 115
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
                "start": 118,
                "end": 120
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 126
              },
              "start": 118,
              "end": 126
            },
            "start": 113,
            "end": 126
          }
        ],
        "start": 110,
        "end": 128
      },
      "directive": null,
      "start": 110,
      "end": 129
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
            "start": 130,
            "end": 133
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 146,
            "end": 148
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
                "start": 133,
                "end": 135
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 141
              },
              "start": 133,
              "end": 141
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 146
            },
            "start": 133,
            "end": 146
          }
        ],
        "start": 130,
        "end": 148
      },
      "directive": null,
      "start": 130,
      "end": 149
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
            "start": 150,
            "end": 153
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 172,
            "end": 174
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
                "start": 153,
                "end": 155
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
                  "start": 158,
                  "end": 160
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 166
                },
                "start": 158,
                "end": 166
              },
              "start": 153,
              "end": 166
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 171
            },
            "start": 153,
            "end": 171
          }
        ],
        "start": 150,
        "end": 174
      },
      "directive": null,
      "start": 150,
      "end": 175
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
            "start": 176,
            "end": 179
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 203,
            "end": 205
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
                "start": 187,
                "end": 189
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
                  "start": 193,
                  "end": 195
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 201
                },
                "start": 193,
                "end": 201
              },
              "start": 187,
              "end": 201
            },
            "prefix": true,
            "start": 179,
            "end": 202
          }
        ],
        "start": 176,
        "end": 205
      },
      "directive": null,
      "start": 176,
      "end": 206
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
            "start": 207,
            "end": 210
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 238,
            "end": 240
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 210,
              "end": 211
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
                  "start": 222,
                  "end": 224
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
                    "start": 228,
                    "end": 230
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 222,
                "end": 236
              },
              "prefix": true,
              "start": 214,
              "end": 237
            },
            "start": 210,
            "end": 237
          }
        ],
        "start": 207,
        "end": 240
      },
      "directive": null,
      "start": 207,
      "end": 241
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
            "start": 243,
            "end": 246
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 254,
            "end": 257
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 265,
            "end": 267
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
              "start": 246,
              "end": 248
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 254
            },
            "start": 246,
            "end": 254
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 259
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 265
            },
            "start": 257,
            "end": 265
          }
        ],
        "start": 243,
        "end": 267
      },
      "directive": null,
      "start": 243,
      "end": 268
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
            "start": 269,
            "end": 272
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 286,
            "end": 289
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 303,
            "end": 305
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
              "start": 272,
              "end": 274
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
                "start": 278,
                "end": 280
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "start": 272,
            "end": 286
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 291
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
                "start": 295,
                "end": 297
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 303
              },
              "start": 295,
              "end": 303
            },
            "start": 289,
            "end": 303
          }
        ],
        "start": 269,
        "end": 305
      },
      "directive": null,
      "start": 269,
      "end": 306
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
            "start": 307,
            "end": 310
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 323,
            "end": 326
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 339,
            "end": 341
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
              "start": 310,
              "end": 312
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
                "start": 315,
                "end": 317
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 310,
            "end": 323
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 328
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
                "start": 331,
                "end": 333
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 339
              },
              "start": 331,
              "end": 339
            },
            "start": 326,
            "end": 339
          }
        ],
        "start": 307,
        "end": 341
      },
      "directive": null,
      "start": 307,
      "end": 342
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
            "start": 343,
            "end": 346
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 359,
            "end": 362
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 375,
            "end": 377
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
                "start": 346,
                "end": 348
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 354
              },
              "start": 346,
              "end": 354
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 359
            },
            "start": 346,
            "end": 359
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
                "start": 362,
                "end": 364
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 370
              },
              "start": 362,
              "end": 370
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 375
            },
            "start": 362,
            "end": 375
          }
        ],
        "start": 343,
        "end": 377
      },
      "directive": null,
      "start": 343,
      "end": 378
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
            "start": 379,
            "end": 382
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
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 421,
            "end": 423
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
                "start": 382,
                "end": 384
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
              "start": 382,
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
            "start": 382,
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
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 410
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 416
                },
                "start": 408,
                "end": 416
              },
              "start": 403,
              "end": 416
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 421
            },
            "start": 403,
            "end": 421
          }
        ],
        "start": 379,
        "end": 423
      },
      "directive": null,
      "start": 379,
      "end": 424
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
            "start": 425,
            "end": 428
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 451,
            "end": 454
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 477,
            "end": 479
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
                "start": 436,
                "end": 438
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
                  "start": 442,
                  "end": 444
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 450
                },
                "start": 442,
                "end": 450
              },
              "start": 436,
              "end": 450
            },
            "prefix": true,
            "start": 428,
            "end": 451
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
                "start": 462,
                "end": 464
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
                  "start": 468,
                  "end": 470
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 476
                },
                "start": 468,
                "end": 476
              },
              "start": 462,
              "end": 476
            },
            "prefix": true,
            "start": 454,
            "end": 477
          }
        ],
        "start": 425,
        "end": 479
      },
      "directive": null,
      "start": 425,
      "end": 480
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
            "start": 482,
            "end": 485
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 493,
            "end": 509
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 517,
            "end": 519
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
              "start": 485,
              "end": 487
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 493
            },
            "start": 485,
            "end": 493
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 511
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 517
            },
            "start": 509,
            "end": 517
          }
        ],
        "start": 482,
        "end": 519
      },
      "directive": null,
      "start": 482,
      "end": 520
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
            "start": 521,
            "end": 524
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 538,
            "end": 554
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 568,
            "end": 570
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
              "start": 524,
              "end": 526
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
                "start": 530,
                "end": 532
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 538
              },
              "start": 530,
              "end": 538
            },
            "start": 524,
            "end": 538
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 556
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
                "start": 560,
                "end": 562
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 568
              },
              "start": 560,
              "end": 568
            },
            "start": 554,
            "end": 568
          }
        ],
        "start": 521,
        "end": 570
      },
      "directive": null,
      "start": 521,
      "end": 571
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
            "start": 572,
            "end": 575
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 588,
            "end": 604
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 617,
            "end": 619
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
              "start": 575,
              "end": 577
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
                "start": 580,
                "end": 582
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 588
              },
              "start": 580,
              "end": 588
            },
            "start": 575,
            "end": 588
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 606
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
                "start": 609,
                "end": 611
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 617
              },
              "start": 609,
              "end": 617
            },
            "start": 604,
            "end": 617
          }
        ],
        "start": 572,
        "end": 619
      },
      "directive": null,
      "start": 572,
      "end": 620
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
            "start": 621,
            "end": 624
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 637,
            "end": 653
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 666,
            "end": 668
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
                "start": 624,
                "end": 626
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 632
              },
              "start": 624,
              "end": 632
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 637
            },
            "start": 624,
            "end": 637
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
                "start": 653,
                "end": 655
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 661
              },
              "start": 653,
              "end": 661
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 666
            },
            "start": 653,
            "end": 666
          }
        ],
        "start": 621,
        "end": 668
      },
      "directive": null,
      "start": 621,
      "end": 669
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
            "start": 670,
            "end": 673
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 691,
            "end": 707
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 725,
            "end": 727
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
                "start": 673,
                "end": 675
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
                  "start": 678,
                  "end": 680
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 686
                },
                "start": 678,
                "end": 686
              },
              "start": 673,
              "end": 686
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 691
            },
            "start": 673,
            "end": 691
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
                "start": 707,
                "end": 709
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
                  "start": 712,
                  "end": 714
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 720
                },
                "start": 712,
                "end": 720
              },
              "start": 707,
              "end": 720
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 725
            },
            "start": 707,
            "end": 725
          }
        ],
        "start": 670,
        "end": 727
      },
      "directive": null,
      "start": 670,
      "end": 728
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
            "start": 729,
            "end": 732
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 756,
            "end": 772
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 796,
            "end": 798
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
                "start": 740,
                "end": 742
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
                  "start": 746,
                  "end": 748
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 754
                },
                "start": 746,
                "end": 754
              },
              "start": 740,
              "end": 754
            },
            "prefix": true,
            "start": 732,
            "end": 755
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
                "start": 780,
                "end": 782
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
                  "start": 786,
                  "end": 788
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 794
                },
                "start": 786,
                "end": 794
              },
              "start": 780,
              "end": 794
            },
            "prefix": true,
            "start": 772,
            "end": 795
          }
        ],
        "start": 729,
        "end": 798
      },
      "directive": null,
      "start": 729,
      "end": 799
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 799
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
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 83,
    "end": 85
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 101,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 104,
    "end": 106
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 110,
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
    "value": "+",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 121,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 124,
    "end": 126
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 136,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 144,
    "end": 146
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 169,
    "end": 171
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 176,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 207,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 225,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 231,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 249,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 252,
    "end": 254
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 260,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 263,
    "end": 265
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 275,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 281,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 284,
    "end": 286
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 298,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 301,
    "end": 303
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 321,
    "end": 323
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 329,
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
    "value": "**",
    "start": 334,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 337,
    "end": 339
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 357,
    "end": 359
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 365,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 368,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 373,
    "end": 375
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "t2",
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
    "value": "+",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 411,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 419,
    "end": 421
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 425,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 439,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 445,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 451,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 488,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 491,
    "end": 493
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 493,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 512,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 515,
    "end": 517
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 527,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 533,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 536,
    "end": 538
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 538,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 557,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 563,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 566,
    "end": 568
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 583,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 586,
    "end": 588
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 588,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 612,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 615,
    "end": 617
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "t1",
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
    "value": "t2",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 635,
    "end": 637
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 637,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 656,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 664,
    "end": 666
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 681,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 689,
    "end": 691
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 691,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 715,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 723,
    "end": 725
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 729,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 743,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 749,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 756,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 772,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
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
    "value": "**",
    "start": 783,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 789,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  }
]
```
