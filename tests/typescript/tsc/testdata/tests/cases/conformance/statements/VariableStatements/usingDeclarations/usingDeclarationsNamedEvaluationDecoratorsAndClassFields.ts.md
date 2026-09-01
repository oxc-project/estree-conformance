__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              },
              "start": 27,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 32
        }
      ],
      "declare": true,
      "start": 12,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 43
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 72
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 80
                    },
                    "optional": false,
                    "computed": false,
                    "start": 66,
                    "end": 80
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
                      "body": [],
                      "start": 84,
                      "end": 86
                    },
                    "expression": false,
                    "start": 81,
                    "end": 86
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 58,
                  "end": 86
                }
              ],
              "start": 52,
              "end": 88
            },
            "abstract": false,
            "declare": false,
            "start": 46,
            "end": 88
          },
          "definite": false,
          "start": 41,
          "end": 88
        }
      ],
      "declare": false,
      "start": 35,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 99
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 121,
                    "end": 122
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 125,
                    "end": 126
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 114,
                  "end": 127
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 146
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 154
                    },
                    "optional": false,
                    "computed": false,
                    "start": 140,
                    "end": 154
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
                      "body": [],
                      "start": 158,
                      "end": 160
                    },
                    "expression": false,
                    "start": 155,
                    "end": 160
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 132,
                  "end": 160
                }
              ],
              "start": 108,
              "end": 162
            },
            "abstract": false,
            "declare": false,
            "start": 102,
            "end": 162
          },
          "definite": false,
          "start": 97,
          "end": 162
        }
      ],
      "declare": false,
      "start": 91,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 173
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 180
                },
                "start": 176,
                "end": 180
              }
            ],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 207
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 215
                    },
                    "optional": false,
                    "computed": false,
                    "start": 201,
                    "end": 215
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
                      "body": [],
                      "start": 219,
                      "end": 221
                    },
                    "expression": false,
                    "start": 216,
                    "end": 221
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 193,
                  "end": 221
                }
              ],
              "start": 187,
              "end": 223
            },
            "abstract": false,
            "declare": false,
            "start": 176,
            "end": 223
          },
          "definite": false,
          "start": 171,
          "end": 223
        }
      ],
      "declare": false,
      "start": 165,
      "end": 224
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C4",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 234
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 241
                },
                "start": 237,
                "end": 241
              }
            ],
            "id": null,
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
                    "start": 261,
                    "end": 262
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 265,
                    "end": 266
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 254,
                  "end": 267
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 286
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dispose",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 294
                    },
                    "optional": false,
                    "computed": false,
                    "start": 280,
                    "end": 294
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
                      "body": [],
                      "start": 298,
                      "end": 300
                    },
                    "expression": false,
                    "start": 295,
                    "end": 300
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 272,
                  "end": 300
                }
              ],
              "start": 248,
              "end": 302
            },
            "abstract": false,
            "declare": false,
            "start": 237,
            "end": 302
          },
          "definite": false,
          "start": 232,
          "end": 302
        }
      ],
      "declare": false,
      "start": 226,
      "end": 303
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 303
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 12,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 73,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 114,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 177,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "using",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 238,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  }
]
```
