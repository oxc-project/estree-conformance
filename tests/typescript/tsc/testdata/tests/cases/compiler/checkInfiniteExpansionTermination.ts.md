__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 101
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 103
          }
        ],
        "start": 101,
        "end": 104
      },
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IObservable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 125
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 127
                        },
                        "typeArguments": null,
                        "start": 126,
                        "end": 127
                      },
                      "start": 126,
                      "end": 129
                    }
                  ],
                  "start": 125,
                  "end": 130
                },
                "start": 114,
                "end": 130
              },
              "start": 112,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 111,
            "end": 131
          }
        ],
        "start": 105,
        "end": 156
      },
      "declare": false,
      "start": 80,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISubject",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 186
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 187,
            "end": 188
          }
        ],
        "start": 186,
        "end": 189
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IObservable",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 209
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "typeArguments": null,
                "start": 210,
                "end": 211
              }
            ],
            "start": 209,
            "end": 212
          },
          "start": 198,
          "end": 212
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 213,
        "end": 216
      },
      "declare": false,
      "start": 168,
      "end": 216
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 231
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
              "start": 234,
              "end": 235
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 234,
            "end": 235
          }
        ],
        "start": 232,
        "end": 237
      },
      "declare": false,
      "start": 218,
      "end": 237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 251
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 254,
            "end": 255
          }
        ],
        "start": 252,
        "end": 257
      },
      "declare": false,
      "start": 238,
      "end": 257
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
            "name": "values",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IObservable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 286
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 286
                    }
                  ],
                  "start": 282,
                  "end": 287
                },
                "start": 271,
                "end": 287
              },
              "start": 269,
              "end": 287
            },
            "start": 263,
            "end": 287
          },
          "init": null,
          "definite": false,
          "start": 263,
          "end": 287
        }
      ],
      "declare": false,
      "start": 259,
      "end": 288
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
            "name": "values2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ISubject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 310
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 311,
                        "end": 314
                      },
                      "typeArguments": null,
                      "start": 311,
                      "end": 314
                    }
                  ],
                  "start": 310,
                  "end": 315
                },
                "start": 302,
                "end": 315
              },
              "start": 300,
              "end": 315
            },
            "start": 293,
            "end": 315
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 315
        }
      ],
      "declare": false,
      "start": 289,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 323
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "values2",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 333
        },
        "start": 317,
        "end": 333
      },
      "directive": null,
      "start": 317,
      "end": 334
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 334
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 80,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 90,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 168,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "ISubject",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 190,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 198,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 218,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 238,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 271,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "values2",
    "start": 293,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "ISubject",
    "start": 302,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "values2",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  }
]
```
