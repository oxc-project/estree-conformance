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
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "raw",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 10
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "raw",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 16
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 19,
                      "end": 24
                    },
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 26,
                      "end": 31
                    },
                    {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 33,
                      "end": 38
                    }
                  ],
                  "start": 18,
                  "end": 39
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 13,
                "end": 39
              }
            ],
            "start": 11,
            "end": 41
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 43,
            "end": 44
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 46,
            "end": 47
          }
        ],
        "optional": false,
        "start": 0,
        "end": 48
      },
      "directive": null,
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "String",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  }
]
```
