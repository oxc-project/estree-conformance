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
        "name": "_this",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 19
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 20,
        "end": 59
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 59
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
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ThisExpression",
              "start": 74,
              "end": 78
            },
            "id": null,
            "generator": false,
            "start": 68,
            "end": 78
          },
          "definite": false,
          "start": 64,
          "end": 78
        }
      ],
      "declare": false,
      "start": 60,
      "end": 79
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
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "_this",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "typeArguments": null,
            "arguments": [],
            "start": 88,
            "end": 99
          },
          "definite": false,
          "start": 84,
          "end": 99
        }
      ],
      "declare": false,
      "start": 80,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 109
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
    "value": "_this",
    "start": 14,
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
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 71,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 80,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  }
]
```
