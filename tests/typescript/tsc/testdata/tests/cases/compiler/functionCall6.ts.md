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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            },
            "start": 14,
            "end": 21
          },
          "start": 13,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 22,
        "end": 24
      },
      "expression": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "EmptyStatement",
      "start": 24,
      "end": 25
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 30
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 31,
            "end": 36
          }
        ],
        "optional": false,
        "start": 27,
        "end": 37
      },
      "directive": null,
      "start": 27,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 42
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 43,
            "end": 44
          }
        ],
        "optional": false,
        "start": 39,
        "end": 45
      },
      "directive": null,
      "start": 39,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 50
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 51,
            "end": 56
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 58,
            "end": 63
          }
        ],
        "optional": false,
        "start": 47,
        "end": 64
      },
      "directive": null,
      "start": 47,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 69
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 66,
        "end": 71
      },
      "directive": null,
      "start": 66,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
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
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 58,
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
    "type": "Identifier",
    "value": "foo",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  }
]
```
