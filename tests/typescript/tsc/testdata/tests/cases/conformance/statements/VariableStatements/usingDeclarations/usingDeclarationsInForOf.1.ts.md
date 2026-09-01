__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "using",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 13
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 13
          }
        ],
        "declare": false,
        "start": 5,
        "end": 13
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 21,
                    "end": 27
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 35
                  },
                  "optional": false,
                  "computed": false,
                  "start": 21,
                  "end": 35
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
                    "start": 39,
                    "end": 41
                  },
                  "expression": false,
                  "start": 36,
                  "end": 41
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 20,
                "end": 41
              }
            ],
            "start": 18,
            "end": 43
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 45,
            "end": 49
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 60
          }
        ],
        "start": 17,
        "end": 61
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 63,
        "end": 66
      },
      "start": 0,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 5,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 11,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Null",
    "value": "null",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 51,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  }
]
```
