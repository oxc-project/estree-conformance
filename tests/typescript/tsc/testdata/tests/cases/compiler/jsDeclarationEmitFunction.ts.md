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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 17,
            "end": 21
          },
          "start": 14,
          "end": 21
        },
        "start": 11,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 23
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 14,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  }
]
```
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 27
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 43
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
              "start": 46,
              "end": 48
            },
            "expression": false,
            "start": 30,
            "end": 48
          },
          "definite": false,
          "start": 25,
          "end": 48
        }
      ],
      "declare": false,
      "start": 19,
      "end": 49
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": {
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
              "start": 93,
              "end": 95
            },
            "expression": false,
            "start": 81,
            "end": 95
          },
          "definite": false,
          "start": 76,
          "end": 95
        }
      ],
      "declare": false,
      "start": 70,
      "end": 96
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 125
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 134,
              "end": 136
            },
            "id": null,
            "generator": false,
            "start": 128,
            "end": 136
          },
          "definite": false,
          "start": 123,
          "end": 136
        }
      ],
      "declare": false,
      "start": 117,
      "end": 137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 169
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
        "start": 173,
        "end": 175
      },
      "expression": false,
      "start": 158,
      "end": 175
    },
    {
      "type": "EmptyStatement",
      "start": 175,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 176
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 81,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  }
]
```
