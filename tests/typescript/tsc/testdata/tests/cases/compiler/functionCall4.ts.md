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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 15,
          "end": 18
        },
        "start": 14,
        "end": 18
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 26,
              "end": 28
            },
            "start": 19,
            "end": 28
          }
        ],
        "start": 18,
        "end": 29
      },
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 44
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 51,
              "end": 54
            },
            "start": 49,
            "end": 54
          },
          "start": 47,
          "end": 54
        },
        "start": 46,
        "end": 54
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 65
            },
            "start": 55,
            "end": 65
          }
        ],
        "start": 54,
        "end": 66
      },
      "expression": false,
      "start": 32,
      "end": 66
    },
    {
      "type": "EmptyStatement",
      "start": 66,
      "end": 67
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 77,
            "end": 82
          },
          "definite": false,
          "start": 73,
          "end": 82
        }
      ],
      "declare": false,
      "start": 69,
      "end": 83
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 19,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  }
]
```
