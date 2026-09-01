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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 8,
              "end": 9
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 12,
                  "end": 15
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 18,
                  "end": 20
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 16,
                  "end": 17
                }
              ],
              "start": 12,
              "end": 20
            },
            "start": 8,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 30,
              "end": 31
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 34,
                  "end": 38
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 41,
                  "end": 43
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 39,
                  "end": 40
                }
              ],
              "start": 34,
              "end": 43
            },
            "start": 30,
            "end": 43
          },
          "definite": false,
          "start": 26,
          "end": 43
        }
      ],
      "declare": false,
      "start": 22,
      "end": 44
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 53,
              "end": 54
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 57,
                  "end": 60
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "4",
                    "cooked": "4"
                  },
                  "tail": true,
                  "start": 63,
                  "end": 66
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 61,
                  "end": 62
                }
              ],
              "start": 57,
              "end": 66
            },
            "start": 53,
            "end": 66
          },
          "definite": false,
          "start": 49,
          "end": 66
        }
      ],
      "declare": false,
      "start": 45,
      "end": 67
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 76,
              "end": 77
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 80,
                  "end": 84
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "4",
                    "cooked": "4"
                  },
                  "tail": true,
                  "start": 87,
                  "end": 90
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 85,
                  "end": 86
                }
              ],
              "start": 80,
              "end": 90
            },
            "start": 76,
            "end": 90
          },
          "definite": false,
          "start": 72,
          "end": 90
        }
      ],
      "declare": false,
      "start": 68,
      "end": 91
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 100,
                  "end": 103
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
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 104,
                  "end": 105
                }
              ],
              "start": 100,
              "end": 108
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 111,
              "end": 112
            },
            "start": 100,
            "end": 112
          },
          "definite": false,
          "start": 96,
          "end": 112
        }
      ],
      "declare": false,
      "start": 92,
      "end": 113
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 122,
                  "end": 126
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 129,
                  "end": 131
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 127,
                  "end": 128
                }
              ],
              "start": 122,
              "end": 131
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 134,
              "end": 135
            },
            "start": 122,
            "end": 135
          },
          "definite": false,
          "start": 118,
          "end": 135
        }
      ],
      "declare": false,
      "start": 114,
      "end": 136
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 145,
                  "end": 148
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "4",
                    "cooked": "4"
                  },
                  "tail": true,
                  "start": 151,
                  "end": 154
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 149,
                  "end": 150
                }
              ],
              "start": 145,
              "end": 154
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 157,
              "end": 158
            },
            "start": 145,
            "end": 158
          },
          "definite": false,
          "start": 141,
          "end": 158
        }
      ],
      "declare": false,
      "start": 137,
      "end": 159
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 168,
                  "end": 172
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "4",
                    "cooked": "4"
                  },
                  "tail": true,
                  "start": 175,
                  "end": 178
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 173,
                  "end": 174
                }
              ],
              "start": 168,
              "end": 178
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 181,
              "end": 182
            },
            "start": 168,
            "end": 182
          },
          "definite": false,
          "start": 164,
          "end": 182
        }
      ],
      "declare": false,
      "start": 160,
      "end": 183
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 192,
                "end": 193
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 196,
                    "end": 199
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 202,
                    "end": 204
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 200,
                    "end": 201
                  }
                ],
                "start": 196,
                "end": 204
              },
              "start": 192,
              "end": 204
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 207,
              "end": 208
            },
            "start": 192,
            "end": 208
          },
          "definite": false,
          "start": 188,
          "end": 208
        }
      ],
      "declare": false,
      "start": 184,
      "end": 209
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 215
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 218,
                "end": 219
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 222,
                    "end": 226
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 229,
                    "end": 231
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 227,
                    "end": 228
                  }
                ],
                "start": 222,
                "end": 231
              },
              "start": 218,
              "end": 231
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 234,
              "end": 235
            },
            "start": 218,
            "end": 235
          },
          "definite": false,
          "start": 214,
          "end": 235
        }
      ],
      "declare": false,
      "start": 210,
      "end": 236
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 245,
                "end": 246
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 249,
                    "end": 252
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "4",
                      "cooked": "4"
                    },
                    "tail": true,
                    "start": 255,
                    "end": 258
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 253,
                    "end": 254
                  }
                ],
                "start": 249,
                "end": 258
              },
              "start": 245,
              "end": 258
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 261,
              "end": 262
            },
            "start": 245,
            "end": 262
          },
          "definite": false,
          "start": 241,
          "end": 262
        }
      ],
      "declare": false,
      "start": 237,
      "end": 263
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 272,
                "end": 273
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 276,
                    "end": 280
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "4",
                      "cooked": "4"
                    },
                    "tail": true,
                    "start": 283,
                    "end": 286
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 281,
                    "end": 282
                  }
                ],
                "start": 276,
                "end": 286
              },
              "start": 272,
              "end": 286
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 289,
              "end": 290
            },
            "start": 272,
            "end": 290
          },
          "definite": false,
          "start": 268,
          "end": 290
        }
      ],
      "declare": false,
      "start": 264,
      "end": 291
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 299
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 302,
              "end": 303
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 306,
                  "end": 309
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 316,
                  "end": 318
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 310,
                    "end": 311
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 314,
                    "end": 315
                  },
                  "start": 310,
                  "end": 315
                }
              ],
              "start": 306,
              "end": 318
            },
            "start": 302,
            "end": 318
          },
          "definite": false,
          "start": 297,
          "end": 318
        }
      ],
      "declare": false,
      "start": 293,
      "end": 319
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 326
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 329,
              "end": 330
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 333,
                  "end": 337
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 344,
                  "end": 346
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 338,
                    "end": 339
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 342,
                    "end": 343
                  },
                  "start": 338,
                  "end": 343
                }
              ],
              "start": 333,
              "end": 346
            },
            "start": 329,
            "end": 346
          },
          "definite": false,
          "start": 324,
          "end": 346
        }
      ],
      "declare": false,
      "start": 320,
      "end": 347
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 354
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 357,
              "end": 358
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 361,
                  "end": 364
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 371,
                  "end": 374
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 365,
                    "end": 366
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 369,
                    "end": 370
                  },
                  "start": 365,
                  "end": 370
                }
              ],
              "start": 361,
              "end": 374
            },
            "start": 357,
            "end": 374
          },
          "definite": false,
          "start": 352,
          "end": 374
        }
      ],
      "declare": false,
      "start": 348,
      "end": 375
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 382
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 385,
              "end": 386
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 389,
                  "end": 393
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 400,
                  "end": 403
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 394,
                    "end": 395
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 398,
                    "end": 399
                  },
                  "start": 394,
                  "end": 399
                }
              ],
              "start": 389,
              "end": 403
            },
            "start": 385,
            "end": 403
          },
          "definite": false,
          "start": 380,
          "end": 403
        }
      ],
      "declare": false,
      "start": 376,
      "end": 404
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 411
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 414,
                  "end": 417
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 424,
                  "end": 426
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 418,
                    "end": 419
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 422,
                    "end": 423
                  },
                  "start": 418,
                  "end": 423
                }
              ],
              "start": 414,
              "end": 426
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 429,
              "end": 430
            },
            "start": 414,
            "end": 430
          },
          "definite": false,
          "start": 409,
          "end": 430
        }
      ],
      "declare": false,
      "start": 405,
      "end": 431
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 438
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 441,
                  "end": 445
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 452,
                  "end": 454
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 446,
                    "end": 447
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 450,
                    "end": 451
                  },
                  "start": 446,
                  "end": 451
                }
              ],
              "start": 441,
              "end": 454
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 457,
              "end": 458
            },
            "start": 441,
            "end": 458
          },
          "definite": false,
          "start": 436,
          "end": 458
        }
      ],
      "declare": false,
      "start": 432,
      "end": 459
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 466
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 469,
                  "end": 472
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 479,
                  "end": 482
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 473,
                    "end": 474
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 477,
                    "end": 478
                  },
                  "start": 473,
                  "end": 478
                }
              ],
              "start": 469,
              "end": 482
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 485,
              "end": 486
            },
            "start": 469,
            "end": 486
          },
          "definite": false,
          "start": 464,
          "end": 486
        }
      ],
      "declare": false,
      "start": 460,
      "end": 487
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
            "name": "h2",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 494
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 497,
                  "end": 501
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 508,
                  "end": 511
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 502,
                    "end": 503
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 506,
                    "end": 507
                  },
                  "start": 502,
                  "end": 507
                }
              ],
              "start": 497,
              "end": 511
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 514,
              "end": 515
            },
            "start": 497,
            "end": 515
          },
          "definite": false,
          "start": 492,
          "end": 515
        }
      ],
      "declare": false,
      "start": 488,
      "end": 516
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 523
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 526,
                "end": 527
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 530,
                    "end": 533
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 540,
                    "end": 542
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 534,
                      "end": 535
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 538,
                      "end": 539
                    },
                    "start": 534,
                    "end": 539
                  }
                ],
                "start": 530,
                "end": 542
              },
              "start": 526,
              "end": 542
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 545,
              "end": 546
            },
            "start": 526,
            "end": 546
          },
          "definite": false,
          "start": 521,
          "end": 546
        }
      ],
      "declare": false,
      "start": 517,
      "end": 547
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
            "name": "j2",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 554
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 557,
                "end": 558
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 561,
                    "end": 565
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 572,
                    "end": 574
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 566,
                      "end": 567
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 570,
                      "end": 571
                    },
                    "start": 566,
                    "end": 571
                  }
                ],
                "start": 561,
                "end": 574
              },
              "start": 557,
              "end": 574
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 577,
              "end": 578
            },
            "start": 557,
            "end": 578
          },
          "definite": false,
          "start": 552,
          "end": 578
        }
      ],
      "declare": false,
      "start": 548,
      "end": 579
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 586
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 589,
                "end": 590
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 593,
                    "end": 596
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "5",
                      "cooked": "5"
                    },
                    "tail": true,
                    "start": 603,
                    "end": 606
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 597,
                      "end": 598
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 601,
                      "end": 602
                    },
                    "start": 597,
                    "end": 602
                  }
                ],
                "start": 593,
                "end": 606
              },
              "start": 589,
              "end": 606
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 609,
              "end": 610
            },
            "start": 589,
            "end": 610
          },
          "definite": false,
          "start": 584,
          "end": 610
        }
      ],
      "declare": false,
      "start": 580,
      "end": 611
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
            "name": "l2",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 618
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 621,
                "end": 622
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 625,
                    "end": 629
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "5",
                      "cooked": "5"
                    },
                    "tail": true,
                    "start": 636,
                    "end": 639
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 630,
                      "end": 631
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 634,
                      "end": 635
                    },
                    "start": 630,
                    "end": 635
                  }
                ],
                "start": 625,
                "end": 639
              },
              "start": 621,
              "end": 639
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 642,
              "end": 643
            },
            "start": 621,
            "end": 643
          },
          "definite": false,
          "start": 616,
          "end": 643
        }
      ],
      "declare": false,
      "start": 612,
      "end": 644
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 652
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 655,
              "end": 656
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 659,
                  "end": 662
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 669,
                  "end": 671
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 663,
                    "end": 664
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 667,
                    "end": 668
                  },
                  "start": 663,
                  "end": 668
                }
              ],
              "start": 659,
              "end": 671
            },
            "start": 655,
            "end": 671
          },
          "definite": false,
          "start": 650,
          "end": 671
        }
      ],
      "declare": false,
      "start": 646,
      "end": 672
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 679
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 682,
              "end": 683
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 686,
                  "end": 690
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 697,
                  "end": 699
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 691,
                    "end": 692
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 695,
                    "end": 696
                  },
                  "start": 691,
                  "end": 696
                }
              ],
              "start": 686,
              "end": 699
            },
            "start": 682,
            "end": 699
          },
          "definite": false,
          "start": 677,
          "end": 699
        }
      ],
      "declare": false,
      "start": 673,
      "end": 700
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 707
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 710,
              "end": 711
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 714,
                  "end": 717
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 724,
                  "end": 727
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 718,
                    "end": 719
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 722,
                    "end": 723
                  },
                  "start": 718,
                  "end": 723
                }
              ],
              "start": 714,
              "end": 727
            },
            "start": 710,
            "end": 727
          },
          "definite": false,
          "start": 705,
          "end": 727
        }
      ],
      "declare": false,
      "start": 701,
      "end": 728
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 735
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 738,
              "end": 739
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 742,
                  "end": 746
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 753,
                  "end": 756
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 747,
                    "end": 748
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 751,
                    "end": 752
                  },
                  "start": 747,
                  "end": 752
                }
              ],
              "start": 742,
              "end": 756
            },
            "start": 738,
            "end": 756
          },
          "definite": false,
          "start": 733,
          "end": 756
        }
      ],
      "declare": false,
      "start": 729,
      "end": 757
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 764
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 767,
                  "end": 770
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 777,
                  "end": 779
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 771,
                    "end": 772
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 775,
                    "end": 776
                  },
                  "start": 771,
                  "end": 776
                }
              ],
              "start": 767,
              "end": 779
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 782,
              "end": 783
            },
            "start": 767,
            "end": 783
          },
          "definite": false,
          "start": 762,
          "end": 783
        }
      ],
      "declare": false,
      "start": 758,
      "end": 784
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 791
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 794,
                  "end": 798
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 805,
                  "end": 807
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 799,
                    "end": 800
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 803,
                    "end": 804
                  },
                  "start": 799,
                  "end": 804
                }
              ],
              "start": 794,
              "end": 807
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 810,
              "end": 811
            },
            "start": 794,
            "end": 811
          },
          "definite": false,
          "start": 789,
          "end": 811
        }
      ],
      "declare": false,
      "start": 785,
      "end": 812
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 819
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 822,
                  "end": 825
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 832,
                  "end": 835
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 826,
                    "end": 827
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 830,
                    "end": 831
                  },
                  "start": 826,
                  "end": 831
                }
              ],
              "start": 822,
              "end": 835
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 838,
              "end": 839
            },
            "start": 822,
            "end": 839
          },
          "definite": false,
          "start": 817,
          "end": 839
        }
      ],
      "declare": false,
      "start": 813,
      "end": 840
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
            "name": "h3",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 847
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 850,
                  "end": 854
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 861,
                  "end": 864
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 855,
                    "end": 856
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 859,
                    "end": 860
                  },
                  "start": 855,
                  "end": 860
                }
              ],
              "start": 850,
              "end": 864
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 867,
              "end": 868
            },
            "start": 850,
            "end": 868
          },
          "definite": false,
          "start": 845,
          "end": 868
        }
      ],
      "declare": false,
      "start": 841,
      "end": 869
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
            "name": "i3",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 876
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 879,
                "end": 880
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 883,
                    "end": 886
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 893,
                    "end": 895
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 887,
                      "end": 888
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 891,
                      "end": 892
                    },
                    "start": 887,
                    "end": 892
                  }
                ],
                "start": 883,
                "end": 895
              },
              "start": 879,
              "end": 895
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 898,
              "end": 899
            },
            "start": 879,
            "end": 899
          },
          "definite": false,
          "start": 874,
          "end": 899
        }
      ],
      "declare": false,
      "start": 870,
      "end": 900
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
            "name": "j3",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 907
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 910,
                "end": 911
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 914,
                    "end": 918
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 925,
                    "end": 927
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 919,
                      "end": 920
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 923,
                      "end": 924
                    },
                    "start": 919,
                    "end": 924
                  }
                ],
                "start": 914,
                "end": 927
              },
              "start": 910,
              "end": 927
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 930,
              "end": 931
            },
            "start": 910,
            "end": 931
          },
          "definite": false,
          "start": 905,
          "end": 931
        }
      ],
      "declare": false,
      "start": 901,
      "end": 932
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 937,
            "end": 939
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 942,
                "end": 943
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 946,
                    "end": 949
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "5",
                      "cooked": "5"
                    },
                    "tail": true,
                    "start": 956,
                    "end": 959
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 950,
                      "end": 951
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 954,
                      "end": 955
                    },
                    "start": 950,
                    "end": 955
                  }
                ],
                "start": 946,
                "end": 959
              },
              "start": 942,
              "end": 959
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 962,
              "end": 963
            },
            "start": 942,
            "end": 963
          },
          "definite": false,
          "start": 937,
          "end": 963
        }
      ],
      "declare": false,
      "start": 933,
      "end": 964
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
            "name": "l3",
            "optional": false,
            "typeAnnotation": null,
            "start": 969,
            "end": 971
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 974,
                "end": 975
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 978,
                    "end": 982
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "5",
                      "cooked": "5"
                    },
                    "tail": true,
                    "start": 989,
                    "end": 992
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 983,
                      "end": 984
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 987,
                      "end": 988
                    },
                    "start": 983,
                    "end": 988
                  }
                ],
                "start": 978,
                "end": 992
              },
              "start": 974,
              "end": 992
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 995,
              "end": 996
            },
            "start": 974,
            "end": 996
          },
          "definite": false,
          "start": 969,
          "end": 996
        }
      ],
      "declare": false,
      "start": 965,
      "end": 997
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1005
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1008,
              "end": 1009
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1012,
                  "end": 1015
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1022,
                  "end": 1024
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1016,
                    "end": 1017
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1020,
                    "end": 1021
                  },
                  "start": 1016,
                  "end": 1021
                }
              ],
              "start": 1012,
              "end": 1024
            },
            "start": 1008,
            "end": 1024
          },
          "definite": false,
          "start": 1003,
          "end": 1024
        }
      ],
      "declare": false,
      "start": 999,
      "end": 1025
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1032
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1035,
              "end": 1036
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 1039,
                  "end": 1043
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1050,
                  "end": 1052
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1044,
                    "end": 1045
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1048,
                    "end": 1049
                  },
                  "start": 1044,
                  "end": 1049
                }
              ],
              "start": 1039,
              "end": 1052
            },
            "start": 1035,
            "end": 1052
          },
          "definite": false,
          "start": 1030,
          "end": 1052
        }
      ],
      "declare": false,
      "start": 1026,
      "end": 1053
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1058,
            "end": 1060
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1063,
              "end": 1064
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1067,
                  "end": 1070
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 1077,
                  "end": 1080
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1071,
                    "end": 1072
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1075,
                    "end": 1076
                  },
                  "start": 1071,
                  "end": 1076
                }
              ],
              "start": 1067,
              "end": 1080
            },
            "start": 1063,
            "end": 1080
          },
          "definite": false,
          "start": 1058,
          "end": 1080
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1081
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1088
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1091,
              "end": 1092
            },
            "operator": "+",
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 1095,
                  "end": 1099
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 1106,
                  "end": 1109
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1100,
                    "end": 1101
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1104,
                    "end": 1105
                  },
                  "start": 1100,
                  "end": 1105
                }
              ],
              "start": 1095,
              "end": 1109
            },
            "start": 1091,
            "end": 1109
          },
          "definite": false,
          "start": 1086,
          "end": 1109
        }
      ],
      "declare": false,
      "start": 1082,
      "end": 1110
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1115,
            "end": 1117
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1120,
                  "end": 1123
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1130,
                  "end": 1132
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1124,
                    "end": 1125
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1128,
                    "end": 1129
                  },
                  "start": 1124,
                  "end": 1129
                }
              ],
              "start": 1120,
              "end": 1132
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1135,
              "end": 1136
            },
            "start": 1120,
            "end": 1136
          },
          "definite": false,
          "start": 1115,
          "end": 1136
        }
      ],
      "declare": false,
      "start": 1111,
      "end": 1137
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1142,
            "end": 1144
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 1147,
                  "end": 1151
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1158,
                  "end": 1160
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1152,
                    "end": 1153
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1156,
                    "end": 1157
                  },
                  "start": 1152,
                  "end": 1157
                }
              ],
              "start": 1147,
              "end": 1160
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1163,
              "end": 1164
            },
            "start": 1147,
            "end": 1164
          },
          "definite": false,
          "start": 1142,
          "end": 1164
        }
      ],
      "declare": false,
      "start": 1138,
      "end": 1165
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
            "name": "g4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1170,
            "end": 1172
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1175,
                  "end": 1178
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 1185,
                  "end": 1188
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1179,
                    "end": 1180
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1183,
                    "end": 1184
                  },
                  "start": 1179,
                  "end": 1184
                }
              ],
              "start": 1175,
              "end": 1188
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1191,
              "end": 1192
            },
            "start": 1175,
            "end": 1192
          },
          "definite": false,
          "start": 1170,
          "end": 1192
        }
      ],
      "declare": false,
      "start": 1166,
      "end": 1193
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
            "name": "h4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1198,
            "end": 1200
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": false,
                  "start": 1203,
                  "end": 1207
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "5",
                    "cooked": "5"
                  },
                  "tail": true,
                  "start": 1214,
                  "end": 1217
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1208,
                    "end": 1209
                  },
                  "operator": "&",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1212,
                    "end": 1213
                  },
                  "start": 1208,
                  "end": 1213
                }
              ],
              "start": 1203,
              "end": 1217
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1220,
              "end": 1221
            },
            "start": 1203,
            "end": 1221
          },
          "definite": false,
          "start": 1198,
          "end": 1221
        }
      ],
      "declare": false,
      "start": 1194,
      "end": 1222
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
            "name": "i4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1227,
            "end": 1229
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1232,
                "end": 1233
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1236,
                    "end": 1239
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1246,
                    "end": 1248
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1240,
                      "end": 1241
                    },
                    "operator": "&",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1244,
                      "end": 1245
                    },
                    "start": 1240,
                    "end": 1245
                  }
                ],
                "start": 1236,
                "end": 1248
              },
              "start": 1232,
              "end": 1248
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1251,
              "end": 1252
            },
            "start": 1232,
            "end": 1252
          },
          "definite": false,
          "start": 1227,
          "end": 1252
        }
      ],
      "declare": false,
      "start": 1223,
      "end": 1253
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
            "name": "j4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1258,
            "end": 1260
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1263,
                "end": 1264
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 1267,
                    "end": 1271
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1278,
                    "end": 1280
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1272,
                      "end": 1273
                    },
                    "operator": "&",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1276,
                      "end": 1277
                    },
                    "start": 1272,
                    "end": 1277
                  }
                ],
                "start": 1267,
                "end": 1280
              },
              "start": 1263,
              "end": 1280
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1283,
              "end": 1284
            },
            "start": 1263,
            "end": 1284
          },
          "definite": false,
          "start": 1258,
          "end": 1284
        }
      ],
      "declare": false,
      "start": 1254,
      "end": 1285
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1290,
            "end": 1292
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1295,
                "end": 1296
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1299,
                    "end": 1302
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "5",
                      "cooked": "5"
                    },
                    "tail": true,
                    "start": 1309,
                    "end": 1312
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1303,
                      "end": 1304
                    },
                    "operator": "&",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1307,
                      "end": 1308
                    },
                    "start": 1303,
                    "end": 1308
                  }
                ],
                "start": 1299,
                "end": 1312
              },
              "start": 1295,
              "end": 1312
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1315,
              "end": 1316
            },
            "start": 1295,
            "end": 1316
          },
          "definite": false,
          "start": 1290,
          "end": 1316
        }
      ],
      "declare": false,
      "start": 1286,
      "end": 1317
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
            "name": "l4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1322,
            "end": 1324
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1327,
                "end": 1328
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "2",
                      "cooked": "2"
                    },
                    "tail": false,
                    "start": 1331,
                    "end": 1335
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "5",
                      "cooked": "5"
                    },
                    "tail": true,
                    "start": 1342,
                    "end": 1345
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1336,
                      "end": 1337
                    },
                    "operator": "&",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1340,
                      "end": 1341
                    },
                    "start": 1336,
                    "end": 1341
                  }
                ],
                "start": 1331,
                "end": 1345
              },
              "start": 1327,
              "end": 1345
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 1348,
              "end": 1349
            },
            "start": 1327,
            "end": 1349
          },
          "definite": false,
          "start": 1322,
          "end": 1349
        }
      ],
      "declare": false,
      "start": 1318,
      "end": 1350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1350
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
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 10,
    "end": 11
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 12,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 16,
    "end": 17
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 32,
    "end": 33
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 34,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 39,
    "end": 40
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 55,
    "end": 56
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 57,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 61,
    "end": 62
  },
  {
    "type": "Template",
    "value": "}4`",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 78,
    "end": 79
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 80,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 85,
    "end": 86
  },
  {
    "type": "Template",
    "value": "}4`",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 100,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 104,
    "end": 105
  },
  {
    "type": "Template",
    "value": "}`",
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
    "type": "Numeric",
    "value": "5",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 122,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 127,
    "end": 128
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 132,
    "end": 133
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 145,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 149,
    "end": 150
  },
  {
    "type": "Template",
    "value": "}4`",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 168,
    "end": 172
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 173,
    "end": 174
  },
  {
    "type": "Template",
    "value": "}4`",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 194,
    "end": 195
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 196,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 200,
    "end": 201
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 220,
    "end": 221
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 222,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 227,
    "end": 228
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 247,
    "end": 248
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 249,
    "end": 252
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 253,
    "end": 254
  },
  {
    "type": "Template",
    "value": "}4`",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 274,
    "end": 275
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 276,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 281,
    "end": 282
  },
  {
    "type": "Template",
    "value": "}4`",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 304,
    "end": 305
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 306,
    "end": 309
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 314,
    "end": 315
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 331,
    "end": 332
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 333,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 342,
    "end": 343
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 359,
    "end": 360
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 361,
    "end": 364
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 369,
    "end": 370
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 376,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 387,
    "end": 388
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 389,
    "end": 393
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 396,
    "end": 397
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 398,
    "end": 399
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 414,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 422,
    "end": 423
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 427,
    "end": 428
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 441,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 448,
    "end": 449
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 450,
    "end": 451
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 455,
    "end": 456
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 469,
    "end": 472
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 475,
    "end": 476
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 477,
    "end": 478
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 483,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 488,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "h2",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 497,
    "end": 501
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 504,
    "end": 505
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 506,
    "end": 507
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 512,
    "end": 513
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 521,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 528,
    "end": 529
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 530,
    "end": 533
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 538,
    "end": 539
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "j2",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 559,
    "end": 560
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 561,
    "end": 565
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 568,
    "end": 569
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 570,
    "end": 571
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 575,
    "end": 576
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 591,
    "end": 592
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 593,
    "end": 596
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 599,
    "end": 600
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 601,
    "end": 602
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 607,
    "end": 608
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 623,
    "end": 624
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 625,
    "end": 629
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 632,
    "end": 633
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 634,
    "end": 635
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 640,
    "end": 641
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 657,
    "end": 658
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 659,
    "end": 662
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 667,
    "end": 668
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 684,
    "end": 685
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 686,
    "end": 690
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 693,
    "end": 694
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 695,
    "end": 696
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 701,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 712,
    "end": 713
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 714,
    "end": 717
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 720,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 722,
    "end": 723
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 729,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 740,
    "end": 741
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 742,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 751,
    "end": 752
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 758,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 767,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 773,
    "end": 774
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 775,
    "end": 776
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 780,
    "end": 781
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 794,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 801,
    "end": 802
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 803,
    "end": 804
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 808,
    "end": 809
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 813,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 822,
    "end": 825
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 828,
    "end": 829
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 830,
    "end": 831
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 836,
    "end": 837
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 841,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "h3",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 850,
    "end": 854
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 857,
    "end": 858
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 859,
    "end": 860
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 870,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 874,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 881,
    "end": 882
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 883,
    "end": 886
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 889,
    "end": 890
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 891,
    "end": 892
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 896,
    "end": 897
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "j3",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 912,
    "end": 913
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 914,
    "end": 918
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 921,
    "end": 922
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 923,
    "end": 924
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 928,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 933,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 944,
    "end": 945
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 946,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 952,
    "end": 953
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 954,
    "end": 955
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 960,
    "end": 961
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 965,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "l3",
    "start": 969,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 972,
    "end": 973
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 976,
    "end": 977
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 978,
    "end": 982
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 985,
    "end": 986
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 987,
    "end": 988
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 993,
    "end": 994
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 1095,
    "end": 1099
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 1147,
    "end": 1151
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1158,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1166,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1170,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "h4",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 1227,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1254,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "j4",
    "start": 1258,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 1267,
    "end": 1271
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1278,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1299,
    "end": 1302
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 1309,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "l4",
    "start": 1322,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Template",
    "value": "`2${",
    "start": 1331,
    "end": 1335
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Template",
    "value": "}5`",
    "start": 1342,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  }
]
```
