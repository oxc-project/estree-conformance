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
        "start": 100,
        "end": 101
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
              "start": 108,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 108,
            "end": 119
          }
        ],
        "start": 102,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 121
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
            "start": 127,
            "end": 128
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 137,
                  "end": 143
                }
              ],
              "start": 136,
              "end": 144
            },
            "arguments": [],
            "start": 131,
            "end": 146
          },
          "definite": false,
          "start": 127,
          "end": 146
        }
      ],
      "declare": false,
      "start": 123,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 165,
          "end": 169
        },
        "start": 163,
        "end": 169
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 170,
        "end": 173
      },
      "expression": false,
      "start": 149,
      "end": 173
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 189
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 190,
                  "end": 196
                }
              ],
              "start": 189,
              "end": 197
            },
            "arguments": [],
            "start": 182,
            "end": 199
          },
          "definite": false,
          "start": 178,
          "end": 199
        }
      ],
      "declare": false,
      "start": 174,
      "end": 200
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 223,
                        "end": 227
                      },
                      "start": 221,
                      "end": 227
                    },
                    "start": 219,
                    "end": 227
                  }
                ],
                "start": 217,
                "end": 229
              },
              "start": 215,
              "end": 229
            },
            "start": 214,
            "end": 229
          },
          "init": null,
          "definite": false,
          "start": 214,
          "end": 229
        }
      ],
      "declare": true,
      "start": 202,
      "end": 230
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 237
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 246,
                  "end": 252
                }
              ],
              "start": 245,
              "end": 253
            },
            "arguments": [],
            "start": 240,
            "end": 255
          },
          "definite": false,
          "start": 235,
          "end": 255
        }
      ],
      "declare": false,
      "start": 231,
      "end": 256
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 265,
                "end": 268
              },
              "start": 263,
              "end": 268
            },
            "start": 262,
            "end": 268
          },
          "init": null,
          "definite": false,
          "start": 262,
          "end": 268
        }
      ],
      "declare": false,
      "start": 258,
      "end": 269
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 290
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 299,
                  "end": 305
                }
              ],
              "start": 298,
              "end": 306
            },
            "arguments": [],
            "start": 293,
            "end": 308
          },
          "definite": false,
          "start": 288,
          "end": 308
        }
      ],
      "declare": false,
      "start": 284,
      "end": 309
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 94,
  "end": 309
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 202,
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
    "value": "f",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  }
]
```
