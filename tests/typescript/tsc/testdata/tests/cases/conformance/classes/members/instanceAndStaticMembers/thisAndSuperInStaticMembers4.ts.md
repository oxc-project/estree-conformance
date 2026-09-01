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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 30,
              "end": 35
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 22,
            "end": 36
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 53,
                  "end": 59
                },
                "start": 51,
                "end": 59
              },
              "body": null,
              "expression": false,
              "start": 49,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 60
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
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
            "start": 65,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                },
                "start": 83,
                "end": 91
              },
              "body": null,
              "expression": false,
              "start": 81,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 92
          }
        ],
        "start": 16,
        "end": 94
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
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
              "start": 127,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 130,
                "end": 133
              },
              "start": 128,
              "end": 133
            },
            "value": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "start": 136,
              "end": 146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 120,
            "end": 147
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 161
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 164,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "optional": false,
              "computed": false,
              "start": 164,
              "end": 170
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 152,
            "end": 171
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 185
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 188,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "optional": false,
                "computed": false,
                "start": 188,
                "end": 194
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 188,
              "end": 196
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 176,
            "end": 197
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y3",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 211
            },
            "typeAnnotation": null,
            "value": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 214,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "optional": true,
                  "computed": false,
                  "start": 214,
                  "end": 221
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 214,
                "end": 223
              },
              "start": 214,
              "end": 223
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 202,
            "end": 224
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y4",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 238
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 241,
                  "end": 245
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 247,
                  "end": 250
                },
                "optional": false,
                "computed": true,
                "start": 241,
                "end": 252
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 241,
              "end": 254
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 229,
            "end": 255
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y5",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 272,
                    "end": 276
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 280,
                    "end": 283
                  },
                  "optional": true,
                  "computed": true,
                  "start": 272,
                  "end": 285
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 272,
                "end": 287
              },
              "start": 272,
              "end": 287
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 260,
            "end": 288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z3",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 302
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 305,
                  "end": 310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "optional": false,
                "computed": false,
                "start": 305,
                "end": 312
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 305,
              "end": 314
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 293,
            "end": 315
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z4",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 329
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 332,
                  "end": 337
                },
                "property": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 338,
                  "end": 341
                },
                "optional": false,
                "computed": true,
                "start": 332,
                "end": 342
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 332,
              "end": 344
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 320,
            "end": 345
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 390
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 393,
              "end": 394
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 389,
            "end": 395
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 404,
                "end": 408
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
              },
              "optional": false,
              "computed": false,
              "start": 404,
              "end": 410
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 400,
            "end": 411
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 417
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 420,
                  "end": 425
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 427
                },
                "optional": false,
                "computed": false,
                "start": 420,
                "end": 427
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 420,
              "end": 429
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 416,
            "end": 430
          }
        ],
        "start": 114,
        "end": 432
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 432
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 68,
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
    "value": "f",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 104,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "static",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 202,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 218,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "y4",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "y5",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "static",
    "start": 293,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 320,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  }
]
```
