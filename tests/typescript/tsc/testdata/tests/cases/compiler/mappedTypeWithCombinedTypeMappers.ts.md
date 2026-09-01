__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
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
              "start": 32,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 33
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 31,
        "end": 37
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeArguments": null,
            "start": 66,
            "end": 67
          },
          "start": 60,
          "end": 67
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 85
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 88
                    },
                    "typeArguments": null,
                    "start": 87,
                    "end": 88
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "typeArguments": null,
                    "start": 89,
                    "end": 90
                  },
                  "start": 87,
                  "end": 91
                },
                "start": 85,
                "end": 91
              },
              "accessibility": null,
              "static": false,
              "start": 80,
              "end": 92
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "also",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 105
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 107,
                  "end": 108
                },
                "start": 105,
                "end": 108
              },
              "accessibility": null,
              "static": false,
              "start": 101,
              "end": 109
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 135
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 141
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 142,
                            "end": 143
                          },
                          "typeArguments": null,
                          "start": 142,
                          "end": 143
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 145
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 145
                        },
                        "start": 142,
                        "end": 146
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 149
                        },
                        "typeArguments": null,
                        "start": 148,
                        "end": 149
                      }
                    ],
                    "start": 141,
                    "end": 150
                  },
                  "start": 137,
                  "end": 150
                },
                "start": 135,
                "end": 150
              },
              "accessibility": null,
              "static": false,
              "start": 118,
              "end": 151
            }
          ],
          "start": 70,
          "end": 157
        },
        "optional": false,
        "readonly": true,
        "start": 40,
        "end": 160
      },
      "declare": false,
      "start": 22,
      "end": 160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 177
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
              "start": 184,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 185,
              "end": 193
            },
            "accessibility": null,
            "static": false,
            "start": 184,
            "end": 194
          },
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
              "start": 199,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "accessibility": null,
            "static": false,
            "start": 199,
            "end": 209
          }
        ],
        "start": 178,
        "end": 211
      },
      "declare": false,
      "start": 162,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Meta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 239
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 240,
                      "end": 245
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 247,
                      "end": 254
                    }
                  ],
                  "start": 239,
                  "end": 255
                },
                "start": 235,
                "end": 255
              },
              "start": 233,
              "end": 255
            },
            "start": 227,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 255
        }
      ],
      "declare": true,
      "start": 213,
      "end": 256
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldFail",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "important",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 287
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 289,
                        "end": 296
                      },
                      "start": 287,
                      "end": 296
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 296
                  }
                ],
                "start": 276,
                "end": 298
              },
              "start": 274,
              "end": 298
            },
            "start": 264,
            "end": 298
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "output",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "optional": false,
              "computed": false,
              "start": 301,
              "end": 309
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 318
            },
            "optional": false,
            "computed": false,
            "start": 301,
            "end": 318
          },
          "definite": false,
          "start": 264,
          "end": 318
        }
      ],
      "declare": false,
      "start": 258,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 319
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 57,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "also",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 118,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "interface",
    "start": 162,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 213,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "shouldFail",
    "start": 264,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "important",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 310,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  }
]
```
