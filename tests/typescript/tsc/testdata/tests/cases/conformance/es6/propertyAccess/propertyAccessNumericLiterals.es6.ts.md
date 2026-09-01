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
            "value": 4294967295,
            "raw": "0xffffffff",
            "start": 0,
            "end": 10
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 19
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 19
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 21
      },
      "directive": null,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Literal",
            "value": 668,
            "raw": "0o01234",
            "start": 23,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 39
          },
          "optional": false,
          "computed": false,
          "start": 23,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 23,
        "end": 41
      },
      "directive": null,
      "start": 23,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Literal",
            "value": 109,
            "raw": "0b01101101",
            "start": 43,
            "end": 53
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 62
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 62
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 43,
        "end": 64
      },
      "directive": null,
      "start": 43,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234.",
            "start": 66,
            "end": 71
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 80
          },
          "optional": false,
          "computed": false,
          "start": 66,
          "end": 80
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 66,
        "end": 82
      },
      "directive": null,
      "start": 66,
      "end": 83
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
            "raw": "1e0",
            "start": 84,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 84,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 84,
        "end": 98
      },
      "directive": null,
      "start": 84,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "0xffffffff",
    "start": 0,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "0o01234",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "0b01101101",
    "start": 43,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "1234.",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 72,
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
  },
  {
    "type": "Numeric",
    "value": "1e0",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  }
]
```
