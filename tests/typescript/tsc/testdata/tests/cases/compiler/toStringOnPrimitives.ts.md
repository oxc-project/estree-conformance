__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 13
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 13
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 15
      },
      "directive": null,
      "start": 0,
      "end": 15
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
            "name": "aBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 28,
            "end": 33
          },
          "definite": false,
          "start": 20,
          "end": 33
        }
      ],
      "declare": false,
      "start": 16,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "aBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 40
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 49
          },
          "optional": false,
          "computed": false,
          "start": 35,
          "end": 49
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 35,
        "end": 51
      },
      "directive": null,
      "start": 35,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Literal",
            "value": 1,
            "raw": "1.",
            "start": 53,
            "end": 55
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 53,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 53,
        "end": 66
      },
      "directive": null,
      "start": 53,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Boolean",
    "value": "true",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "aBool",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "aBool",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 41,
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
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "1.",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  }
]
```
