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
            "name": "R",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "___",
                "raw": "\"___\"",
                "start": 36,
                "end": 41
              },
              "value": {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 43,
                "end": 45
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 36,
              "end": 45
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "___hello",
                "raw": "\"___hello\"",
                "start": 51,
                "end": 61
              },
              "value": {
                "type": "Literal",
                "value": 21,
                "raw": "21",
                "start": 63,
                "end": 65
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 51,
              "end": 65
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "_hi",
                "raw": "\"_hi\"",
                "start": 71,
                "end": 76
              },
              "value": {
                "type": "Literal",
                "value": 40,
                "raw": "40",
                "start": 78,
                "end": 80
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 71,
              "end": 80
            }
          ],
          "start": 30,
          "end": 83
        },
        "start": 26,
        "end": 83
      },
      "exportKind": "value",
      "start": 11,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
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
    "value": "R",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7,
    "end": 10
  },
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
    "type": "Identifier",
    "value": "R",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"___\"",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"___hello\"",
    "start": 51,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"_hi\"",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "40",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
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
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./m1",
        "raw": "\"./m1\"",
        "start": 14,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 30,
                "end": 33
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___hello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 43
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___hello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 43
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 35,
                "end": 43
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_hi",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_hi",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 45,
                "end": 48
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 50
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "definite": false,
          "start": 28,
          "end": 54
        }
      ],
      "declare": false,
      "start": 22,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
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
    "value": "R",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./m1\"",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "___",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "___hello",
    "start": 35,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "_hi",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  }
]
```
