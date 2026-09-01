__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 58
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 61,
        "end": 63
      },
      "expression": false,
      "start": 45,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "klass",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 75
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 76,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 78
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 88
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 96,
                  "end": 100
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 93,
                "end": 100
              }
            ],
            "start": 91,
            "end": 102
          },
          "definite": false,
          "start": 85,
          "end": 102
        }
      ],
      "declare": false,
      "start": 79,
      "end": 103
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 118
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 118
          },
          "exportKind": "value",
          "start": 114,
          "end": 118
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "klass",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 125
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "klass",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 125
          },
          "exportKind": "value",
          "start": 120,
          "end": 125
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exportKind": "value",
          "start": 127,
          "end": 130
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 167
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 170,
          "end": 172
        },
        "expression": false,
        "start": 142,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 173
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "klass",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "klass",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "exportedDirectly",
    "start": 151,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
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
    "start": 171,
    "end": 172
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./spreadExpressionContextualTypeWithNamespace_0",
        "raw": "\"./spreadExpressionContextualTypeWithNamespace_0\"",
        "start": 23,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 80
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 85
        },
        "optional": false,
        "computed": false,
        "start": 75,
        "end": 85
      },
      "directive": null,
      "start": 75,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 92
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 98
        },
        "optional": false,
        "computed": false,
        "start": 87,
        "end": 98
      },
      "directive": null,
      "start": 87,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 105
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 109
        },
        "optional": false,
        "computed": false,
        "start": 100,
        "end": 109
      },
      "directive": null,
      "start": 100,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 116
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 133
        },
        "optional": false,
        "computed": false,
        "start": 111,
        "end": 133
      },
      "directive": null,
      "start": 111,
      "end": 134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 153
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          }
        ],
        "start": 153,
        "end": 156
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 174
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    }
                  ],
                  "start": 177,
                  "end": 189
                },
                "definite": false,
                "start": 169,
                "end": 189
              }
            ],
            "declare": false,
            "start": 163,
            "end": 190
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 198
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 193,
              "end": 203
            },
            "directive": null,
            "start": 193,
            "end": 204
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 212
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "klass",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 218
              },
              "optional": false,
              "computed": false,
              "start": 207,
              "end": 218
            },
            "directive": null,
            "start": 207,
            "end": 219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 231
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 231
            },
            "directive": null,
            "start": 222,
            "end": 232
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exportedDirectly",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 235,
              "end": 257
            },
            "directive": null,
            "start": 235,
            "end": 258
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 273
            },
            "start": 261,
            "end": 274
          }
        ],
        "start": 159,
        "end": 276
      },
      "expression": false,
      "start": 136,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 286
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 278,
          "end": 288
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "optional": false,
        "computed": false,
        "start": 278,
        "end": 293
      },
      "directive": null,
      "start": 278,
      "end": 294
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 303
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 295,
          "end": 305
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 311
        },
        "optional": false,
        "computed": false,
        "start": 295,
        "end": 311
      },
      "directive": null,
      "start": 295,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 321
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 313,
          "end": 323
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 327
        },
        "optional": false,
        "computed": false,
        "start": 313,
        "end": 327
      },
      "directive": null,
      "start": 313,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 337
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 329,
          "end": 339
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 356
        },
        "optional": false,
        "computed": false,
        "start": 329,
        "end": 356
      },
      "directive": null,
      "start": 329,
      "end": 357
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 357
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"./spreadExpressionContextualTypeWithNamespace_0\"",
    "start": 23,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "klass",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "exportedDirectly",
    "start": 117,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "getStuff",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "klass",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "exportedDirectly",
    "start": 241,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 261,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "getStuff",
    "start": 278,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "getStuff",
    "start": 295,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "klass",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "getStuff",
    "start": 313,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "getStuff",
    "start": 329,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "exportedDirectly",
    "start": 340,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  }
]
```
