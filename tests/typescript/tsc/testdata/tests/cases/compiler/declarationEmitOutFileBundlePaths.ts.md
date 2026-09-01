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
              "type": "Literal",
              "value": "@a/b",
              "raw": "\"@a/b\"",
              "start": 21,
              "end": 27
            },
            "value": {
              "type": "Literal",
              "value": "1.0.0",
              "raw": "\"1.0.0\"",
              "start": 29,
              "end": 36
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 21,
            "end": 36
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "@a/c",
              "raw": "\"@a/c\"",
              "start": 42,
              "end": 48
            },
            "value": {
              "type": "Literal",
              "value": "1.2.3",
              "raw": "\"1.2.3\"",
              "start": 50,
              "end": 57
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 42,
            "end": 57
          }
        ],
        "start": 15,
        "end": 59
      },
      "exportKind": "value",
      "start": 0,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"@a/b\"",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"1.0.0\"",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"@a/c\"",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"1.2.3\"",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./versions.static.js",
        "raw": "'./versions.static.js'",
        "start": 21,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 67
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 67
          },
          "exportKind": "value",
          "start": 59,
          "end": 67
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "versions",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "'./versions.static.js'",
    "start": 21,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "versions",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  }
]
```
