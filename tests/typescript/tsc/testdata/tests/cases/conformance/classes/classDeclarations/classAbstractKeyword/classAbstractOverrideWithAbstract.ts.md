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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
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
                "start": 20,
                "end": 22
              },
              "expression": false,
              "start": 17,
              "end": 22
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 22
          }
        ],
        "start": 8,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
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
        "start": 41,
        "end": 42
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
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
              "start": 68,
              "end": 71
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
              "start": 71,
              "end": 74
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 59,
            "end": 74
          }
        ],
        "start": 53,
        "end": 76
      },
      "abstract": true,
      "declare": false,
      "start": 26,
      "end": 76
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
        "start": 93,
        "end": 95
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
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
                "start": 108,
                "end": 110
              },
              "expression": false,
              "start": 105,
              "end": 110
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 102,
            "end": 110
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
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
              "start": 127,
              "end": 130
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 130
          }
        ],
        "start": 96,
        "end": 132
      },
      "abstract": true,
      "declare": false,
      "start": 78,
      "end": 132
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
        "start": 149,
        "end": 151
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
      },
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
              "start": 178,
              "end": 181
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
              "start": 181,
              "end": 184
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 169,
            "end": 184
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 192
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
                "start": 196,
                "end": 198
              },
              "expression": false,
              "start": 193,
              "end": 198
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 189,
            "end": 198
          }
        ],
        "start": 163,
        "end": 200
      },
      "abstract": true,
      "declare": false,
      "start": 134,
      "end": 200
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
        "start": 208,
        "end": 210
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 221
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 222,
        "end": 224
      },
      "abstract": false,
      "declare": false,
      "start": 202,
      "end": 224
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
        "start": 241,
        "end": 243
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 254
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
              "start": 261,
              "end": 264
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
                "start": 267,
                "end": 269
              },
              "expression": false,
              "start": 264,
              "end": 269
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 261,
            "end": 269
          }
        ],
        "start": 255,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 235,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
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
    "value": "foo",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 26,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 78,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 115,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 134,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 149,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 152,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 169,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 208,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 211,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "DD",
    "start": 241,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  }
]
```
