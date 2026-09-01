__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 20,
                    "end": 24
                  },
                  "value": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "'other'",
                    "start": 26,
                    "end": 33
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 20,
                  "end": 33
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "displayName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 46
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Other",
                    "raw": "'Other'",
                    "start": 48,
                    "end": 55
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 35,
                  "end": 55
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultEnabled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 71
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 73,
                    "end": 77
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 57,
                  "end": 77
                }
              ],
              "start": 18,
              "end": 79
            }
          ],
          "start": 17,
          "end": 80
        },
        "start": 0,
        "end": 80
      },
      "directive": null,
      "start": 0,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
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
    "value": "exports",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
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
    "type": "Identifier",
    "value": "name",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "'other'",
    "start": 26,
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
    "value": "displayName",
    "start": 35,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "'Other'",
    "start": 48,
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
    "value": "defaultEnabled",
    "start": 57,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  }
]
```
