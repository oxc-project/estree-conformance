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
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 10
                },
                "typeArguments": null,
                "start": 8,
                "end": 10
              },
              "start": 6,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 22,
            "end": 28
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I0",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 33
            },
            "typeArguments": null,
            "start": 31,
            "end": 33
          }
        ],
        "start": 22,
        "end": 33
      },
      "declare": false,
      "start": 12,
      "end": 34
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I0",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
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
              "start": 54,
              "end": 55
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 59
                },
                "typeArguments": null,
                "start": 57,
                "end": 59
              },
              "start": 55,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 54,
            "end": 60
          }
        ],
        "start": 48,
        "end": 62
      },
      "declare": false,
      "start": 35,
      "end": 62
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 74
                },
                "typeArguments": null,
                "start": 72,
                "end": 74
              },
              "start": 70,
              "end": 74
            },
            "start": 68,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 74
        }
      ],
      "declare": false,
      "start": 64,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 97
            },
            "typeArguments": null,
            "start": 95,
            "end": 97
          }
        ],
        "start": 86,
        "end": 97
      },
      "declare": false,
      "start": 76,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 111
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 124
                },
                "typeArguments": null,
                "start": 122,
                "end": 124
              },
              "start": 120,
              "end": 124
            },
            "start": 118,
            "end": 125
          }
        ],
        "start": 112,
        "end": 127
      },
      "declare": false,
      "start": 99,
      "end": 127
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 139
                },
                "typeArguments": null,
                "start": 137,
                "end": 139
              },
              "start": 135,
              "end": 139
            },
            "start": 133,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 139
        }
      ],
      "declare": false,
      "start": 129,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 151,
            "end": 157
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 162
            },
            "typeArguments": null,
            "start": 160,
            "end": 162
          }
        ],
        "start": 151,
        "end": 162
      },
      "declare": false,
      "start": 141,
      "end": 163
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 193
                },
                "typeArguments": null,
                "start": 191,
                "end": 193
              },
              "start": 189,
              "end": 193
            },
            "start": 183,
            "end": 194
          }
        ],
        "start": 177,
        "end": 196
      },
      "declare": false,
      "start": 164,
      "end": 196
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 208
                },
                "typeArguments": null,
                "start": 206,
                "end": 208
              },
              "start": 204,
              "end": 208
            },
            "start": 202,
            "end": 208
          },
          "init": null,
          "definite": false,
          "start": 202,
          "end": 208
        }
      ],
      "declare": false,
      "start": 198,
      "end": 209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 220,
            "end": 226
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 231
            },
            "typeArguments": null,
            "start": 229,
            "end": 231
          }
        ],
        "start": 220,
        "end": 231
      },
      "declare": false,
      "start": 210,
      "end": 232
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 245
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 256,
                    "end": 262
                  },
                  "start": 254,
                  "end": 262
                },
                "start": 253,
                "end": 262
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 267
                },
                "typeArguments": null,
                "start": 265,
                "end": 267
              },
              "start": 263,
              "end": 267
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 252,
            "end": 268
          }
        ],
        "start": 246,
        "end": 270
      },
      "declare": false,
      "start": 233,
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 282
                },
                "typeArguments": null,
                "start": 280,
                "end": 282
              },
              "start": 278,
              "end": 282
            },
            "start": 276,
            "end": 282
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 282
        }
      ],
      "declare": false,
      "start": 272,
      "end": 283
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 291
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 294,
            "end": 300
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 305
            },
            "typeArguments": null,
            "start": 303,
            "end": 305
          }
        ],
        "start": 294,
        "end": 305
      },
      "declare": false,
      "start": 284,
      "end": 306
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 319
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 330,
                    "end": 336
                  },
                  "start": 328,
                  "end": 336
                },
                "start": 327,
                "end": 336
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 341
                },
                "typeArguments": null,
                "start": 339,
                "end": 341
              },
              "start": 337,
              "end": 341
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 326,
            "end": 342
          }
        ],
        "start": 320,
        "end": 344
      },
      "declare": false,
      "start": 307,
      "end": 344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 344
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
    "value": "v0",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T0",
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
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "I0",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "I0",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 76,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 133,
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
    "value": "T2",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 164,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 210,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 233,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "T3",
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
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 280,
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
    "value": "type",
    "start": 284,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "I4",
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
    "type": "Keyword",
    "value": "interface",
    "start": 307,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T4",
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
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  }
]
```
