__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 37,
            "end": 54
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    },
                    "start": 69,
                    "end": 77
                  },
                  "start": 68,
                  "end": 77
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 80,
                  "end": 86
                },
                "start": 78,
                "end": 86
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 96,
                      "end": 100
                    },
                    "start": 89,
                    "end": 101
                  }
                ],
                "start": 87,
                "end": 103
              },
              "expression": false,
              "start": 67,
              "end": 103
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 59,
            "end": 103
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 132,
                      "end": 133
                    },
                    "start": 125,
                    "end": 134
                  }
                ],
                "start": 123,
                "end": 136
              },
              "expression": false,
              "start": 120,
              "end": 136
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 108,
            "end": 136
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 155
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 157,
                "end": 160
              },
              "expression": false,
              "start": 153,
              "end": 160
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 141,
            "end": 160
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  },
                  "start": 167,
                  "end": 175
                },
                "start": 166,
                "end": 175
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "typeArguments": null,
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 165,
            "end": 185
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 194,
                    "end": 200
                  },
                  "start": 192,
                  "end": 200
                },
                "start": 191,
                "end": 200
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 209
                },
                "typeArguments": null,
                "start": 203,
                "end": 209
              },
              "start": 201,
              "end": 209
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 190,
            "end": 210
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 215,
              "end": 216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 218,
                "end": 224
              },
              "start": 216,
              "end": 224
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 215,
            "end": 225
          }
        ],
        "start": 31,
        "end": 227
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 227
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 240
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              },
              "start": 248,
              "end": 256
            },
            "accessibility": null,
            "static": false,
            "start": 247,
            "end": 257
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 267,
                    "end": 273
                  },
                  "start": 265,
                  "end": 273
                },
                "start": 264,
                "end": 273
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 276,
                "end": 282
              },
              "start": 274,
              "end": 282
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 262,
            "end": 283
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 291,
                "end": 297
              },
              "start": 289,
              "end": 297
            },
            "accessibility": null,
            "static": false,
            "start": 288,
            "end": 298
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 307,
                    "end": 313
                  },
                  "start": 305,
                  "end": 313
                },
                "start": 304,
                "end": 313
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 322
                },
                "typeArguments": null,
                "start": 316,
                "end": 322
              },
              "start": 314,
              "end": 322
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 303,
            "end": 323
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 332,
                    "end": 338
                  },
                  "start": 330,
                  "end": 338
                },
                "start": 329,
                "end": 338
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 347
                },
                "typeArguments": null,
                "start": 341,
                "end": 347
              },
              "start": 339,
              "end": 347
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 328,
            "end": 348
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 353,
              "end": 354
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 356,
                "end": 362
              },
              "start": 354,
              "end": 362
            },
            "accessibility": null,
            "static": false,
            "start": 353,
            "end": 363
          }
        ],
        "start": 241,
        "end": 365
      },
      "declare": false,
      "start": 229,
      "end": 365
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 375
                },
                "typeArguments": null,
                "start": 374,
                "end": 375
              },
              "start": 372,
              "end": 375
            },
            "start": 371,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 371,
          "end": 375
        }
      ],
      "declare": false,
      "start": 367,
      "end": 376
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "typeArguments": null,
                "start": 384,
                "end": 385
              },
              "start": 382,
              "end": 385
            },
            "start": 381,
            "end": 385
          },
          "init": null,
          "definite": false,
          "start": 381,
          "end": 385
        }
      ],
      "declare": false,
      "start": 377,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 388
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 391,
          "end": 392
        },
        "start": 387,
        "end": 392
      },
      "directive": null,
      "start": 387,
      "end": 393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 395
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 399
        },
        "start": 394,
        "end": 399
      },
      "directive": null,
      "start": 394,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 400
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 59,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 89,
    "end": 95
  },
  {
    "type": "Null",
    "value": "null",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 229,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
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
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  }
]
```
