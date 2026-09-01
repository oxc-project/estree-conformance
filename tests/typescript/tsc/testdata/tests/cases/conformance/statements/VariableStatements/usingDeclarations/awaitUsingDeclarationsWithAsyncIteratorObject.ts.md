__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ai",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 31
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 32,
                      "end": 38
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 40,
                      "end": 49
                    }
                  ],
                  "start": 31,
                  "end": 50
                },
                "start": 18,
                "end": 50
              },
              "start": 16,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
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
            "name": "aio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 90
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 99,
                      "end": 108
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 110,
                      "end": 117
                    }
                  ],
                  "start": 90,
                  "end": 118
                },
                "start": 71,
                "end": 118
              },
              "start": 69,
              "end": 118
            },
            "start": 66,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 118
        }
      ],
      "declare": true,
      "start": 52,
      "end": 119
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
            "name": "ag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 152
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 161,
                      "end": 165
                    }
                  ],
                  "start": 152,
                  "end": 166
                },
                "start": 138,
                "end": 166
              },
              "start": 136,
              "end": 166
            },
            "start": 134,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 166
        }
      ],
      "declare": true,
      "start": 120,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 228
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aio",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "definite": false,
                "start": 225,
                "end": 234
              }
            ],
            "declare": false,
            "start": 213,
            "end": 235
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 260
                },
                "definite": false,
                "start": 252,
                "end": 260
              }
            ],
            "declare": false,
            "start": 240,
            "end": 261
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 301
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ai",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "definite": false,
                "start": 298,
                "end": 306
              }
            ],
            "declare": false,
            "start": 286,
            "end": 307
          }
        ],
        "start": 188,
        "end": 309
      },
      "expression": false,
      "start": 169,
      "end": 309
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 309
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "ai",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 18,
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
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "aio",
    "start": 66,
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
    "value": "AsyncIteratorObject",
    "start": 71,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 99,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 120,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "ag",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 138,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 169,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 175,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "it0",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "aio",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 240,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "it1",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "ag",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "it2",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "ai",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  }
]
```
