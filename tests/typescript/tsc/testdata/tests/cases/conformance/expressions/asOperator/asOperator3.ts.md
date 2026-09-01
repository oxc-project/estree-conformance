__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "start": 27,
              "end": 32
            },
            "start": 25,
            "end": 32
          },
          "value": null,
          "start": 21,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 35,
          "end": 38
        },
        "start": 33,
        "end": 38
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 39
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 49,
                "end": 52
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 71,
                "end": 73
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 52,
                    "end": 55
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 456,
                    "raw": "456",
                    "start": 58,
                    "end": 61
                  },
                  "start": 52,
                  "end": 61
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                },
                "start": 52,
                "end": 71
              }
            ],
            "start": 49,
            "end": 73
          },
          "definite": false,
          "start": 45,
          "end": 73
        }
      ],
      "declare": false,
      "start": 41,
      "end": 74
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
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "leading ",
                  "cooked": "leading "
                },
                "tail": false,
                "start": 83,
                "end": 94
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 113,
                "end": 115
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 94,
                    "end": 97
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 456,
                    "raw": "456",
                    "start": 100,
                    "end": 103
                  },
                  "start": 94,
                  "end": 103
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 107,
                  "end": 113
                },
                "start": 94,
                "end": 113
              }
            ],
            "start": 83,
            "end": 115
          },
          "definite": false,
          "start": 79,
          "end": 115
        }
      ],
      "declare": false,
      "start": 75,
      "end": 116
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
            "start": 121,
            "end": 122
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 125,
                "end": 128
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " trailing",
                  "cooked": " trailing"
                },
                "tail": true,
                "start": 147,
                "end": 158
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 128,
                    "end": 131
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 456,
                    "raw": "456",
                    "start": 134,
                    "end": 137
                  },
                  "start": 128,
                  "end": 137
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 141,
                  "end": 147
                },
                "start": 128,
                "end": 147
              }
            ],
            "start": 125,
            "end": 158
          },
          "definite": false,
          "start": 121,
          "end": 158
        }
      ],
      "declare": false,
      "start": 117,
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "Hello ",
                    "cooked": "Hello "
                  },
                  "tail": false,
                  "start": 168,
                  "end": 177
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " World",
                    "cooked": " World"
                  },
                  "tail": true,
                  "start": 180,
                  "end": 188
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 177,
                  "end": 180
                }
              ],
              "start": 168,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            },
            "start": 168,
            "end": 198
          },
          "definite": false,
          "start": 164,
          "end": 198
        }
      ],
      "declare": false,
      "start": 160,
      "end": 199
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
            "start": 204,
            "end": 205
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "Hello",
                    "cooked": "Hello"
                  },
                  "tail": true,
                  "start": 208,
                  "end": 215
                }
              ],
              "expressions": [],
              "start": 208,
              "end": 215
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 219,
              "end": 225
            },
            "start": 208,
            "end": 225
          },
          "definite": false,
          "start": 204,
          "end": 225
        }
      ],
      "declare": false,
      "start": 200,
      "end": 226
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
            "start": 231,
            "end": 232
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 235,
                "end": 236
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
                    "start": 239,
                    "end": 242
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " end of string",
                      "cooked": " end of string"
                    },
                    "tail": true,
                    "start": 243,
                    "end": 259
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 242,
                    "end": 243
                  }
                ],
                "start": 239,
                "end": 259
              },
              "start": 235,
              "end": 259
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            },
            "start": 235,
            "end": 269
          },
          "definite": false,
          "start": 231,
          "end": 269
        }
      ],
      "declare": false,
      "start": 227,
      "end": 270
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
            "start": 275,
            "end": 276
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 282
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "Hello ",
                      "cooked": "Hello "
                    },
                    "tail": false,
                    "start": 283,
                    "end": 292
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " World",
                      "cooked": " World"
                    },
                    "tail": true,
                    "start": 295,
                    "end": 303
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 292,
                    "end": 295
                  }
                ],
                "start": 283,
                "end": 303
              },
              "start": 279,
              "end": 303
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 307,
              "end": 313
            },
            "start": 279,
            "end": 313
          },
          "definite": false,
          "start": 275,
          "end": 313
        }
      ],
      "declare": false,
      "start": 271,
      "end": 314
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
            "start": 319,
            "end": 320
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 326
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "Hello",
                      "cooked": "Hello"
                    },
                    "tail": true,
                    "start": 327,
                    "end": 334
                  }
                ],
                "expressions": [],
                "start": 327,
                "end": 334
              },
              "start": 323,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 338,
              "end": 344
            },
            "start": 323,
            "end": 344
          },
          "definite": false,
          "start": 319,
          "end": 344
        }
      ],
      "declare": false,
      "start": 315,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 345
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 49,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 56,
    "end": 57
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Template",
    "value": "`leading ${",
    "start": 83,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 104,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 125,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 128,
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
    "value": "456",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Template",
    "value": "} trailing`",
    "start": 147,
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
    "value": "d",
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
    "value": "`Hello ${",
    "start": 168,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 177,
    "end": 180
  },
  {
    "type": "Template",
    "value": "} World`",
    "start": 180,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 189,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Template",
    "value": "`Hello`",
    "start": 208,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 216,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 237,
    "end": 238
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 239,
    "end": 242
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 242,
    "end": 243
  },
  {
    "type": "Template",
    "value": "} end of string`",
    "start": 243,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 260,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 279,
    "end": 282
  },
  {
    "type": "Template",
    "value": "`Hello ${",
    "start": 283,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 292,
    "end": 295
  },
  {
    "type": "Template",
    "value": "} World`",
    "start": 295,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 304,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 323,
    "end": 326
  },
  {
    "type": "Template",
    "value": "`Hello`",
    "start": 327,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 335,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  }
]
```
