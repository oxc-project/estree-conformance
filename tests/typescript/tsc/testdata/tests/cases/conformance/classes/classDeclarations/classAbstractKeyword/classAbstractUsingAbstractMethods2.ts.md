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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 26,
              "end": 29
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 29
          }
        ],
        "start": 8,
        "end": 31
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 52,
        "end": 54
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 54
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
        "start": 71,
        "end": 72
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 83,
        "end": 85
      },
      "abstract": true,
      "declare": false,
      "start": 56,
      "end": 85
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 114
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
                "start": 117,
                "end": 119
              },
              "expression": false,
              "start": 114,
              "end": 119
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 111,
            "end": 119
          }
        ],
        "start": 105,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 121
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 159
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
                "start": 162,
                "end": 164
              },
              "expression": false,
              "start": 159,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 156,
            "end": 164
          }
        ],
        "start": 150,
        "end": 166
      },
      "abstract": true,
      "declare": false,
      "start": 123,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 185
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 204
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 204,
              "end": 207
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 207
          }
        ],
        "start": 186,
        "end": 209
      },
      "abstract": true,
      "declare": false,
      "start": 168,
      "end": 209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 219
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 232,
        "end": 234
      },
      "abstract": false,
      "declare": false,
      "start": 211,
      "end": 234
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 264
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 265,
        "end": 267
      },
      "abstract": true,
      "declare": false,
      "start": 236,
      "end": 267
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 277
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 288
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 298
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
                "start": 301,
                "end": 303
              },
              "expression": false,
              "start": 298,
              "end": 303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 295,
            "end": 303
          }
        ],
        "start": 289,
        "end": 305
      },
      "abstract": false,
      "declare": false,
      "start": 269,
      "end": 305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 305
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 14,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 41,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 56,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 73,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 95,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "foo",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "abstract",
    "start": 123,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
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
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 168,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 192,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 217,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 236,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 251,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 254,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 269,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "DD",
    "start": 275,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 278,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  }
]
```
