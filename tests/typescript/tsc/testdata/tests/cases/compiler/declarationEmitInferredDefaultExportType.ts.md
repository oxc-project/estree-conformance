__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 35,
              "end": 37
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 30,
            "end": 37
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 44
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 55
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 41,
            "end": 55
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 64,
              "end": 68
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 59,
            "end": 68
          }
        ],
        "start": 26,
        "end": 70
      },
      "exportKind": "value",
      "start": 11,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 70
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 46,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Null",
    "value": "null",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  }
]
```
