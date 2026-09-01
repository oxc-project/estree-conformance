__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 8,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "start": 19,
            "end": 20
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 23,
              "end": 33
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 23,
            "end": 35
          },
          "definite": false,
          "start": 19,
          "end": 35
        }
      ],
      "declare": false,
      "start": 15,
      "end": 36
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "property": {
                "type": "Literal",
                "value": "toString",
                "raw": "'toString'",
                "start": 47,
                "end": 57
              },
              "optional": false,
              "computed": true,
              "start": 45,
              "end": 58
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 45,
            "end": 60
          },
          "definite": false,
          "start": 41,
          "end": 60
        }
      ],
      "declare": false,
      "start": 37,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 8,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 25,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
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
    "value": "var",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "'toString'",
    "start": 47,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
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
    "value": ";",
    "start": 60,
    "end": 61
  }
]
```
